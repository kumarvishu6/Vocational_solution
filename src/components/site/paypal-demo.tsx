"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

type DemoSdk = {
  Buttons: (options: {
    style?: Record<string, unknown>;
    createOrder: (data: unknown, actions: { order: { create: (o: unknown) => Promise<string> } }) => Promise<string>;
    onApprove: (data: unknown, actions: { order: { capture: () => Promise<unknown> } }) => Promise<void>;
  }) => { render: (el: HTMLElement) => Promise<void> };
};

/** PayPal's test mode ("sb" sandbox): shows the real checkout windows without moving any money. */
export function PayPalDemo() {
  const router = useRouter();
  const container = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=sb&components=buttons&enable-funding=venmo&currency=USD&intent=capture";
    script.dataset.namespace = "paypalDemo";
    script.onload = () => {
      const paypal = (window as unknown as { paypalDemo: DemoSdk }).paypalDemo;
      if (!container.current) return;
      paypal
        .Buttons({
          style: { layout: "vertical", shape: "rect", height: 48, label: "pay" },
          createOrder: (_d, actions) =>
            actions.order.create({
              purchase_units: [
                {
                  description: "Case Consultation (1 hour)",
                  amount: { currency_code: "USD", value: "350.00" },
                },
              ],
              application_context: { shipping_preference: "NO_SHIPPING", user_action: "PAY_NOW" },
            }),
          onApprove: async (_d, actions) => {
            await actions.order.capture();
            router.push("/checkout/success?ref=DEMO-0001");
          },
        })
        .render(container.current)
        .then(() => setReady(true));
    };
    document.head.appendChild(script);
    return () => script.remove();
  }, [router]);

  return (
    <div>
      {!ready && (
        <p className="flex items-center justify-center gap-2 py-6 text-sm text-ink-500">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading PayPal…
        </p>
      )}
      <div ref={container} className="isolate" />
    </div>
  );
}
