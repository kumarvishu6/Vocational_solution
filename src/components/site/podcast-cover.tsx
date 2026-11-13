import Image from "next/image";
import { cn } from "@/lib/utils";

/** Studio photo with the show name set in type, used wherever the podcast appears. */
export function PodcastCover({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={cn("group relative aspect-square overflow-hidden", className)}>
      <Image
        src="/images/podcast-studio.jpg"
        alt="Broadcast microphone in the Vocational Concepts studio"
        fill
        sizes={compact ? "160px" : "(min-width: 1024px) 40vw, 90vw"}
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent" />
      {!compact && (
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-300">The podcast</p>
          <p className="font-heading mt-2 text-3xl font-bold uppercase leading-none tracking-wide text-white sm:text-4xl">
            Vocational Concepts
          </p>
          <span className="mt-4 block h-0.5 w-16 bg-gold-400" />
        </div>
      )}
    </div>
  );
}
