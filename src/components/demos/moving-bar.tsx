import { Marquee } from "@/components/ui/marquee";
import { movingBarItems } from "@/data/site";

export function MovingBar() {
  return (
    <div className="bg-amaranth-500 py-3.5">
      <Marquee
        items={movingBarItems}
        itemClassName="text-gold-300! font-semibold! tracking-[0.18em]!"
        dotClassName="bg-gold-400!"
      />
    </div>
  );
}
