"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { company } from "@/data/vc";

type PayPalSdk = {
  Buttons: (options: {
    style?: Record<string, unknown>;
    onClick?: (data: unknown, actions: { resolve: () => Promise<void>; reject: () => Promise<void> }) => Promise<void> | void;
    createOrder: () => Promise<string>;
    onApprove: (data: { orderID: string }) => Promise<void>;
    onError?: (err: unknown) => void;
  }) => { render: (el: HTMLElement) => Promise<void> };
};

const liveClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "";
let sdk: Promise<PayPalSdk> | null = null;

/** In preview the buttons load with PayPal's public sandbox ID ("sb") so the page shows its final look. */
function loadSdk(preview: boolean): Promise<PayPalSdk> {
  const clientId = preview || !liveClientId ? "sb" : liveClientId;
  sdk ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&components=buttons&enable-funding=venmo&currency=USD&intent=capture`;
    script.async = true;
    script.dataset.namespace = "paypalCheckout";
    script.onload = () => resolve((window as unknown as { paypalCheckout: PayPalSdk }).paypalCheckout);
    script.onerror = () => {
      sdk = null;
      reject(new Error("PayPal could not load."));
    };
    document.head.appendChild(script);
  });
  return sdk;
}

async function post<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
  return json as T;
}

/**
 * PayPal, card, and Venmo buttons. The order total is created and captured on the server.
 * `getCustomer` returns the client's details, or null (after showing what's missing) to stop PayPal opening.
 */
export function PayPalCheckout({
  items,
  getCustomer,
  onPaid,
  preview = false,
}: {
  preview?: boolean;
  items: { id: string; qty: number }[];
  getCustomer: () => Record<string, string> | null;
  onPaid: (reference: string) => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const latest = useRef({ items, getCustomer, onPaid });
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const [error, setError] = useState("");
  const [finishing, setFinishing] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    latest.current = { items, getCustomer, onPaid };
  });

  useEffect(() => {
    let cancelled = false;
    loadSdk(preview)
      .then((paypal) => {
        if (cancelled || !container.current) return;
        container.current.innerHTML = "";
        return paypal
          .Buttons({
            style: { layout: "vertical", shape: "rect", height: 48, label: "pay" },
            onClick: (_data, actions) => {
              setError("");
              setNotice("");
              if (!latest.current.getCustomer()) return actions.reject();
              if (preview) {
                setNotice("Online payment switches on once our PayPal account is connected. For now, request an invoice below.");
                return actions.reject();
              }
              return actions.resolve();
            },
            createOrder: async () => (await post<{ id: string }>("/api/paypal/order", { items: latest.current.items })).id,
            onApprove: async ({ orderID }) => {
              setFinishing(true);
              try {
                const { reference } = await post<{ reference: string }>("/api/paypal/capture", {
                  orderId: orderID,
                  items: latest.current.items,
                  customer: latest.current.getCustomer(),
                });
                latest.current.onPaid(reference);
              } catch (err) {
                setFinishing(false);
                setError(err instanceof Error ? err.message : "The payment could not be completed.");
              }
            },
            onError: () => setError(`The payment didn't go through. Please try again, or call ${company.phone} to pay by phone.`),
          })
          .render(container.current);
      })
      .then(() => !cancelled && setState("ready"))
      .catch(() => !cancelled && setState("error"));
    return () => {
      cancelled = true;
    };
  }, [preview]);

  if (finishing) {
    return (
      <p className="flex items-center justify-center gap-2 rounded-md bg-cloud py-6 text-sm font-medium text-navy-900">
        <Loader2 className="h-4 w-4 animate-spin" /> Payment approved. Finishing your order…
      </p>
    );
  }

  return (
    <div>
      {state === "loading" && (
        <p className="flex items-center justify-center gap-2 py-6 text-sm text-ink-500">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading secure checkout…
        </p>
      )}
      {state === "error" && (
        <p className="rounded-md bg-amaranth-100 px-4 py-3 text-sm text-amaranth-600">
          Secure checkout could not load. Please refresh the page or call {company.phone} to pay by phone.
        </p>
      )}
      {/* isolate keeps PayPal's frames below the site's sticky bars. */}
      <div ref={container} className={state === "ready" ? "isolate" : "h-0 overflow-hidden"} />
      {notice && <p className="mt-3 rounded-md bg-gold-100 px-4 py-3 text-sm text-navy-900 ring-1 ring-gold-400/40">{notice}</p>}
      {error && <p className="mt-3 rounded-md bg-amaranth-100 px-4 py-3 text-sm text-amaranth-600">{error}</p>}
    </div>
  );
}
