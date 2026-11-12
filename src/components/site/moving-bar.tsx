import { Marquee } from "@/components/ui/marquee";
import { movingBarItems } from "@/data/vc";

/** Crimson band with gold text that sits under each page's hero. */
export function MovingBar() {
  return (
    <div className="relative border-y border-gold-400/40 bg-amaranth-500 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <Marquee
        items={movingBarItems}
        itemClassName="font-heading text-gold-300! text-[0.95rem]! font-semibold! tracking-[0.2em]!"
        dotClassName="bg-gold-400!"
      />
    </div>
  );
}
