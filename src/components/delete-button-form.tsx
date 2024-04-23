import { deleteAlternatif } from "@/actions/alternatif";
import { deleteKriteria } from "@/actions/kriteria";
import { deleteSubKriteria } from "@/actions/sub-kriteria";
import { deleteNilai } from "@/actions/nilai";

export function AlternatifDeleteButtonForm({ id }: { id: number }) {
  return (
    <form action={deleteAlternatif}>
      <input type="hidden" name="id-alternatif" value={id} />
      <button type="submit">Hapus</button>
    </form>
  );
}

export function KriteriaDeleteButtonForm({ id }: { id: number }) {
  return (
    <form action={deleteKriteria}>
      <input type="hidden" name="id-kriteria" value={id} />
      <button type="submit">Hapus</button>
    </form>
  );
}

export function SubKriteriaDeleteButtonForm({ id }: { id: number }) {
  return (
    <form action={deleteSubKriteria}>
      <input type="hidden" name="id-sub-kriteria" value={id} />
      <button type="submit">Hapus</button>
    </form>
  );
}

export function NilaiDeleteButtonForm({ id }: { id: number }) {
  return (
    <form action={deleteNilai}>
      <input type="hidden" name="id-alternatif" value={id} />
      <button type="submit">Hapus</button>
    </form>
  );
}
