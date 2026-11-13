"use client";

import { useActionState } from "react";
import { saveEpisode, savePost, saveProduct, saveTeamMember, type FormState } from "@/app/admin/actions";
import { ImageField, SubmitButton } from "@/components/admin/controls";
import { Card, Field, inputClass, toLocalInput } from "@/components/admin/ui";
import type { Episode, Post } from "@/lib/content";

const initial: FormState = {};

function ErrorNote({ state }: { state: FormState }) {
  if (!state.error) return null;
  return <p className="rounded-md bg-amaranth-100 px-4 py-3 text-sm font-medium text-amaranth-600">{state.error}</p>;
}

function PublishToggle({ defaultChecked, label }: { defaultChecked: boolean; label: string }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-navy-900">
      <input type="checkbox" name="published" defaultChecked={defaultChecked} className="h-5 w-5 accent-[#002642]" />
      {label}
    </label>
  );
}

export function PostForm({ post, categories }: { post?: Post; categories: string[] }) {
  const [state, action] = useActionState(savePost, initial);
  return (
    <form action={action} className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <input type="hidden" name="id" value={post?.id ?? ""} />
      <Card className="space-y-5">
        <Field label="Title" htmlFor="title">
          <input id="title" name="title" required defaultValue={post?.title} className={inputClass} />
        </Field>
        <Field label="Short summary" hint="One or two sentences shown on the Resources page." htmlFor="excerpt">
          <textarea id="excerpt" name="excerpt" rows={2} defaultValue={post?.excerpt} className={inputClass} />
        </Field>
        <Field
          label="Article"
          hint='Leave a blank line between paragraphs. Start a line with "## " for a heading and "- " for a bullet point.'
          htmlFor="body"
        >
          <textarea id="body" name="body" rows={18} defaultValue={post?.body} className={`${inputClass} font-mono text-sm`} />
        </Field>
      </Card>
      <div className="space-y-6">
        <Card className="space-y-5">
          <PublishToggle defaultChecked={post?.published ?? false} label="Published on the website" />
          <Field label="Category" htmlFor="category">
            <select id="category" name="category" defaultValue={post?.category ?? categories[0]} className={inputClass}>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Date" htmlFor="published_at">
            <input id="published_at" name="published_at" type="date" defaultValue={toLocalInput(post?.published_at)} className={inputClass} />
          </Field>
          <Field label="Web address" hint="Optional. Made from the title if left empty." htmlFor="slug">
            <input id="slug" name="slug" defaultValue={post?.slug} placeholder="my-article-title" className={inputClass} />
          </Field>
        </Card>
        <Card>
          <Field label="Cover photo">
            <ImageField name="cover_url" defaultValue={post?.cover_url} folder="posts" />
          </Field>
        </Card>
        <ErrorNote state={state} />
        <SubmitButton className="w-full">Save post</SubmitButton>
      </div>
    </form>
  );
}

export function EpisodeForm({ episode, nextNumber }: { episode?: Episode; nextNumber: number }) {
  const [state, action] = useActionState(saveEpisode, initial);
  return (
    <form action={action} className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <input type="hidden" name="id" value={episode?.id ?? ""} />
      <Card className="space-y-5">
        <Field label="Title" htmlFor="title">
          <input id="title" name="title" required defaultValue={episode?.title} className={inputClass} />
        </Field>
        <Field label="Description" htmlFor="description">
          <textarea id="description" name="description" rows={5} defaultValue={episode?.description} className={inputClass} />
        </Field>
        <Field label="Listen link" hint="Link to the episode on Spotify, Apple Podcasts, YouTube, or another host." htmlFor="listen_url">
          <input id="listen_url" name="listen_url" type="url" defaultValue={episode?.listen_url ?? ""} placeholder="https://" className={inputClass} />
        </Field>
      </Card>
      <div className="space-y-6">
        <Card className="space-y-5">
          <PublishToggle defaultChecked={episode?.published ?? false} label="Published on the website" />
          <Field label="Episode number" htmlFor="number">
            <input id="number" name="number" type="number" min={1} required defaultValue={episode?.number ?? nextNumber} className={inputClass} />
          </Field>
          <Field label="Length" hint='For example "34 min".' htmlFor="duration">
            <input id="duration" name="duration" defaultValue={episode?.duration ?? ""} className={inputClass} />
          </Field>
          <Field label="Date" htmlFor="published_at">
            <input id="published_at" name="published_at" type="date" defaultValue={toLocalInput(episode?.published_at)} className={inputClass} />
          </Field>
        </Card>
        <ErrorNote state={state} />
        <SubmitButton className="w-full">Save episode</SubmitButton>
      </div>
    </form>
  );
}

