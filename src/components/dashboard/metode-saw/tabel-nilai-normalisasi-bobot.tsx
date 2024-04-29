import { getAllAlternatif } from "@/actions/alternatif";
import { getAllKriteria, getKriteria } from "@/actions/kriteria";
import {
  getAllNilaiWithIdKriteria,
  getNilaiMaxWithIdKriteria,
  getNilaiMinWithIdKriteria,
  getSumNilaiSimpleAdditiveWeighting,
  updateNilaiSimpleAdditiveWeighting,
} from "@/actions/nilai";

import prisma from "@/libs/database";

export async function TabelNilaiNormalisasiBobot() {
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
          <th className="border-[1px] border-white p-2.5">Nilai SAW</th>
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
                <TabelDataNilaiNormalisasiBobot
                  idAlternatif={alternatif.id_alternatif}
                />
                <TabelDataNilaiSimpleAdditiveWeighting
                  id_alternatif={alternatif.id_alternatif}
                />
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

async function TabelDataNilaiNormalisasiBobot({
  idAlternatif,
}: {
  idAlternatif: number;
}) {
  const allNilai = await getAllNilaiWithIdKriteria(idAlternatif.toString());

  return (
    <>
      {allNilai.map((subKriteria, index) => {
        return (
          <ProsesDataNilaiNormalisasiBobot
            key={index}
            nilai_sub_kriteria={subKriteria.nilai_sub_kriteria}
            id_kriteria={subKriteria.id_kriteria}
            id_alternatif={idAlternatif}
          />
        );
      })}
    </>
  );
}

async function ProsesDataNilaiNormalisasiBobot({
  nilai_sub_kriteria,
  id_kriteria,
  id_alternatif,
}: {
  nilai_sub_kriteria: number;
  id_kriteria: number;
  id_alternatif: number;
}) {
  const kriteria = await getKriteria(id_kriteria.toString());
  const nilaiMax = await getNilaiMaxWithIdKriteria(id_kriteria);
  const nilaiMin = await getNilaiMinWithIdKriteria(id_kriteria);

  let nilaiNormalisasi =
    kriteria?.tipe_kriteria === "Benefit"
      ? nilai_sub_kriteria / nilaiMax._max.nilai_sub_kriteria!
      : nilaiMin._min.nilai_sub_kriteria! / nilai_sub_kriteria;
  const bobot_normalisasi = kriteria?.bobot_kriteria! / 100;
  const perkalian_bobot = (nilaiNormalisasi * bobot_normalisasi).toFixed(2);

  await updateNilaiSimpleAdditiveWeighting(
    id_kriteria,
    id_alternatif,
    parseFloat(perkalian_bobot)
  );

  return (
    <>
      <td className="border-[1px] border-white p-2">{perkalian_bobot}</td>
    </>
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

  return (
    <>
      <td className="border-[1px] border-white p-2">{sigma_nilai_saw}</td>
    </>
  );
}
