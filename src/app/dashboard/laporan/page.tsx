import { Metadata } from "next";

import { getAllAlternatifOrderByRangkingAsc } from "@/actions/alternatif";

import { TablePerangkingan } from "@/components/dashboard/laporan/table-perangkingan";
import { ButtonPrint } from "@/components/button-print";

export const metadata: Metadata = {
  title: "Laporan",
  description:
    "Halaman Laporan untuk Sistem Penunjang Keputusan dengan menggunakan metode Simple Additive Weighting.",
};

export default async function DashboardCetakLaporanPage() {
  const allAlternatif = await getAllAlternatifOrderByRangkingAsc();

  return (
    <div className="flex p-4 flex-col gap-4 relative">
      <div className="w-full xl:mb-0 mx-auto text-white">
        <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full rounded">
          <div className="rounded-t mb-0 py-3 border-0 bg-gray-800">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium text-sm md:text-base">
                    Perangkingan
                  </h3>
                  <ButtonPrint />
                </div>
              </div>
            </div>
          </div>
          <TablePerangkingan allAlternatif={allAlternatif} />
        </div>
      </div>
    </div>
  );
}
