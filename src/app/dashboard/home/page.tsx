import { Metadata } from "next";

import { AlternatifCard } from "@/components/dashboard/home/alternatif-card";
import { KriteriaCard } from "@/components/dashboard/home/kriteria-card";
import { SubKriteriaCard } from "@/components/dashboard/home/sub-kriteria-card";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Halaman Home untuk Sistem Penunjang Keputusan dengan menggunakan metode Simple Additive Weighting.",
};

export default function DashboardHomePage() {
  return (
    <div className="flex flex-col lg:flex-row p-4 gap-4">
      <AlternatifCard />
      <KriteriaCard />
      <SubKriteriaCard />
    </div>
  );
}
