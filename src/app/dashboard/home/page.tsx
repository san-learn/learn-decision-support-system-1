import { AlternatifCard } from "@/components/dashboard/home/alternatif-card";
import { KriteriaCard } from "@/components/dashboard/home/kriteria-card";
import { SubKriteriaCard } from "@/components/dashboard/home/sub-kriteria-card";

export default function DashboardHomePage() {
  return (
    <div className="flex flex-col lg:flex-row p-4 gap-4">
      <AlternatifCard />
      <KriteriaCard />
      <SubKriteriaCard />
    </div>
  );
}
