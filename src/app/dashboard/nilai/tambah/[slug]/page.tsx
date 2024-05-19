import { Metadata } from "next";

import { FormTambahNilai } from "@/components/dashboard/nilai/tambah/[slug]/form-tambah-nilai";

export const metadata: Metadata = {
  title: "Tambah Nilai",
  description:
    "Halaman Tambah Nilai untuk Sistem Penunjang Keputusan dengan menggunakan metode Simple Additive Weighting.",
};

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
