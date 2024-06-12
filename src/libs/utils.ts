import { revalidatePath } from "next/cache";

export function revalidateAllPath() {
  revalidatePath("/dashboard/kriteria");
  revalidatePath("/dashboard/kriteria/sub-kriteria");
  revalidatePath("/dashboard/alternatif");
  revalidatePath("/dashboard/nilai");
  revalidatePath("/dashboard/hasil-perhitungan");
  revalidatePath("/dashboard/home");
}
