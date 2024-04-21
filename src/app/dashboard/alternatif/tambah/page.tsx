import { createAlternatif } from "@/actions/alternatif";

export default function DashboardAlternatifTambahPage() {
  return (
    <>
      <h1 className="mb-8">Tambah Alternatif</h1>
      <form action={createAlternatif}>
        <div className="flex gap-4 items-center">
          <label htmlFor="nama-alternatif">Nama Alternatif</label>
          <input
            type="text"
            id="nama-alternatif"
            name="nama-alternatif"
            className="dark:text-black px-2 py-1"
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
