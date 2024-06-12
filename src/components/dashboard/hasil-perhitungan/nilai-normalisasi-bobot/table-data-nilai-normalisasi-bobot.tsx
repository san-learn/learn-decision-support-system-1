import { updateNilaiSimpleAdditiveWeightingByIdAlternatif } from "@/actions/alternatif";
import { getKriteriaById } from "@/actions/kriteria";
import {
  getNilaiMaximalByIdKriteria,
  getNilaiMinimalByIdKriteria,
  getSumNilaiSimpleAdditiveWeightingByIdAlternatif,
  updateNormalisasiBobotByIdAlternatifIdKriteria,
} from "@/actions/nilai";

export async function TableDataNilaiNormalisasiBobot({
  nilai_sub_kriteria,
  id_kriteria,
  id_alternatif,
  is_last_sub_kriteria,
}: {
  nilai_sub_kriteria: number;
  id_kriteria: number;
  id_alternatif: number;
  is_last_sub_kriteria: boolean;
}) {
  const kriteria = await getKriteriaById(id_kriteria.toString());
  const nilai_maximal = await getNilaiMaximalByIdKriteria(id_kriteria);
  const nilai_minimal = await getNilaiMinimalByIdKriteria(id_kriteria);

  if (is_last_sub_kriteria) {
    const nilai_simple_additive_weighting =
      await getSumNilaiSimpleAdditiveWeightingByIdAlternatif(id_alternatif);
    await updateNilaiSimpleAdditiveWeightingByIdAlternatif(
      id_alternatif,
      nilai_simple_additive_weighting!
    );
  }

  const nilai_normalisasi =
    kriteria?.tipe_kriteria === "Benefit"
      ? nilai_sub_kriteria / nilai_maximal?._max.nilai_sub_kriteria!
      : nilai_minimal?._min.nilai_sub_kriteria! / nilai_sub_kriteria;
  const bobot_normalisasi = kriteria?.bobot_kriteria! / 100;
  const perkalian_bobot = (nilai_normalisasi * bobot_normalisasi).toFixed(3);

  await updateNormalisasiBobotByIdAlternatifIdKriteria(
    id_alternatif,
    id_kriteria,
    perkalian_bobot
  );

  return (
    <td className="border p-4 align-middle text-sm whitespace-nowrap text-center">
      {perkalian_bobot}
    </td>
  );
}
