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
            className="border-t-0 p-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-center"
          >
            {subKriteria.nilai_sub_kriteria}
          </td>
        );
      })}
    </>
  );
}
