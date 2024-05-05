import {
  updateNilaiSimpleAdditiveWeightingByIdAlternatif,
  updateRangking,
} from "@/actions/alternatif";
import { getNilaiSimpleAdditiveWeightingByIdAlternatif } from "@/actions/nilai";

export async function TableDataNilaiSimpleAdditiveWeighting({
  id_alternatif,
}: {
  id_alternatif: number;
}) {
  const nilai_simple_additive_weighting =
    await getNilaiSimpleAdditiveWeightingByIdAlternatif(id_alternatif);
  await updateNilaiSimpleAdditiveWeightingByIdAlternatif(
    id_alternatif,
    nilai_simple_additive_weighting!
  );
  await updateRangking();

  return (
    <>
      <td className="border-t-0 p-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-center">
        {nilai_simple_additive_weighting}
      </td>
    </>
  );
}