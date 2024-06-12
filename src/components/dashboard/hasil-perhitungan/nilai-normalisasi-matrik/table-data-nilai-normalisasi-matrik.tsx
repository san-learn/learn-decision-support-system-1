import { getKriteriaById } from "@/actions/kriteria";
import {
  getNilaiMaximalByIdKriteria,
  getNilaiMinimalByIdKriteria,
} from "@/actions/nilai";

export async function TableDataNilaiNormalisasiMatrik({
  nilai_sub_kriteria,
  id_kriteria,
}: {
  nilai_sub_kriteria: number;
  id_kriteria: number;
}) {
  const kriteria = await getKriteriaById(id_kriteria.toString());
  const nilai_maximal = await getNilaiMaximalByIdKriteria(id_kriteria);
  const nilai_minimal = await getNilaiMinimalByIdKriteria(id_kriteria);

  let nilaiNormalisasi =
    kriteria?.tipe_kriteria === "Benefit"
      ? nilai_sub_kriteria / nilai_maximal?._max.nilai_sub_kriteria!
      : nilai_minimal?._min.nilai_sub_kriteria! / nilai_sub_kriteria;

  return (
    <td className="border p-4 align-middle text-sm whitespace-nowrap text-center">
      {nilaiNormalisasi.toFixed(3)}
    </td>
  );
}
