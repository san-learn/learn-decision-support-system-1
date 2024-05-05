import { FormEditSubKriteria } from "@/components/dashboard/kriteria/sub-kriteria/edit/[slug]/form-edit-sub-kriteria";

export default async function DashboardKriteriaSubKriteriaEditPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="p-4">
      <div className="p-4 rounded shadow bg-gray-800">
        <FormEditSubKriteria id_sub_kriteria={params.slug} />
      </div>
    </div>
  );
}
