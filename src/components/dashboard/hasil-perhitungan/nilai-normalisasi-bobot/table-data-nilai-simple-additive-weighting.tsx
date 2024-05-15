import { getNilaiSimpleAdditiveWeightingByIdAlternatif } from "@/actions/nilai";

export async function TableDataNilaiSimpleAdditiveWeighting({
  id_alternatif,
}: {
  id_alternatif: number;
}) {
  const nilai_simple_additive_weighting =
    await getNilaiSimpleAdditiveWeightingByIdAlternatif(id_alternatif);

  return (
    <td className="border p-4 align-middle border-r-0 border-l-0 text-sm whitespace-nowrap text-center">
      {nilai_simple_additive_weighting}
    </td>
  );
}
