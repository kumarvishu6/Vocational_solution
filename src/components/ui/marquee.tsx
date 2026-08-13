import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  itemClassName,
  dotClassName,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
  dotClassName?: string;
}) {
  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      <div className="flex shrink-0 animate-marquee items-center gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {items.map((item, i) => (
          <MarqueeItem key={`a-${i}`} item={item} itemClassName={itemClassName} dotClassName={dotClassName} />
        ))}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 animate-marquee items-center gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
      >
        {items.map((item, i) => (
          <MarqueeItem key={`b-${i}`} item={item} itemClassName={itemClassName} dotClassName={dotClassName} />
        ))}
      </div>
    </div>
  );
}

function MarqueeItem({
  item,
  itemClassName,
  dotClassName,
}: {
  item: string;
  itemClassName?: string;
  dotClassName?: string;
}) {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      <span
        className={cn(
          "text-sm font-medium uppercase tracking-[0.2em] text-white/45",
          itemClassName
        )}
      >
        {item}
      </span>
      <span className={cn("h-1 w-1 rounded-full bg-gold-400/60", dotClassName)} />
    </div>
  );
}
