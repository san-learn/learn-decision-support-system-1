import { getAllAlternatif } from "@/actions/alternatif";
import { getAllKriteria } from "@/actions/kriteria";
import {
  getAllNilaiWithIdKriteria,
  getNilaiMaxWithIdKriteria,
  getNilaiMinWithIdKriteria,
} from "@/actions/nilai";

export async function TabelNilaiKeputusan() {
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
                <TabelDataNamaSubKriteria
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

async function TabelDataNamaSubKriteria({
  idAlternatif,
}: {
  idAlternatif: number;
}) {
  const allNilai = await getAllNilaiWithIdKriteria(idAlternatif.toString());

  return (
    <>
      {allNilai.map((subKriteria, index) => {
        return (
          <td key={index} className="border-[1px] border-white p-2">
            {subKriteria.nilai_sub_kriteria} - {subKriteria.nama_sub_kriteria}
          </td>
        );
      })}
    </>
  );
}
