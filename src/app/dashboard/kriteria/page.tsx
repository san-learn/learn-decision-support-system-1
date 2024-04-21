import { getAllKriteria } from "@/actions/kriteria";
import { KriteriaDeleteButtonForm } from "@/components/delete-button-form";

import Link from "next/link";

export default async function DashboardKriteriaPage() {
  const allKriteria = await getAllKriteria();

  return (
    <>
      <h1>Kriteria</h1>
      <Link
        href="/dashboard/kriteria/tambah"
        className="mt-4 dark:bg-white dark:text-black p-2 inline-block my-8"
      >
        Tambah Kriteria
      </Link>
      <table className="table-auto w-full border-collapse border-[1px] border-white">
        <thead>
          <tr className="text-left ">
            <th className="border-[1px] border-white p-2.5">No</th>
            <th className="border-[1px] border-white p-2.5">Nama Kriteria</th>
            <th className="border-[1px] border-white p-2.5">Bobot</th>
            <th className="border-[1px] border-white p-2.5">Tipe</th>
            <th className="border-[1px] border-white p-2.5">Sub Kriteria</th>
            <th className="border-[1px] border-white p-2.5">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {allKriteria.map((kriteria, index) => {
            return (
              <>
                <tr key={index}>
                  <td className="border-[1px] border-white p-2">{index + 1}</td>
                  <td className="border-[1px] border-white p-2">
                    {kriteria.nama_kriteria}
                  </td>
                  <td className="border-[1px] border-white p-2">
                    {kriteria.bobot_kriteria}
                  </td>
                  <td className="border-[1px] border-white p-2">
                    {kriteria.tipe_kriteria}
                  </td>
                  <td className="border-[1px] border-white p-2">
                    <Link
                      href={`/dashboard/kriteria/sub-kriteria/${kriteria.id_kriteria}`}
                    >
                      Lihat
                    </Link>
                  </td>
                  <td className="border-[1px] border-white p-2 ">
                    <div className="flex justify-around items-center">
                      <Link
                        href={`/dashboard/kriteria/edit/${kriteria.id_kriteria}`}
                      >
                        Edit
                      </Link>
                      <KriteriaDeleteButtonForm id={kriteria.id_kriteria} />
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
