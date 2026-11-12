import { Marquee } from "@/components/ui/marquee";
import { movingBarItems } from "@/data/vc";

/** Crimson band with gold text under the site menu. */
export function MovingBar() {
  return (
    <div className="bg-amaranth-500 py-2 sm:py-3">
      <Marquee
        items={movingBarItems}
        itemClassName="font-heading text-gold-300! text-[0.72rem]! font-semibold! tracking-[0.16em]! sm:text-[0.95rem]! sm:tracking-[0.2em]!"
        dotClassName="bg-gold-400!"
      />
    </div>
  );
}
