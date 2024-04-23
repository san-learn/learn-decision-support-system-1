import { getAllNilaiWithIdKriteria } from "@/actions/nilai";
import Link from "next/link";
import { NilaiDeleteButtonForm } from "./delete-button-form";

export async function TableDataNilai({
  idAlternatif,
}: {
  idAlternatif: number;
}) {
  const allNilai = await getAllNilaiWithIdKriteria(idAlternatif.toString());

  return (
    <>
      {allNilai.map((subKriteria, index) => {
        return (
          <td key={index} className="border-[1px] border-white p-2">
            {`${subKriteria.nama_sub_kriteria} - (${subKriteria.nilai_sub_kriteria})`}
          </td>
        );
      })}
      {allNilai.length > 0 && (
        <td className="border-[1px] border-white p-2 ">
          <div className="flex justify-around items-center">
            <Link href={`/dashboard/nilai/edit/${idAlternatif}`}>Edit</Link>
            <NilaiDeleteButtonForm id={idAlternatif} />
          </div>
        </td>
      )}
    </>
  );
}
