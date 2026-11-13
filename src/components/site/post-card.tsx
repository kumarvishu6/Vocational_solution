import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import type { Post } from "@/lib/content";

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/resources/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-navy-900/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/10"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-navy-900">
        {post.cover_url ? (
          <Image
            src={post.cover_url}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-gold-300">
            <FileText className="h-10 w-10" strokeWidth={1.4} />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amaranth-500">
          {post.category} · {formatDate(post.published_at)}
        </p>
        <h3 className="font-heading mt-2 text-xl font-bold uppercase leading-tight tracking-wide text-navy-900">{post.title}</h3>
        {post.excerpt && <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-500">{post.excerpt}</p>}
        <span className="font-heading mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amaranth-500">
          Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
