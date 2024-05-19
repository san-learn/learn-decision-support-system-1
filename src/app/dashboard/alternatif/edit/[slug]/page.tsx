import { Metadata } from "next";

import { FormEditAlternatif } from "@/components/dashboard/alternatif/edit/[slug]/form-edit-alternatif";

export const metadata: Metadata = {
  title: "Edit Alternatif",
  description:
    "Halaman Edit Alternatif untuk Sistem Penunjang Keputusan dengan menggunakan metode Simple Additive Weighting.",
};

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
