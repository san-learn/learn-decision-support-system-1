import { getAllAlternatif } from "@/actions/alternatif";
import { getAllKriteria } from "@/actions/kriteria";

import { TableDataNilaiByAlternatif } from "@/components/dashboard/nilai/table-data-nilai-by-alternatif";

export async function TableNilai() {
  const all_kriteria = await getAllKriteria();
  const all_alternatif = await getAllAlternatif();

  return (
    <table className="items-center bg-transparent w-full border-collapse">
      <thead>
        <tr>
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
                className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-wrap"
              >
                {`${kriteria.nama_kriteria.split(" ")[0]} ${
                  kriteria.nama_kriteria.split(" ")[1]
                } ...`}
              </th>
            );
          })}
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-center">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        {all_alternatif?.map((alternatif, index) => {
          return (
            <tr key={index}>
              <td className="border border-l-0 px-4 align-middle text-xs md:text-sm whitespace-nowrap">
                {index + 1}
              </td>
              <td className="border px-4 align-middle text-xs md:text-sm whitespace-nowrap">
                {alternatif.nama}
              </td>
              <TableDataNilaiByAlternatif
                id_alternatif={alternatif.id_alternatif}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
