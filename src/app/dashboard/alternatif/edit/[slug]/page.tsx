import { FormEditAlternatif } from "@/components/dashboard/alternatif/edit/[slug]/form-edit-alternatif";

export default async function DashboardAlternatifEditPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="p-4">
      <div className="p-4 rounded shadow bg-gray-800">
        <FormEditAlternatif id_alternatif={params.slug} />
      </div>
    </div>
  );
}
