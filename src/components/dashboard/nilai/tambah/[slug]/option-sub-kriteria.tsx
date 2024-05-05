import { getAllSubKriteriaByIdKriteria } from "@/actions/sub-kriteria";

export async function OptionSubKriteria({
  id_kriteria,
}: {
  id_kriteria: number;
}) {
  const all_sub_kriteria = await getAllSubKriteriaByIdKriteria(
    id_kriteria.toString()
  );

  return (
    <>
      {all_sub_kriteria?.map((sub_kriteria, index) => {
        return (
          <option key={index} value={sub_kriteria.id_sub_kriteria}>
            {`${sub_kriteria.nama_sub_kriteria} - (${sub_kriteria.nilai_sub_kriteria})`}
          </option>
        );
      })}
    </>
  );
}
