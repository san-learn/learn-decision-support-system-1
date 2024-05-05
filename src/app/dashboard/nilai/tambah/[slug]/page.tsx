import { FormTambahNilai } from "@/components/dashboard/nilai/tambah/[slug]/form-tambah-nilai";

export default async function DashboardNilaiTambahPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="p-4">
      <div className="p-4 rounded shadow bg-gray-800">
        <FormTambahNilai id_alternatif={params.slug} />
      </div>
    </div>
  );
}
