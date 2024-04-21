import { createSubKriteria } from "@/actions/sub-kriteria";

export default function DashboardKriteriaSubKriteriaTambahPage({
  params,
}: {
  params: { slug: string };
}) {
  const createSubKriteriaWithId = createSubKriteria.bind(null, params.slug);

  return (
    <>
      <h1 className="mb-8">Tambah Sub Kriteria</h1>
      <form action={createSubKriteriaWithId}>
        <div className="flex flex-col gap-4 w-[40%]">
          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="nama-sub-kriteria">Nama Sub Kriteria</label>
            <input
              type="text"
              id="nama-sub-kriteria"
              name="nama-sub-kriteria"
              className="dark:text-black px-2 py-1"
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
