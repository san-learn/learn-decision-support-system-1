import { Metadata } from "next";

import { FormTambahAlternatif } from "@/components/dashboard/alternatif/tambah/form-tambah-alternatif";

export const metadata: Metadata = {
  title: "Tambah Alternatif",
  description:
    "Halaman Tambah Alternatif untuk Sistem Penunjang Keputusan dengan menggunakan metode Simple Additive Weighting.",
};
export default function DashboardAlternatifTambahPage() {
  return (
    <div className="p-4">
      <div className="p-4 rounded shadow bg-gray-800">
        <FormTambahAlternatif />
      </div>
    </div>
  );
}
