import { getAllAlternatif } from "@/actions/alternatif";
import { getAllKriteria } from "@/actions/kriteria";
import { getAllNilaiWithIdAlternatif, updateNilai } from "@/actions/nilai";

import { OptionSubKriteria } from "@/components/option-sub-kriteria";

export default async function DashboardNilaiEditPage({
  params,
}: {
  params: { slug: string };
}) {
  const id_alternatif = params.slug;

  const allAlternatif = await getAllAlternatif();
  const allKriteria = await getAllKriteria();
  const allNilai = await getAllNilaiWithIdAlternatif(id_alternatif);

  const updateNilaiWithAlternatifId = updateNilai.bind(null, id_alternatif);

  return (
    <>
      <h1 className="mb-8">Edit Nilai</h1>
      <form action={updateNilaiWithAlternatifId}>
        <div className="flex flex-col gap-4 w-[40%]">
          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="id-alternatif">Nama Alternatif</label>
            <select
              name="id-alternatif"
              id="id-alternatif"
              className="dark:text-black px-2 py-1"
              defaultValue={id_alternatif}
            >
              {allAlternatif.map((alternatif, index) => {
                return (
                  <option key={index} value={alternatif.id_alternatif}>
                    {alternatif.nama_alternatif}
                  </option>
                );
              })}
            </select>
          </div>
          {allKriteria.map((kriteria, index) => {
            return (
              <div
                key={index}
                className="flex gap-4 items-center justify-between"
              >
                <label htmlFor={index.toString()}>
                  {kriteria.nama_kriteria}
                </label>
                <select
                  name={index.toString()}
                  id={index.toString()}
                  className="dark:text-black px-2 py-1"
                  defaultValue={allNilai[index].id_sub_kriteria.toString()}
                >
                  <OptionSubKriteria idKriteria={kriteria.id_kriteria} />
                </select>
              </div>
            );
          })}
        </div>
        <button
          type="submit"
          className="mt-4 dark:bg-white dark:text-black p-2 inline-block my-8"
        >
          Simpan Kriteria
        </button>
      </form>
    </>
  );
}
