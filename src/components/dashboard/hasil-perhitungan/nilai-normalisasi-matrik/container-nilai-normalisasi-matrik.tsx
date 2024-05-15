import { getAllSubKriteriaByIdAlternatif } from "@/actions/sub-kriteria";

import { TableDataNilaiNormalisasiMatrik } from "@/components/dashboard/hasil-perhitungan/nilai-normalisasi-matrik/table-data-nilai-normalisasi-matrik";

export async function ContainerNilaiNormalisasiMatrik({
  id_alternatif,
}: {
  id_alternatif: number;
}) {
  const all_sub_kriteria = await getAllSubKriteriaByIdAlternatif(id_alternatif);

  return (
    <>
      {all_sub_kriteria?.map((subKriteria, index) => {
        return (
          <TableDataNilaiNormalisasiMatrik
            key={index}
            nilai_sub_kriteria={subKriteria.nilai_sub_kriteria}
            id_kriteria={subKriteria.id_kriteria}
          />
        );
      })}
    </>
  );
}
