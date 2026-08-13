import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const variants = {
  primary:
    "shine bg-gold-400 text-navy-950 hover:bg-gold-300 shadow-[0_8px_24px_-8px_rgba(201,162,77,0.55)]",
  secondary:
    "bg-transparent text-white border border-white/30 hover:border-gold-300 hover:text-gold-300",
  ghost:
    "bg-transparent text-navy-900 border border-navy-900/15 hover:border-gold-400 hover:text-navy-950",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-200 whitespace-nowrap";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  onClick,
  ...props
}: ButtonBaseProps & { href?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
