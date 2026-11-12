import Image from "next/image";
import { Expandable } from "@/components/site/expandable";
import type { TeamMember } from "@/data/vc";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article
      id={member.slug}
      className="group flex h-full scroll-mt-32 flex-col overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-navy-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10 sm:flex-row"
    >
      <div className="relative aspect-[4/5] shrink-0 overflow-hidden bg-navy-900 sm:aspect-auto sm:w-48">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(min-width: 640px) 192px, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <span className="font-heading absolute inset-0 flex items-center justify-center text-6xl font-bold text-gold-300">
            {member.name
              .split(" ")
              .map((p) => p[0])
              .join("")}
          </span>
        )}
        <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold-400 transition-transform duration-500 group-hover:scale-x-100" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amaranth-500">{member.role}</p>
        <h3 className="font-heading mt-2 text-2xl font-bold uppercase tracking-wide text-navy-900">{member.name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">{member.credentials}</p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-700">{member.summary}</p>
        <Expandable label="Read bio" openLabel="Close bio">
          <div className="mt-4 space-y-3 text-[0.92rem] leading-relaxed text-ink-500">
            {member.bio.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Expandable>
      </div>
    </article>
  );
}
