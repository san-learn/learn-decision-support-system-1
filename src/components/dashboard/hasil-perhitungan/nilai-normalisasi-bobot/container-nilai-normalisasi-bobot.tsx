import { getAllSubKriteriaByIdAlternatif } from "@/actions/sub-kriteria";

import { TableDataNilaiNormalisasiBobot } from "@/components/dashboard/hasil-perhitungan/nilai-normalisasi-bobot/table-data-nilai-normalisasi-bobot";

export async function ContainerNilaiNormalisasiBobot({
  id_alternatif,
}: {
  id_alternatif: number;
}) {
  const all_sub_kriteria = await getAllSubKriteriaByIdAlternatif(id_alternatif);

  return (
    <>
      {all_sub_kriteria?.map((subKriteria, index) => {
        return (
          <TableDataNilaiNormalisasiBobot
            key={index}
            nilai_sub_kriteria={subKriteria.nilai_sub_kriteria}
            id_kriteria={subKriteria.id_kriteria}
            id_alternatif={id_alternatif}
          />
        );
      })}
    </>
  );
}
