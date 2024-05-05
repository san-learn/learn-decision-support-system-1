import { getAllAlternatifOrderByRangkingAsc } from "@/actions/alternatif";
import { TableDataNilaiSimpleAdditiveWeighting } from "./table-data-nilai-simple-additive-weighting";

export async function TableNilaiPerangkingan() {
  const allAlternatif = await getAllAlternatifOrderByRangkingAsc();

  return (
    <table className="table-auto w-full border-collapse border-[1px] border-white">
      <thead>
        <tr className="text-left ">
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Nomor
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Nama
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-center">
            Nilai Simple Additive Weighting
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-center">
            Rangking
          </th>
        </tr>
      </thead>
      <tbody>
        {allAlternatif.map((alternatif, index) => {
          return (
            <tr key={index}>
              <td className="border-t-0 p-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {index + 1}
              </td>
              <td className="border-t-0 p-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {alternatif.nama}
              </td>
              <TableDataNilaiSimpleAdditiveWeighting
                id_alternatif={alternatif.id_alternatif}
              />
              <td className="border-t-0 p-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {alternatif?.rangking}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
