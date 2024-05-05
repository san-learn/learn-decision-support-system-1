import { FormEditNilai } from "@/components/dashboard/nilai/edit/[slug]/form-edit-nilai";

export default async function DashboardNilaiEditPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="p-4">
      <div className="p-4 rounded shadow bg-gray-800">
        <FormEditNilai id_alternatif={params.slug} />
      </div>
    </div>
  );
}
