import { createAlternatif } from "@/actions/alternatif";

import { ButtonAction } from "@/components/button-action";

export function FormTambahAlternatif() {
  return (
    <form action={createAlternatif}>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-white font-medium md:text-left mb-3 md:mb-0 pr-4 text-sm md:text-base"
            htmlFor="nama"
          >
            Nama
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 text-xs md:text-sm sm:leading-6"
            type="text"
            id="nama"
            name="nama"
            placeholder="Masukkan nama"
            required
          />
        </div>
      </div>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-white font-medium md:text-left mb-3 md:mb-0 pr-4 text-sm md:text-base"
            htmlFor="nomor-KK"
          >
            Nomor KK
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 text-xs md:text-sm sm:leading-6"
            type="text"
            id="nomor-KK"
            name="nomor-KK"
            placeholder="Masukkan nomor KK"
            required
          />
        </div>
      </div>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-white font-medium md:text-left mb-3 md:mb-0 pr-4 text-sm md:text-base"
            htmlFor="alamat"
          >
            Alamat
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 text-xs md:text-sm sm:leading-6"
            type="text"
            id="alamat"
            name="alamat"
            placeholder="Masukkan alamat"
            required
          />
        </div>
      </div>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-white font-medium md:text-left mb-3 md:mb-0 pr-4 text-sm md:text-base"
            htmlFor="pekerjaan"
          >
            Pekerjaan
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 text-xs md:text-sm sm:leading-6"
            type="text"
            id="pekerjaan"
            name="pekerjaan"
            placeholder="Masukkan pekerjaan"
            required
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <ButtonAction title="Simpan Alternatif" />
        </div>
      </div>
    </form>
  );
}
