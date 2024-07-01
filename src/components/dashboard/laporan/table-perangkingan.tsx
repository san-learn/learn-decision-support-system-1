import { TablePrint } from "./table-print";

interface TableSimpleAdditiveWeightingProps {
  allAlternatif: {
    nama: string;
    nomor_kk: string;
    alamat: string;
    pekerjaan: string;
    nilai_simple_additive_weighting: number | null;
    rangking: number | null;
  }[];
}

export async function TablePerangkingan({
  allAlternatif,
}: TableSimpleAdditiveWeightingProps) {
  return (
    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse">
        <thead>
          <tr className="text-left ">
            <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
              Nomor
            </th>
            <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
              Nama
            </th>
            <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
              Nomor KK
            </th>
            <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
              Alamat
            </th>
            <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
              Pekerjaan
            </th>
            <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-center">
              Nilai Simple Additive Weighting
            </th>
            <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-center">
              Rangking
            </th>
          </tr>
        </thead>
        <tbody>
          {allAlternatif?.map((alternatif, index) => {
            return (
              <tr key={index}>
                <td className="border p-4 border-r-0 border-l-0 align-middle text-sm whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="border p-4 align-middle text-sm whitespace-nowrap">
                  {alternatif.nama}
                </td>
                <td className="border p-4 align-middle text-sm whitespace-nowrap">
                  {alternatif.nomor_kk}
                </td>
                <td className="border p-4 align-middle text-sm whitespace-nowrap">
                  {alternatif.alamat}
                </td>
                <td className="border p-4 align-middle text-sm whitespace-nowrap">
                  {alternatif.pekerjaan}
                </td>
                <td className="border align-middle text-sm whitespace-nowrap text-center">
                  {alternatif.nilai_simple_additive_weighting}
                </td>
                <td className="border p-4 align-middle border-r-0 border-l-0 text-sm whitespace-nowrap">
                  {alternatif?.rangking}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <TablePrint allAlternatif={allAlternatif} />
    </div>
  );
}
