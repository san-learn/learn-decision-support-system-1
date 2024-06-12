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
            className={`border px-4 align-middle text-sm whitespace-nowrap text-center ${
              index === all_sub_kriteria.length - 1 && "border-r-0 border-l-0"
            }`}
          >
            {sub_kriteria.nama_sub_kriteria}
          </td>
        );
      })}
    </>
  );
}
