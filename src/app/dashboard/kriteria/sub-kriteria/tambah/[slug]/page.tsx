import { FormTambahSubKriteria } from "@/components/dashboard/kriteria/sub-kriteria/tambah/[slug]/form-tambah-sub-kriteria";

export default function DashboardKriteriaSubKriteriaTambahPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="p-4">
      <div className="p-4 rounded shadow bg-gray-800">
        <FormTambahSubKriteria id_kriteria={params.slug} />
      </div>
    </div>
  );
}
