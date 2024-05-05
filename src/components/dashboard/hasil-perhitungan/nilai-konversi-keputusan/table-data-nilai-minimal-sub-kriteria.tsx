import { getNilaiMinimalByIdKriteria } from "@/actions/nilai";

export async function TableDataNilaiMinimalSubKriteria({
  id_kriteria,
}: {
  id_kriteria: number;
}) {
  const nilai_minimal = await getNilaiMinimalByIdKriteria(id_kriteria);

  return (
    <td className="border-t-0 p-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-center">
      {nilai_minimal?._min.nilai_sub_kriteria}
    </td>
  );
}
