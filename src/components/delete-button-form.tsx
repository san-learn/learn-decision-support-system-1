import { deleteAlternatif } from "@/actions/alternatif";

export function DeleteButtonForm({ id }: { id: number }) {
  return (
    <form action={deleteAlternatif}>
      <input type="hidden" name="id-alternatif" value={id} />
      <button type="submit">Hapus</button>
    </form>
  );
}
