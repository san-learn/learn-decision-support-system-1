import { getKriteria, updateKriteria } from "@/actions/kriteria";

export default async function DashboardKriteriaEditPage({
  params,
}: {
  params: { slug: string };
}) {
  const kriteria_id = params.slug;

  const kriteria = await getKriteria(kriteria_id);
  const updateKriteriaWithId = updateKriteria.bind(null, kriteria_id);

  return (
    <>
      <h1 className="mb-8">Edit Alternatif</h1>
      <form action={updateKriteriaWithId}>
        <div className="flex flex-col gap-4 w-[40%]">
          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="nama-kriteria">Nama Kriteria</label>
            <input
              type="text"
              id="nama-kriteria"
              name="nama-kriteria"
              className="dark:text-black px-2 py-1"
              defaultValue={kriteria?.nama_kriteria}
              required
            />
          </div>
          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="bobot-kriteria">Bobot Kriteria</label>
            <input
              type="number"
              id="bobot-kriteria"
              name="bobot-kriteria"
              className="dark:text-black px-2 py-1"
              defaultValue={kriteria?.bobot_kriteria}
              required
            />
          </div>
          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="tipe-alternatif">Tipe Kriteria</label>
            <select
              name="tipe-kriteria"
              id="tipe-kriteria"
              className="dark:text-black px-2 py-1"
              defaultValue={kriteria?.tipe_kriteria}
            >
              <option value="Benefit">Benefit</option>
              <option value="Cost">Cost</option>
            </select>
          </div>
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
