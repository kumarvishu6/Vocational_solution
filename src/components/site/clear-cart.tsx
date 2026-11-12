"use client";

import { useEffect } from "react";
import { useCart } from "@/components/site/cart";

/** Empties the cart once an order has gone through (also after returning from Stripe). */
export function ClearCart() {
  const { clear } = useCart();
  useEffect(() => clear(), [clear]);
  return null;
}
