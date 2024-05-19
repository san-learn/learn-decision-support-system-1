import { Metadata } from "next";

import { FormEditNilai } from "@/components/dashboard/nilai/edit/[slug]/form-edit-nilai";

export const metadata: Metadata = {
  title: "Edit Nilai",
  description:
    "Halaman Edit Nilai untuk Sistem Penunjang Keputusan dengan menggunakan metode Simple Additive Weighting.",
};

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
