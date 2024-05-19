import { Metadata } from "next";

import { TableNilai } from "@/components/dashboard/nilai/table-nilai";

export const metadata: Metadata = {
  title: "Nilai",
  description:
    "Halaman Nilai untuk Sistem Penunjang Keputusan dengan menggunakan metode Simple Additive Weighting.",
};

export default async function DashboardNilaiPage() {
  return (
    <div className="flex p-4 flex-col gap-4">
      <div className="w-full xl:mb-0 mx-auto text-white">
        <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full rounded">
          <div className="rounded-t mb-0 py-3 border-0 bg-gray-800">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-medium text-sm md:text-base">List Nilai</h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <TableNilai />
          </div>
        </div>
      </div>
    </div>
  );
}
