import { TableNilaiKeputusan } from "@/components/dashboard/hasil-perhitungan/nilai-keputusan/table-nilai-keputusan";
import { TableNilaiKonversiKeputusan } from "@/components/dashboard/hasil-perhitungan/nilai-konversi-keputusan/table-nilai-konversi-keputusan";
import { TableDataNilaiNormalisasiBobot } from "@/components/dashboard/hasil-perhitungan/nilai-normalisasi-bobot/table-nilai-normalisasi-bobot";

import { TableNilaiNormalisasiMatrik } from "@/components/dashboard/hasil-perhitungan/nilai-normalisasi-matrik/table-nilai-normalisasi-matrik";
import { TableNilaiPerangkingan } from "@/components/dashboard/hasil-perhitungan/perangkingan/table-nilai-perangkingan";

export default async function DashboardMetodeSAWPage() {
  return (
    <>
      <div className="flex p-4 flex-col gap-4">
        <div className="w-full xl:mb-0 mx-auto text-white">
          <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full rounded">
            <div className="rounded-t mb-0 py-3 border-0 bg-gray-800">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-medium text-base">Nilai Keputusan</h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <TableNilaiKeputusan />
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-4 flex-col gap-4">
        <div className="w-full xl:mb-0 mx-auto text-white">
          <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full rounded">
            <div className="rounded-t mb-0 py-3 border-0 bg-gray-800">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-medium text-base">
                    Nilai Konversi Keputusan
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <TableNilaiKonversiKeputusan />
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-4 flex-col gap-4">
        <div className="w-full xl:mb-0 mx-auto text-white">
          <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full rounded">
            <div className="rounded-t mb-0 py-3 border-0 bg-gray-800">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-medium text-base">
                    Nilai Normalisasi Matrik
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <TableNilaiNormalisasiMatrik />
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-4 flex-col gap-4">
        <div className="w-full xl:mb-0 mx-auto text-white">
          <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full rounded">
            <div className="rounded-t mb-0 py-3 border-0 bg-gray-800">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-medium text-base">
                    Nilai Normalisasi Bobot
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <TableDataNilaiNormalisasiBobot />
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-4 flex-col gap-4">
        <div className="w-full xl:mb-0 mx-auto text-white">
          <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full rounded">
            <div className="rounded-t mb-0 py-3 border-0 bg-gray-800">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-medium text-base">Perangkingan</h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <TableNilaiPerangkingan />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
