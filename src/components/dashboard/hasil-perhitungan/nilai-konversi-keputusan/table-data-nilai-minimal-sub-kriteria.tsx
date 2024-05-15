import { getNilaiMinimalByIdKriteria } from "@/actions/nilai";

export async function TableDataNilaiMinimalSubKriteria({
  id_kriteria,
  is_last_item,
}: {
  id_kriteria: number;
  is_last_item: boolean;
}) {
  const nilai_minimal = await getNilaiMinimalByIdKriteria(id_kriteria);

  return (
    <td
      className={`border p-4 align-middle text-sm whitespace-nowrap text-center ${
        is_last_item && "border-r-0 border-l-0"
      }`}
    >
      {nilai_minimal?._min.nilai_sub_kriteria}
    </td>
  );
}
