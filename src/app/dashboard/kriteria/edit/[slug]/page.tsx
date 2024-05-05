import { FormEditKriteria } from "@/components/dashboard/kriteria/edit/[slug]/form-edit-kriteria";

export default async function DashboardKriteriaEditPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="p-4">
      <div className="p-4 rounded shadow bg-gray-800">
        <FormEditKriteria id_kriteria={params.slug} />
      </div>
    </div>
  );
}
