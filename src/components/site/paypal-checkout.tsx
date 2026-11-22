"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { company } from "@/data/vc";

type Line = { id: string; name: string; qty: number; price: number };

type PayPalActions = {
  order: {
    create: (order: unknown) => Promise<string>;
    capture: () => Promise<{ id: string; status: string; purchase_units?: { payments?: { captures?: { amount?: { value: string } }[] } }[] }>;
  };
};

type PayPalSdk = {
  Buttons: (options: {
    style?: Record<string, unknown>;
    onClick?: (data: unknown, actions: { resolve: () => Promise<void>; reject: () => Promise<void> }) => Promise<void> | void;
    createOrder: (data: unknown, actions: PayPalActions) => Promise<string>;
    onApprove: (data: unknown, actions: PayPalActions) => Promise<void>;
    onError?: (err: unknown) => void;
  }) => { render: (el: HTMLElement) => Promise<void>; close?: () => Promise<void> };
};

const SDK_URL = `https://www.paypal.com/sdk/js?client-id=${company.paypalClientId}&components=buttons&enable-funding=venmo&currency=USD&intent=capture`;
let sdk: Promise<PayPalSdk> | null = null;

function loadSdk(): Promise<PayPalSdk> {
  sdk ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SDK_URL;
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

const usd = (n: number) => n.toFixed(2);

/**
 * PayPal, card, and Venmo buttons that charge the cart total.
 * `validate` runs before PayPal opens so the client's details are filled in first.
 */
export function PayPalCheckout({
  lines,
  validate,
  onPaid,
}: {
  lines: Line[];
  validate: () => boolean;
  onPaid: (payment: { orderId: string; status: string; amount: string }) => Promise<void>;
}) {
  const container = useRef<HTMLDivElement>(null);
  const latest = useRef({ lines, validate, onPaid });
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    latest.current = { lines, validate, onPaid };
  });

  useEffect(() => {
    let cancelled = false;
    loadSdk()
      .then((paypal) => {
        if (cancelled || !container.current) return;
        container.current.innerHTML = "";
        return paypal
          .Buttons({
            style: { layout: "vertical", shape: "rect", height: 48, label: "pay" },
            onClick: (_data, actions) => (latest.current.validate() ? actions.resolve() : actions.reject()),
            createOrder: (_data, actions) => {
              const items = latest.current.lines;
              const total = items.reduce((sum, l) => sum + l.price * l.qty, 0);
              return actions.order.create({
                purchase_units: [
                  {
                    description: `${company.legalName} services`,
                    amount: {
                      currency_code: "USD",
                      value: usd(total),
                      breakdown: { item_total: { currency_code: "USD", value: usd(total) } },
                    },
                    items: items.map((l) => ({
                      name: l.name.slice(0, 127),
                      sku: l.id.slice(0, 127),
                      quantity: String(l.qty),
                      unit_amount: { currency_code: "USD", value: usd(l.price) },
                      category: "DIGITAL_GOODS",
                    })),
                  },
                ],
                application_context: { shipping_preference: "NO_SHIPPING", brand_name: company.legalName },
              });
            },
            onApprove: async (_data, actions) => {
              setError("");
              const capture = await actions.order.capture();
              const amount = capture.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.value ?? "";
              await latest.current.onPaid({ orderId: capture.id, status: capture.status, amount });
            },
            onError: () => setError("The payment didn't go through. Please try again, or call our office to pay by phone."),
          })
          .render(container.current);
      })
      .then(() => !cancelled && setState("ready"))
      .catch(() => !cancelled && setState("error"));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      {state === "loading" && (
        <p className="flex items-center justify-center gap-2 py-4 text-sm text-white/70">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading secure checkout…
        </p>
      )}
      {state === "error" && (
        <p className="rounded-sm bg-white/10 px-4 py-3 text-sm text-white">
          Secure checkout could not load. Please refresh the page or call {company.phone} to pay by phone.
        </p>
      )}
      {/* isolate keeps PayPal's frames below the site's sticky bars; the padding sits outside the frames' box. */}
      <div className={state === "ready" ? "isolate rounded-sm bg-white p-3" : "h-0 overflow-hidden"}>
        <div ref={container} className="w-full overflow-hidden" />
      </div>
      {error && <p className="mt-3 text-sm text-amaranth-200">{error}</p>}
    </div>
  );
}
