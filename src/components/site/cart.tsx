"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { allProducts, formatPrice, isHourly, type Product } from "@/data/vc";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "vc-cart";

type CartLine = { id: string; qty: number };
type CartItem = { product: Product; qty: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  open: boolean;
  bump: number;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  setOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

function readStored(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as CartLine[]) : [];
    return parsed.filter((l) => allProducts.some((p) => p.id === l.id && p.price !== null) && l.qty > 0);
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [bump, setBump] = useState(0);

  // Restore the saved cart after mount so the server and first client render match.
  useEffect(() => {
    const stored = readStored();
    queueMicrotask(() => {
      setLines(stored);
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Storage can be unavailable (private mode); the cart still works for this visit.
    }
  }, [lines, loaded]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const add = useCallback((id: string) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.id === id);
      return existing ? prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l)) : [...prev, { id, qty: 1 }];
    });
    setBump((b) => b + 1);
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) => (qty <= 0 ? prev.filter((l) => l.id !== id) : prev.map((l) => (l.id === id ? { ...l, qty } : l))));
  }, []);

  const remove = useCallback((id: string) => setLines((prev) => prev.filter((l) => l.id !== id)), []);
  const clear = useCallback(() => {
    setLines([]);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Nothing stored to clear.
    }
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const items = lines
      .map((l) => ({ product: allProducts.find((p) => p.id === l.id)!, qty: l.qty }))
      .filter((i) => i.product);
    return {
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      subtotal: items.reduce((n, i) => n + (i.product.price ?? 0) * i.qty, 0),
      open,
      bump,
      add,
      setQty,
      remove,
      clear,
      setOpen,
    };
  }, [lines, open, bump, add, setQty, remove, clear]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function CartButton({ className }: { className?: string }) {
  const { count, bump, setOpen } = useCart();
  return (
    <button
      onClick={() => setOpen(true)}
      aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
      className={cn(
        "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-navy-900/15 text-navy-900 transition-colors hover:border-gold-400 hover:text-gold-600",
        className
      )}
    >
      <ShoppingBag className="h-5 w-5" />
      {count > 0 && (
        <span
          key={bump}
          className="animate-cart-bump absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amaranth-500 px-1 text-[0.7rem] font-bold text-white"
        >
          {count}
        </span>
      )}
    </button>
  );
}

function CartDrawer() {
  const { items, subtotal, open, setOpen, setQty, remove } = useCart();

  return (
    <div className={cn("fixed inset-0 z-[70]", open ? "pointer-events-auto" : "pointer-events-none")} inert={!open}>
      <div
        className={cn("absolute inset-0 bg-navy-950/60 transition-opacity duration-300", open ? "opacity-100 backdrop-blur-sm" : "opacity-0")}
        onClick={() => setOpen(false)}
      />
      <aside
        role="dialog"
        aria-label="Your cart"
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-navy-900/10 px-6 py-5">
          <p className="font-heading text-2xl font-bold uppercase tracking-wide text-navy-900">Your cart</p>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-colors hover:border-gold-400"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cloud text-gold-500">
              <ShoppingBag className="h-7 w-7" />
            </span>
            <p className="font-heading mt-5 text-xl font-bold uppercase tracking-wide text-navy-900">Your cart is empty</p>
            <p className="mt-2 text-sm text-ink-500">Browse court services, career counseling, and more.</p>
            <Link
              href="/fees"
              onClick={() => setOpen(false)}
              className="font-heading mt-6 inline-flex h-12 items-center rounded-sm bg-navy-900 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white"
            >
              View services & fees
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-navy-900/10 overflow-y-auto px-6">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="animate-fade-up py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-heading text-lg font-bold uppercase leading-tight tracking-wide text-navy-900">{product.name}</p>
                      {product.detail && <p className="mt-0.5 text-sm text-ink-500">{product.detail}</p>}
                    </div>
                    <button
                      onClick={() => remove(product.id)}
                      aria-label={`Remove ${product.name}`}
                      className="text-ink-300 transition-colors hover:text-amaranth-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center rounded-sm border border-navy-900/15">
                      <button onClick={() => setQty(product.id, qty - 1)} aria-label="Decrease" className="flex h-9 w-9 items-center justify-center text-navy-900 hover:text-gold-600">
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-semibold text-navy-900">{qty}</span>
                      <button onClick={() => setQty(product.id, qty + 1)} aria-label="Increase" className="flex h-9 w-9 items-center justify-center text-navy-900 hover:text-gold-600">
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                      {isHourly(product) && <span className="pr-3 text-xs uppercase tracking-[0.14em] text-ink-500">hrs</span>}
                    </div>
                    <p className="font-heading text-xl font-bold text-navy-900">{formatPrice((product.price ?? 0) * qty)}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-navy-900/10 bg-cloud px-6 py-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">Subtotal</p>
                <p className="font-heading text-3xl font-bold text-navy-900">{formatPrice(subtotal)}</p>
              </div>
              <Link
                href="/checkout"
                onClick={() => setOpen(false)}
                className="shine font-heading mt-5 flex h-14 items-center justify-center rounded-sm bg-gold-400 text-[0.95rem] font-semibold uppercase tracking-[0.16em] text-navy-950 transition-colors hover:bg-gold-300"
              >
                Checkout
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="mt-3 w-full text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 hover:text-navy-900"
              >
                Continue browsing
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
