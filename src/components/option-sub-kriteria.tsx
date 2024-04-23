import { getAllSubKriteriaWithId } from "@/actions/sub-kriteria";

export async function OptionSubKriteria({
  idKriteria,
}: {
  idKriteria: number;
}) {
  const allSubKriteria = await getAllSubKriteriaWithId(idKriteria.toString());

  return (
    <>
      {allSubKriteria.map((subKriteria, index) => {
        return (
          <option key={index} value={subKriteria.id_sub_kriteria}>
            {`${subKriteria.nama_sub_kriteria} - (${subKriteria.nilai_sub_kriteria})`}
          </option>
        );
      })}
    </>
  );
}
