"use client";

import { deleteNilaiByIdAlternatif } from "@/actions/nilai";
import { useFormStatus } from "react-dom";

import { MdDeleteForever } from "react-icons/md";

export function ButtonActionHapusNilai({
  id_alternatif,
}: {
  id_alternatif: number;
}) {
  const { pending } = useFormStatus();

  function handleClick() {
    const confirm_delete = confirm("Apakah Anda yakin ingin menghapus?");

    if (confirm_delete) {
      deleteNilaiByIdAlternatif(id_alternatif);
    }
  }

  return (
    <button
      className={`flex justify-center rounded ${
        pending && "cursor-not-allowed"
      } px-2 py-1 group shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 my-2`}
      type="button"
      disabled={pending}
      onClick={handleClick}
    >
      <MdDeleteForever className="w-5 h-5 text-red-400 group-hover:text-white" />
    </button>
  );
}
