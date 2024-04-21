import { createKriteria } from "@/actions/kriteria";

export default function DashboardKriteriaTambahPage() {
  return (
    <>
      <h1 className="mb-8">Tambah Kriteria</h1>
      <form action={createKriteria}>
        <div className="flex flex-col gap-4 w-[40%]">
          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="nama-kriteria">Nama Kriteria</label>
            <input
              type="text"
              id="nama-kriteria"
              name="nama-kriteria"
              className="dark:text-black px-2 py-1"
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
              required
            />
          </div>
          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="tipe-alternatif">Tipe Kriteria</label>
            <select
              name="tipe-kriteria"
              id="tipe-kriteria"
              className="dark:text-black px-2 py-1"
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
