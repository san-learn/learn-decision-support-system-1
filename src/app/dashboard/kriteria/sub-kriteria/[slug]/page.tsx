import Link from "next/link";

import { getAllSubKriteriaWithId } from "@/actions/sub-kriteria";
import { getKriteria } from "@/actions/kriteria";

import { SubKriteriaDeleteButtonForm } from "@/components/delete-button-form";

export default async function DashboardKriteriaSubKriteriaPage({
  params,
}: {
  params: { slug: string };
}) {
  const id_kriteria = params.slug;

  const kriteria = await getKriteria(id_kriteria);
  const allSubKriteria = await getAllSubKriteriaWithId(id_kriteria);

  return (
    <>
      <div>
        <Link href={`/dashboard/kriteria`} className="inline-block">
          Sub Kriteria | {kriteria?.nama_kriteria}
        </Link>
      </div>
      <Link
        href={`/dashboard/kriteria/sub-kriteria/tambah/${id_kriteria}`}
        className="mt-4 dark:bg-white dark:text-black p-2 inline-block my-8"
      >
        Tambah Sub Kriteria
      </Link>
      <table className="table-auto w-full border-collapse border-[1px] border-white">
        <thead>
          <tr className="text-left ">
            <th className="border-[1px] border-white p-2.5">No</th>
            <th className="border-[1px] border-white p-2.5">
              Nama Sub Kriteria
            </th>
            <th className="border-[1px] border-white p-2.5">Nilai</th>
            <th className="border-[1px] border-white p-2.5">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {allSubKriteria.map((subKriteria, index) => {
            return (
              <>
                <tr key={index}>
                  <td className="border-[1px] border-white p-2">{index + 1}</td>
                  <td className="border-[1px] border-white p-2">
                    {subKriteria.nama_sub_kriteria}
                  </td>
                  <td className="border-[1px] border-white p-2">
                    {subKriteria.nilai_sub_kriteria}
                  </td>
                  <td className="border-[1px] border-white p-2 ">
                    <div className="flex justify-around items-center">
                      <Link
                        href={`/dashboard/kriteria/sub-kriteria/edit/${subKriteria.id_sub_kriteria}`}
                      >
                        Edit
                      </Link>
                      <SubKriteriaDeleteButtonForm
                        id={subKriteria.id_sub_kriteria}
                      />
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
