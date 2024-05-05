import Link from "next/link";

import { getAllKriteria } from "@/actions/kriteria";

import { ButtonActionHapusKriteria } from "./button-action-hapus-kriteria";

import { MdEditDocument } from "react-icons/md";
import { FaEye } from "react-icons/fa";

export async function TableKriteria() {
  const all_kriteria = await getAllKriteria();

  return (
    <table className="items-center bg-transparent w-full border-collapse ">
      <thead>
        <tr>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Nomor
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Nama Kriteria
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Bobot
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Tipe
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-center">
            Sub Kriteria
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-center">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        {all_kriteria?.map((kriteria, index) => {
          return (
            <tr key={index}>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {index + 1}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {kriteria.nama_kriteria}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {kriteria.bobot_kriteria}
              </td>
              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {kriteria.tipe_kriteria}
              </td>

              <td className="border-t-0 px-4 border-l-0 border-r-0 text-sm whitespace-nowrap ">
                <div className="flex justify-center items-center">
                  <Link
                    href={`/dashboard/kriteria/sub-kriteria/${kriteria.id_kriteria}`}
                    className="flex justify-center rounded px-2 py-1 group shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 my-2"
                  >
                    <FaEye className="w-5 h-5 text-yellow-400 group-hover:text-white" />
                  </Link>
                </div>
              </td>
              <td className="border-t-0 px-4 border-l-0 border-r-0 text-sm whitespace-nowrap">
                <div className="flex gap-x-4 justify-center items-center">
                  <Link
                    href={`/dashboard/kriteria/edit/${kriteria.id_kriteria}`}
                    className="flex justify-center rounded px-2 py-1 group shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 my-2"
                  >
                    <MdEditDocument className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                  </Link>
                  <ButtonActionHapusKriteria
                    id_kriteria={kriteria.id_kriteria}
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
