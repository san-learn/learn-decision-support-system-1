import {
  getAllAlternatifOrderByRangkingAsc,
  updateAlternatifNilaiSimpleAdditiveWeighting,
  updateAlternatifRangking,
} from "@/actions/alternatif";
import { getSumNilaiSimpleAdditiveWeighting } from "@/actions/nilai";

export async function TabelNilaiPerangkingan() {
  const allAlternatif = await getAllAlternatifOrderByRangkingAsc();

  return (
    <table className="table-auto w-full border-collapse border-[1px] border-white">
      <thead>
        <tr className="text-left ">
          <th className="border-[1px] border-white p-2.5">No</th>
          <th className="border-[1px] border-white p-2.5">Nama Alternatif</th>
          <th className="border-[1px] border-white p-2.5">Nilai SAW</th>
          <th className="border-[1px] border-white p-2.5">Rangking</th>
        </tr>
      </thead>
      <tbody>
        {allAlternatif.map((alternatif, index) => {
          return (
            <>
              <tr key={index}>
                <td className="border-[1px] border-white p-2">{index + 1}</td>
                <td className="border-[1px] border-white p-2">
                  {alternatif.nama_alternatif}
                </td>
                <TabelDataNilaiSimpleAdditiveWeighting
                  id_alternatif={alternatif.id_alternatif}
                />
                <td className="border-[1px] border-white p-2">
                  {alternatif?.rangking}
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

async function TabelDataNilaiSimpleAdditiveWeighting({
  id_alternatif,
}: {
  id_alternatif: number;
}) {
  const sigma_nilai_saw = await getSumNilaiSimpleAdditiveWeighting(
    id_alternatif
  );

  if (sigma_nilai_saw) {
    await updateAlternatifNilaiSimpleAdditiveWeighting(
      id_alternatif,
      sigma_nilai_saw
    );
  }

  await updateAlternatifRangking();

  return (
    <>
      <td className="border-[1px] border-white p-2">{sigma_nilai_saw}</td>
    </>
  );
}
