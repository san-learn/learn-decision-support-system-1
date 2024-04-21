import Link from "next/link";

import { getAllAlternatif } from "@/actions/alternatif";
import { DeleteButtonForm } from "@/components/delete-button-form";

export default async function DashboardAlternatifPage() {
  const allAlternatif = await getAllAlternatif();

  return (
    <>
      <h1>Alternatif</h1>
      <Link
        href="/dashboard/alternatif/tambah"
        className="mt-4 dark:bg-white dark:text-black p-2 inline-block my-8"
      >
        Tambah Alternatif
      </Link>
      <table className="table-auto w-full border-collapse border-[1px] border-white">
        <thead>
          <tr className="text-left ">
            <th className="border-[1px] border-white p-2.5">No</th>
            <th className="border-[1px] border-white p-2.5">Nama Alternatif</th>
            <th className="border-[1px] border-white p-2.5">Nilai SAW</th>
            <th className="border-[1px] border-white p-2.5">Rangking</th>
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
                  <td className="border-[1px] border-white p-2">
                    {alternatif.nilai_saw}
                  </td>
                  <td className="border-[1px] border-white p-2">
                    {alternatif.rangking}
                  </td>
                  <td className="border-[1px] border-white p-2 ">
                    <div className="flex justify-around items-center">
                      <Link
                        href={`/dashboard/alternatif/edit/${alternatif.id_alternatif}`}
                      >
                        Edit
                      </Link>
                      <DeleteButtonForm id={alternatif.id_alternatif} />
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
