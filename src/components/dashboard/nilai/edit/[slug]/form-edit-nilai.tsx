import { getAlternatifById } from "@/actions/alternatif";
import { getAllKriteria } from "@/actions/kriteria";
import { getAllNilaiByIdAlternatif, updateNilai } from "@/actions/nilai";
import { OptionSubKriteria } from "../../tambah/[slug]/option-sub-kriteria";
import { ButtonAction } from "@/components/button-action";

export async function FormEditNilai({
  id_alternatif,
}: {
  id_alternatif: string;
}) {
  const alternatif = await getAlternatifById(id_alternatif);
  const all_kriteria = await getAllKriteria();
  const all_nilai = await getAllNilaiByIdAlternatif(id_alternatif);

  const updateNilaiByIdAlternatif = updateNilai.bind(null, id_alternatif);

  return (
    <form action={updateNilaiByIdAlternatif}>
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-white font-medium md:text-left mb-3 md:mb-0 pr-4"
            htmlFor="nama"
          >
            Nama
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="block w-full rounded border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 sm:text-sm sm:leading-6"
            type="text"
            id="nama"
            name="nama"
            defaultValue={alternatif?.nama}
            disabled
          />
        </div>
      </div>
      {all_kriteria?.map((kriteria, index) => {
        return (
          <>
            <div key={index} className="md:flex mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-white font-medium md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor={index.toString()}
                >
                  {kriteria.nama_kriteria}
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  className="block w-full rounded border-0 h-9 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 sm:text-sm sm:leading-6"
                  id={index.toString()}
                  name={index.toString()}
                  defaultValue={all_nilai![index]?.id_sub_kriteria.toString()}
                >
                  <OptionSubKriteria id_kriteria={kriteria.id_kriteria} />
                </select>
              </div>
            </div>
          </>
        );
      })}
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <ButtonAction title="Edit Nilai" />
        </div>
      </div>
    </form>
  );
}
