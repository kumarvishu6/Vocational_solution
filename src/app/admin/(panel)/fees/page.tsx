import { deleteProduct } from "@/app/admin/actions";
import { DeleteButton } from "@/components/admin/controls";
import { ProductForm, type ProductRow } from "@/components/admin/forms";
import { PageHeader } from "@/components/admin/ui";
import { shopCategories } from "@/data/vc";
import { requireAdmin } from "@/lib/admin";

export default async function AdminFeesPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("products").select("*").order("sort");
  const products = ((data ?? []) as ProductRow[]).map((p) => ({ ...p, price: p.price === null ? null : Number(p.price) }));

  return (
    <div className="space-y-8">
      <PageHeader
        title="Fees"
        description="Services and prices on the Fees page and the service pages. Leave the price empty to show 'Contact for pricing'. Untick 'Shown' to hide a fee without deleting it."
      />
      {shopCategories.map((c) => {
        const rows = products.filter((p) => p.category === c.id);
        return (
          <section key={c.id} className="space-y-3">
            <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-navy-900">{c.title}</h2>
            {rows.map((p) => (
              <div key={p.id} className="space-y-1">
                <ProductForm product={p} />
                <div className="flex justify-end">
                  <DeleteButton action={deleteProduct} id={p.id} label="Delete" confirmText={`Delete "${p.name}"? This cannot be undone.`} />
                </div>
              </div>
            ))}
          </section>
        );
      })}
      <section className="space-y-3">
        <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-navy-900">Add a fee</h2>
        <ProductForm />
      </section>
    </div>
  );
}
