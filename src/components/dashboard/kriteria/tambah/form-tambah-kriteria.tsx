import { createKriteria } from "@/actions/kriteria";

import { ButtonAction } from "@/components/button-action";

export function FormTambahKriteria() {
  return (
    <form action={createKriteria}>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-white font-medium md:text-left mb-3 md:mb-0 pr-4 text-sm md:text-base"
            htmlFor="nama-kriteria"
          >
            Nama Kriteria
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 text-xs md:text-sm sm:leading-6"
            type="text"
            id="nama-kriteria"
            name="nama-kriteria"
            placeholder="Masukkan nama kriteria"
            required
          />
        </div>
      </div>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-white font-medium md:text-left mb-3 md:mb-0 pr-4 text-sm md:text-base"
            htmlFor="bobot-kriteria"
          >
            Bobot Kriteria
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 text-xs md:text-sm sm:leading-6"
            type="number"
            min={1}
            max={100}
            defaultValue={1}
            id="bobot-kriteria"
            name="bobot-kriteria"
            required
          />
        </div>
      </div>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-white font-medium md:text-left mb-3 md:mb-0 pr-4 text-sm md:text-base"
            htmlFor="tipe-kriteria"
          >
            Tipe Kriteria
          </label>
        </div>
        <div className="md:w-2/3">
          <select
            name="tipe-kriteria"
            id="tipe-kriteria"
            className="block w-full rounded border-0 h-9 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 text-sm md:text-base sm:leading-6"
          >
            <option value="Benefit">Benefit</option>
            <option value="Cost">Cost</option>
          </select>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <ButtonAction title="Simpan Kriteria" />
        </div>
      </div>
    </form>
  );
}
