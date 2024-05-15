import Link from "next/link";

import { getAllAlternatif } from "@/actions/alternatif";

import { ButtonActionHapusAlternatif } from "@/components/dashboard/alternatif/button-action-hapus-alternatif";

import { MdEditDocument } from "react-icons/md";

export async function TableAlternatif() {
  const all_alternatif = await getAllAlternatif();

  return (
    <table className="items-center bg-transparent w-full border-collapse">
      <thead>
        <tr>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Nomor
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            Nama
          </th>
          <th className="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
            NIK
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
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        {all_alternatif?.map((alternatif, index) => {
          return (
            <tr key={index}>
              <td className="border border-l-0 px-4 align-middle text-xs md:text-sm whitespace-nowrap">
                {index + 1}
              </td>
              <td className="border px-4 align-middle text-xs md:text-sm whitespace-nowrap">
                {alternatif.nama}
              </td>
              <td className="border px-4 align-middle text-xs md:text-sm whitespace-nowrap">
                {alternatif.nik}
              </td>
              <td className="border px-4 align-middle text-xs md:text-sm whitespace-nowrap">
                {alternatif.nomor_kk}
              </td>
              <td className="border px-4 align-middle text-xs md:text-sm whitespace-nowrap">
                {alternatif.alamat}
              </td>
              <td className="border px-4 align-middle text-xs md:text-sm whitespace-nowrap">
                {alternatif.pekerjaan}
              </td>
              <td className="border border-r-0 px-4 text-sm whitespace-nowrap">
                <div className="flex gap-x-4 justify-center items-center">
                  <Link
                    href={`/dashboard/alternatif/edit/${alternatif.id_alternatif}`}
                    className="flex justify-center rounded px-2 py-1 group shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 my-2"
                  >
                    <MdEditDocument className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 group-hover:text-white" />
                  </Link>
                  <ButtonActionHapusAlternatif
                    id_alternatif={alternatif.id_alternatif}
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
