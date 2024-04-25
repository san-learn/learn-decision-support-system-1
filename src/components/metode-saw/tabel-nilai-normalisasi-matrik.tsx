import { getAllAlternatif } from "@/actions/alternatif";
import { getAllKriteria, getKriteria } from "@/actions/kriteria";
import {
  getAllNilaiWithIdKriteria,
  getNilaiMaxWithIdKriteria,
  getNilaiMinWithIdKriteria,
} from "@/actions/nilai";

export async function TabelNilaiNormalisasiMatrik() {
  const allKriteria = await getAllKriteria();
  const allAlternatif = await getAllAlternatif();

  return (
    <table className="table-auto w-full border-collapse border-[1px] border-white">
      <thead>
        <tr className="text-left ">
          <th className="border-[1px] border-white p-2.5">No</th>
          <th className="border-[1px] border-white p-2.5">Nama Alternatif</th>
          {allKriteria.map((kriteria, index) => {
            return (
              <th key={index} className="border-[1px] border-white p-2.5">
                {kriteria.nama_kriteria}
              </th>
            );
          })}
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
                <TabelDataNilaiNormalisasiMatrik
                  idAlternatif={alternatif.id_alternatif}
                />
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

async function TabelDataNilaiNormalisasiMatrik({
  idAlternatif,
}: {
  idAlternatif: number;
}) {
  const allNilai = await getAllNilaiWithIdKriteria(idAlternatif.toString());

  return (
    <>
      {allNilai.map((subKriteria, index) => {
        return (
          <ProsesDataNilaiNormalisasiMatrik
            key={index}
            nilai_sub_kriteria={subKriteria.nilai_sub_kriteria}
            id_kriteria={subKriteria.id_kriteria}
          />
        );
      })}
    </>
  );
}

async function ProsesDataNilaiNormalisasiMatrik({
  nilai_sub_kriteria,
  id_kriteria,
}: {
  nilai_sub_kriteria: number;
  id_kriteria: number;
}) {
  const kriteria = await getKriteria(id_kriteria.toString());

  const nilaiMax = await getNilaiMaxWithIdKriteria(id_kriteria);
  const nilaiMin = await getNilaiMinWithIdKriteria(id_kriteria);

  let nilaiNormalisasi =
    kriteria?.tipe_kriteria === "Benefit"
      ? nilai_sub_kriteria / nilaiMax._max.nilai_sub_kriteria!
      : nilaiMin._min.nilai_sub_kriteria! / nilai_sub_kriteria;

  return (
    <td className="border-[1px] border-white p-2">
      {nilaiNormalisasi.toFixed(2)}
    </td>
  );
}
