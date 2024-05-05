import Link from "next/link";

import { getAllKriteria } from "@/actions/kriteria";
import { getAllAlternatif } from "@/actions/alternatif";

import { TableNilai } from "@/components/dashboard/nilai/table-nilai";

export default async function DashboardNilaiPage() {
  const allKriteria = await getAllKriteria();
  const allAlternatif = await getAllAlternatif();

  return (
    <div className="flex p-4 flex-col gap-4">
      <div className="w-full xl:mb-0 mx-auto text-white">
        <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full rounded">
          <div className="rounded-t mb-0 py-3 border-0 bg-gray-800">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-medium text-base">List Nilai</h3>
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
