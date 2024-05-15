import { createSubKriteria } from "@/actions/sub-kriteria";

import { ButtonAction } from "@/components/button-action";

export async function FormTambahSubKriteria({
  id_kriteria,
}: {
  id_kriteria: string;
}) {
  const createSubKriteriaByIdKriteria = createSubKriteria.bind(
    null,
    id_kriteria
  );

  return (
    <form action={createSubKriteriaByIdKriteria}>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-white font-medium md:text-left mb-3 md:mb-0 pr-4 text-sm md:text-base"
            htmlFor="nama-sub-kriteria"
          >
            Nama Sub Kriteria
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 text-xs md:text-sm sm:leading-6"
            type="text"
            id="nama-sub-kriteria"
            name="nama-sub-kriteria"
            placeholder="Masukkan nama sub kriteria"
            required
          />
        </div>
      </div>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-white font-medium md:text-left mb-3 md:mb-0 pr-4 text-sm md:text-base"
            htmlFor="nilai-sub-kriteria"
          >
            Nilai Sub Kriteria
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 text-xs md:text-sm sm:leading-6"
            type="number"
            min={1}
            max={100}
            defaultValue={1}
            id="nilai-sub-kriteria"
            name="nilai-sub-kriteria"
            required
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <ButtonAction title="Simpan Sub Kriteria" />
        </div>
      </div>
    </form>
  );
}
