import { getAllSubKriteriaByIdAlternatif } from "@/actions/sub-kriteria";

export async function TabelDataNamaNilaiSubKriteria({
  id_alternatif,
}: {
  id_alternatif: number;
}) {
  const all_sub_kriteria = await getAllSubKriteriaByIdAlternatif(id_alternatif);

  return (
    <>
      {all_sub_kriteria?.map((sub_kriteria, index) => {
        return (
          <td
            key={index}
            className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-center"
          >
            {sub_kriteria.nilai_sub_kriteria} - {sub_kriteria.nama_sub_kriteria}
          </td>
        );
      })}
    </>
  );
}
