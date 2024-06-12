import Link from "next/link";

import { getAllSubKriteriaByIdAlternatif } from "@/actions/sub-kriteria";

import { ButtonActionHapusNilai } from "@/components/dashboard/nilai/button-action-hapus-nilai";

import { MdEditDocument } from "react-icons/md";

export async function TableDataNilaiByAlternatif({
  id_alternatif,
}: {
  id_alternatif: number;
}) {
  const all_sub_kriteria = await getAllSubKriteriaByIdAlternatif(id_alternatif);

  return (
    <>
      {all_sub_kriteria?.map((sub_kriteria, index) => {
        return (
          <td
            key={index}
            className="border px-4 align-middle text-sm whitespace-nowrap text-center"
          >
            {sub_kriteria.nama_sub_kriteria}
          </td>
        );
      })}
      {all_sub_kriteria?.length! > 0 ? (
        <td className="border px-4 text-sm whitespace-nowrap">
          <div className="flex gap-x-4 justify-center items-center">
            <Link
              href={`/dashboard/nilai/edit/${id_alternatif}`}
              className="flex justify-center rounded px-2 py-1 group shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 my-2"
            >
              <MdEditDocument className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 group-hover:text-white" />
            </Link>
            <ButtonActionHapusNilai id_alternatif={id_alternatif} />
          </div>
        </td>
      ) : (
        <td className="border px-4 text-sm whitespace-nowrap text-center">
          <Link
            href={`/dashboard/nilai/tambah/${id_alternatif}`}
            className="inline-block rounded bg-emerald-500 px-2 py-1 my-2 font-medium leading-6 text-white hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            Tambah Nilai
          </Link>
        </td>
      )}
    </>
  );
}
