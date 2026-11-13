"use client";

import { useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { ImagePlus, Loader2, Trash2, X } from "lucide-react";
import { createClient } from "@/lib/supabase/browser";

export function SubmitButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-md bg-navy-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:opacity-60 ${className}`}
    >
      {pending && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}

/** Small form that asks for confirmation before running a delete action. */
export function DeleteButton({
  action,
  id,
  label = "Delete",
  confirmText = "Delete this item? This cannot be undone.",
}: {
  action: (form: FormData) => Promise<void>;
  id: string;
  label?: string;
  confirmText?: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!window.confirm(confirmText)) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-sm font-semibold text-amaranth-500 transition-colors hover:bg-amaranth-100"
      >
        <Trash2 className="h-4 w-4" /> {label}
      </button>
    </form>
  );
}

/** Uploads a photo to the Supabase "media" bucket and stores its public URL in a hidden input. */
export function ImageField({ name, defaultValue, folder }: { name: string; defaultValue?: string | null; folder: string }) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const input = useRef<HTMLInputElement>(null);

  async function upload(file: File) {
    if (!file.type.startsWith("image/")) return setError("Please choose an image file.");
    if (file.size > 8 * 1024 * 1024) return setError("Please choose an image under 8 MB.");
    setBusy(true);
    setError("");
    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const path = `${folder}/${crypto.randomUUID()}.${ext}`;
    const supabase = createClient();
    const { error: uploadError } = await supabase.storage.from("media").upload(path, file, { contentType: file.type });
    if (uploadError) {
      setError(uploadError.message);
    } else {
      setUrl(supabase.storage.from("media").getPublicUrl(path).data.publicUrl);
    }
    setBusy(false);
  }

  return (
    <div>
      <input type="hidden" name={name} value={url} />
      <div className="flex items-center gap-4">
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-md bg-cloud ring-1 ring-navy-900/10">
          {url ? <Image src={url} alt="" fill sizes="96px" className="object-cover" /> : <ImagePlus className="h-6 w-6 text-ink-300" />}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => input.current?.click()}
            disabled={busy}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-navy-900/15 px-4 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-400 disabled:opacity-60"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImagePlus className="h-4 w-4" />}
            {url ? "Replace photo" : "Upload photo"}
          </button>
          {url && (
            <button
              type="button"
              onClick={() => setUrl("")}
              className="inline-flex h-10 items-center gap-1.5 rounded-md px-3 text-sm font-semibold text-ink-500 hover:text-amaranth-500"
            >
              <X className="h-4 w-4" /> Remove
            </button>
          )}
        </div>
      </div>
      <input
        ref={input}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) upload(file);
          e.target.value = "";
        }}
      />
      {error && <p className="mt-2 text-sm text-amaranth-500">{error}</p>}
    </div>
  );
}
