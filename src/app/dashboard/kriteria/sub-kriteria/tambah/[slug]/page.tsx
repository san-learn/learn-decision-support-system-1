import { Metadata } from "next";

import { FormTambahSubKriteria } from "@/components/dashboard/kriteria/sub-kriteria/tambah/[slug]/form-tambah-sub-kriteria";

export const metadata: Metadata = {
  title: "Tambah Sub Kriteria",
  description:
    "Halaman Tambah Sub Kriteria untuk Sistem Penunjang Keputusan dengan menggunakan metode Simple Additive Weighting.",
};

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
