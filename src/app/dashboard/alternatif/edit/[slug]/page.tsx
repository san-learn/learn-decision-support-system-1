import { getAlternatif, updateAlternatif } from "@/actions/alternatif";

export default async function DashboardAlternatifEditPage({
  params,
}: {
  params: { slug: string };
}) {
  const alternatif_id = params.slug;

  const alternatif = await getAlternatif(alternatif_id);
  const updateAlternatifWithId = updateAlternatif.bind(null, alternatif_id);

  return (
    <>
      <h1 className="mb-8">Edit Alternatif</h1>
      <form action={updateAlternatifWithId}>
        <div className="flex gap-4 items-center">
          <label htmlFor="nama-alternatif">Nama Alternatif</label>
          <input
            type="text"
            id="nama-alternatif"
            name="nama-alternatif"
            className="dark:text-black px-2 py-1"
            defaultValue={alternatif?.nama_alternatif}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 dark:bg-white dark:text-black p-2 inline-block my-8"
        >
          Simpan Alternatif
        </button>
      </form>
    </>
  );
}
