import { getAllSubKriteriaByIdKriteria } from "@/actions/sub-kriteria";
import Link from "next/link";
import { MdEditDocument } from "react-icons/md";
import { ButtonActionHapusSubKriteria } from "./button-action-hapus-sub-kriteria";

export async function TableSubKriteria({
  id_kriteria,
}: {
  id_kriteria: string;
}) {
  const all_sub_kriteria = await getAllSubKriteriaByIdKriteria(id_kriteria);

  return (
    <table className="items-center bg-transparent w-full border-collapse ">
      <thead>
        <tr>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Nomor
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Nama Sub Kriteria
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Nilai
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-center">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        {all_sub_kriteria?.map((sub_kriteria, index) => {
          return (
            <tr key={index}>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {index + 1}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {sub_kriteria.nama_sub_kriteria}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {sub_kriteria.nilai_sub_kriteria}
              </td>
              <td className="border-t-0 px-4 border-l-0 border-r-0 text-sm whitespace-nowrap">
                <div className="flex gap-x-4 justify-center items-center">
                  <Link
                    href={`/dashboard/kriteria/sub-kriteria/edit/${sub_kriteria.id_sub_kriteria}`}
                    className="flex justify-center rounded px-2 py-1 group shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 my-2"
                  >
                    <MdEditDocument className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                  </Link>
                  <ButtonActionHapusSubKriteria
                    id_sub_kriteria={sub_kriteria.id_sub_kriteria}
                    id_kriteria={sub_kriteria.id_kriteria}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
