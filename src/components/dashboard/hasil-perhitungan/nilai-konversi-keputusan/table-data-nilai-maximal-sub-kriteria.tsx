import { getNilaiMaximalByIdKriteria } from "@/actions/nilai";

export async function TableDataNilaiMaximalSubKriteria({
  id_kriteria,
}: {
  id_kriteria: number;
}) {
  const nilai_maximal = await getNilaiMaximalByIdKriteria(id_kriteria);

  return (
    <td className="border-t-0 p-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-center">
      {nilai_maximal?._max.nilai_sub_kriteria}
    </td>
  );
}
