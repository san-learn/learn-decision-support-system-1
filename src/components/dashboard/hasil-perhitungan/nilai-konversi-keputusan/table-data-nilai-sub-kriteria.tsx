import { getAllSubKriteriaByIdAlternatif } from "@/actions/sub-kriteria";

export async function TableDataNilaiSubKriteria({
  id_alternatif,
}: {
  id_alternatif: number;
}) {
  const all_sub_kriteria = await getAllSubKriteriaByIdAlternatif(id_alternatif);

  return (
    <>
      {all_sub_kriteria?.map((subKriteria, index) => {
        return (
          <td
            key={index}
            className={`border px-4 align-middle text-sm whitespace-nowrap text-center ${
              index === all_sub_kriteria.length - 1 && "border-r-0 border-l-0"
            }`}
          >
            {subKriteria.nilai_sub_kriteria}
          </td>
        );
      })}
    </>
  );
}
