import { getSubKriteria, updateSubKriteria } from "@/actions/sub-kriteria";

export default async function DashboardKriteriaSubKriteriaEditPage({
  params,
}: {
  params: { slug: string };
}) {
  const sub_kriteria_id = params.slug;

  const subKriteria = await getSubKriteria(sub_kriteria_id);
  const updateSubKriteriaWithId = updateSubKriteria.bind(
    null,
    subKriteria?.id_kriteria!,
    sub_kriteria_id
  );

  return (
    <>
      <h1 className="mb-8">Edit Sub Kriteria</h1>
      <form action={updateSubKriteriaWithId}>
        <div className="flex flex-col gap-4 w-[40%]">
          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="nama-sub-kriteria">Nama Sub Kriteria</label>
            <input
              type="text"
              id="nama-sub-kriteria"
              name="nama-sub-kriteria"
              className="dark:text-black px-2 py-1"
              defaultValue={subKriteria?.nama_sub_kriteria}
              required
            />
          </div>
          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="nilai-sub-kriteria">Nilai Sub Kriteria</label>
            <input
              type="number"
              id="nilai-sub-kriteria"
              name="nilai-sub-kriteria"
              className="dark:text-black px-2 py-1"
              defaultValue={subKriteria?.nilai_sub_kriteria}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 dark:bg-white dark:text-black p-2 inline-block my-8"
        >
          Simpan Sub Kriteria
        </button>
      </form>
    </>
  );
}
