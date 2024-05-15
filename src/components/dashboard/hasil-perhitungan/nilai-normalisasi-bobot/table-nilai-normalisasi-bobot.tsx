import { getAllAlternatif } from "@/actions/alternatif";
import { getAllKriteria } from "@/actions/kriteria";

import { ContainerNilaiNormalisasiBobot } from "@/components/dashboard/hasil-perhitungan/nilai-normalisasi-bobot/container-nilai-normalisasi-bobot";
import { TableDataNilaiSimpleAdditiveWeighting } from "@/components/dashboard/hasil-perhitungan/nilai-normalisasi-bobot/table-data-nilai-simple-additive-weighting";

export async function TableDataNilaiNormalisasiBobot() {
  const all_kriteria = await getAllKriteria();
  const all_alternatif = await getAllAlternatif();

  return (
    <table className="items-center bg-transparent w-full border-collapse">
      <thead>
        <tr className="text-left ">
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Nomor
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Nama
          </th>
          {all_kriteria?.map((kriteria, index) => {
            return (
              <th
                key={index}
                className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-center text-wrap"
              >
                {kriteria.nama_kriteria}
              </th>
            );
          })}
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-wrap text-center">
            Nilai Simple Additive Weighting
          </th>
        </tr>
      </thead>
      <tbody>
        {all_alternatif?.map((alternatif, index) => {
          return (
            <tr key={index}>
              <td className="border p-4 border-r-0 border-l-0 align-middle text-sm whitespace-nowrap text-left">
                {index + 1}
              </td>
              <td className="border p-4 align-middle text-sm whitespace-nowrap text-left">
                {alternatif.nama}
              </td>
              <ContainerNilaiNormalisasiBobot
                id_alternatif={alternatif.id_alternatif}
              />
              <TableDataNilaiSimpleAdditiveWeighting
                id_alternatif={alternatif.id_alternatif}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
