import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ArticleBody } from "@/components/site/article-body";
import { FinalCta } from "@/components/site/home/sections";
import { PageHero } from "@/components/site/page-hero";
import { formatDate } from "@/components/site/post-card";
import { company } from "@/data/vc";
import { getPost } from "@/lib/content";

export async function generateMetadata({ params }: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};
  return { title: `${post.title} | ${company.name}`, description: post.excerpt || undefined };
}

export default async function ArticlePage({ params }: PageProps<"/resources/[slug]">) {
  const post = await getPost((await params).slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${post.category} · ${formatDate(post.published_at)}`}
        title={post.title}
        crumbs={[{ label: "Resources", href: "/resources" }, { label: post.title }]}
      >
        {post.excerpt || undefined}
      </PageHero>

      <article className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {post.cover_url && (
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-sm shadow-xl shadow-navy-900/10">
              <Image src={post.cover_url} alt="" fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
            </div>
          )}
          <ArticleBody text={post.body} />
          <Link
            href="/resources"
            className="font-heading mt-12 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amaranth-500 hover:text-navy-900"
          >
            <ArrowLeft className="h-4 w-4" /> All resources
          </Link>
        </div>
      </article>

      <FinalCta />
    </>
  );
}