export type TeamRow = {
  id: string;
  slug: string;
  name: string;
  credentials: string;
  role: string;
  summary: string;
  bio: string[];
  photo_url: string | null;
  sort: number;
};

export function TeamForm({ member, nextSort }: { member?: TeamRow; nextSort: number }) {
  const [state, action] = useActionState(saveTeamMember, initial);
  return (
    <form action={action} className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <input type="hidden" name="id" value={member?.id ?? ""} />
      <Card className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" htmlFor="name">
            <input id="name" name="name" required defaultValue={member?.name} className={inputClass} />
          </Field>
          <Field label="Credentials" hint="For example: MA, CRC" htmlFor="credentials">
            <input id="credentials" name="credentials" defaultValue={member?.credentials} className={inputClass} />
          </Field>
        </div>
        <Field label="Role" hint="For example: Vocational Evaluator" htmlFor="role">
          <input id="role" name="role" defaultValue={member?.role} className={inputClass} />
        </Field>
        <Field label="One-line summary" hint="Shown on the Team page before 'Read bio'." htmlFor="summary">
          <textarea id="summary" name="summary" rows={2} defaultValue={member?.summary} className={inputClass} />
        </Field>
        <Field label="Full biography" hint="Leave a blank line between paragraphs." htmlFor="bio">
          <textarea id="bio" name="bio" rows={10} defaultValue={member?.bio.join("\n\n")} className={inputClass} />
        </Field>
      </Card>
      <div className="space-y-6">
        <Card>
          <Field label="Photo">
            <ImageField name="photo_url" defaultValue={member?.photo_url} folder="team" />
          </Field>
        </Card>
        <Card>
          <Field label="Order on the page" hint="Lower numbers appear first. The first person is featured." htmlFor="sort">
            <input id="sort" name="sort" type="number" defaultValue={member?.sort ?? nextSort} className={inputClass} />
          </Field>
          <input type="hidden" name="slug" value={member?.slug ?? ""} />
        </Card>
        <ErrorNote state={state} />
        <SubmitButton className="w-full">Save team member</SubmitButton>
      </div>
    </form>
  );
}

export type ProductRow = {
  id: string;
  category: string;
  name: string;
  detail: string | null;
  price: number | null;
  sort: number;
  active: boolean;
};

const categoryOptions = [
  { id: "court", label: "Court Services" },
  { id: "career", label: "Career Counseling" },
  { id: "other", label: "Other Vocational Services" },
];

/** One editable fee. Used for existing rows and for the "add a fee" row. */
export function ProductForm({ product, defaultCategory = "court" }: { product?: ProductRow; defaultCategory?: string }) {
  const [state, action] = useActionState(saveProduct, initial);
  return (
    <form action={action} className="grid gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-navy-900/10 md:grid-cols-[1.6fr_1fr_0.7fr_1fr_auto] md:items-end">
      <input type="hidden" name="id" value={product?.id ?? ""} />
      <input type="hidden" name="sort" value={product?.sort ?? 99} />
      <Field label="Name">
        <input name="name" required defaultValue={product?.name} placeholder="Service name" className={inputClass} />
      </Field>
      <Field label="Detail">
        <input name="detail" defaultValue={product?.detail ?? ""} placeholder="e.g. Per hour" className={inputClass} />
      </Field>
      <Field label="Price ($)">
        <input name="price" inputMode="decimal" defaultValue={product?.price ?? ""} placeholder="Contact" className={inputClass} />
      </Field>
      <Field label="Category">
        <select name="category" defaultValue={product?.category ?? defaultCategory} className={inputClass}>
          {categoryOptions.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </Field>
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 text-sm font-medium text-navy-900">
          <input type="checkbox" name="active" defaultChecked={product?.active ?? true} className="h-4 w-4 accent-[#002642]" />
          Shown
        </label>
        <SubmitButton className="h-10 px-4">{product ? "Save" : "Add"}</SubmitButton>
      </div>
      {(state.error || state.saved) && (
        <p className={`text-sm md:col-span-5 ${state.error ? "text-amaranth-500" : "text-emerald-700"}`}>
          {state.error ?? "Saved."}
        </p>
      )}
    </form>
  );
}
