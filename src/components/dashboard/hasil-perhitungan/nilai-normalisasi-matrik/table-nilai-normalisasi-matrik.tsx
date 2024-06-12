import { getAllAlternatif } from "@/actions/alternatif";
import { getAllKriteria } from "@/actions/kriteria";

import { ContainerNilaiNormalisasiMatrik } from "@/components/dashboard/hasil-perhitungan/nilai-normalisasi-matrik/container-nilai-normalisasi-matrik";

export async function TableNilaiNormalisasiMatrik() {
  const all_kriteria = await getAllKriteria();
  const all_alternatif = await getAllAlternatif();

  console.log("3");

  return (
    <table className="items-center bg-transparent w-full border-collapse">
      <thead>
        <tr className="text-left">
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
                className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-wrap text-left"
              >
                {kriteria.nama_kriteria}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {all_alternatif?.map((alternatif, index) => {
          return (
            <tr key={index}>
              <td className="border p-4 border-r-0 border-l-0 align-middle text-sm whitespace-nowrap">
                {index + 1}
              </td>
              <td className="border p-4 align-middle text-sm whitespace-nowrap">
                {alternatif.nama}
              </td>
              <ContainerNilaiNormalisasiMatrik
                id_alternatif={alternatif.id_alternatif}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
