import { Metadata } from "next";

import { FormTambahKriteria } from "@/components/dashboard/kriteria/tambah/form-tambah-kriteria";

export const metadata: Metadata = {
  title: "Tambah Kriteria",
  description:
    "Halaman Tambah Kriteria untuk Sistem Penunjang Keputusan dengan menggunakan metode Simple Additive Weighting.",
};

export default function DashboardKriteriaTambahPage() {
  return (
    <div className="p-4">
      <div className="p-4 rounded shadow bg-gray-800">
        <FormTambahKriteria />
      </div>
    </div>
  );
}
