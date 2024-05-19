import { Metadata } from "next";

import { FormEditKriteria } from "@/components/dashboard/kriteria/edit/[slug]/form-edit-kriteria";

export const metadata: Metadata = {
  title: "Edit Kriteria",
  description:
    "Halaman Edit Kriteria untuk Sistem Penunjang Keputusan dengan menggunakan metode Simple Additive Weighting.",
};

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
