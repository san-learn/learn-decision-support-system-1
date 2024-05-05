import { getAllAlternatif } from "@/actions/alternatif";
import { getAllKriteria } from "@/actions/kriteria";
import { TableDataNilaiSubKriteria } from "./table-data-nilai-sub-kriteria";
import { TableDataNilaiMaximalSubKriteria } from "./table-data-nilai-maximal-sub-kriteria";
import { TableDataNilaiMinimalSubKriteria } from "./table-data-nilai-minimal-sub-kriteria";

export async function TableNilaiKonversiKeputusan() {
  const all_kriteria = await getAllKriteria();
  const all_alternatif = await getAllAlternatif();

  return (
    <table className="items-center bg-transparent w-full border-collapse">
      <thead>
        <tr className="text-left">
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Nomor
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Nama
          </th>
          {all_kriteria?.map((kriteria, index) => {
            return (
              <th
                key={index}
                className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-wrap text-center"
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
              <td className="border-t-0 p-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {index + 1}
              </td>
              <td className="border-t-0 p-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {alternatif.nama}
              </td>
              <TableDataNilaiSubKriteria
                id_alternatif={alternatif.id_alternatif}
              />
            </tr>
          );
        })}
        <tr>
          <td
            colSpan={2}
            className="border-t-0 p-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap"
          >
            Nilai Maximal
          </td>
          {all_kriteria?.map((kriteria, index) => {
            return (
              <TableDataNilaiMaximalSubKriteria
                key={index}
                id_kriteria={kriteria.id_kriteria}
              />
            );
          })}
        </tr>
        <tr>
          <td
            colSpan={2}
            className="border-t-0 p-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap"
          >
            Nilai Minimal
          </td>
          {all_kriteria?.map((kriteria, index) => {
            return (
              <TableDataNilaiMinimalSubKriteria
                key={index}
                id_kriteria={kriteria.id_kriteria}
              />
            );
          })}
        </tr>
      </tbody>
    </table>
  );
}
