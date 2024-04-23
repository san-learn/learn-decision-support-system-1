import Link from "next/link";

import { getAllKriteria } from "@/actions/kriteria";
import { getAllAlternatif } from "@/actions/alternatif";

import { TableDataNilai } from "@/components/table-data-nilai";

export default async function DashboardNilaiPage() {
  const allKriteria = await getAllKriteria();
  const allAlternatif = await getAllAlternatif();

  return (
    <>
      <h1>Alternatif</h1>
      <Link
        href="/dashboard/nilai/tambah"
        className="mt-4 dark:bg-white dark:text-black p-2 inline-block my-8"
      >
        Tambah Nilai
      </Link>
      <table className="table-auto w-full border-collapse border-[1px] border-white">
        <thead>
          <tr className="text-left ">
            <th className="border-[1px] border-white p-2.5">No</th>
            <th className="border-[1px] border-white p-2.5">Nama Alternatif</th>
            {allKriteria.map((kriteria, index) => {
              return (
                <th key={index} className="border-[1px] border-white p-2.5">
                  {kriteria.nama_kriteria}
                </th>
              );
            })}
            <th className="border-[1px] border-white p-2.5">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {allAlternatif.map((alternatif, index) => {
            return (
              <>
                <tr key={index}>
                  <td className="border-[1px] border-white p-2">{index + 1}</td>
                  <td className="border-[1px] border-white p-2">
                    {alternatif.nama_alternatif}
                  </td>
                  <TableDataNilai idAlternatif={alternatif.id_alternatif} />
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
