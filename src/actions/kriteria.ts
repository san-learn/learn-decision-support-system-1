import prisma from "@/libs/database";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllKriteria() {
  "use server";

  return await prisma.kriteria.findMany();
}

export async function getKriteria(id: string) {
  "use server";

  const id_kriteria = parseInt(id);

  return await prisma.kriteria.findUnique({
    where: { id_kriteria: id_kriteria },
  });
}

export async function createKriteria(formData: FormData) {
  "use server";

  const namaKriteria = formData.get("nama-kriteria") as string;
  const bobotKriteria = formData.get("bobot-kriteria") as string;
  const tipeKriteria = formData.get("tipe-kriteria") as string;

  await prisma.kriteria.create({
    data: {
      nama_kriteria: namaKriteria,
      bobot_kriteria: parseInt(bobotKriteria),
      tipe_kriteria: tipeKriteria,
    },
  });

  revalidatePath("/dashboard/kriteria");

  redirect("/dashboard/kriteria");
}

export async function updateKriteria(id: string, formData: FormData) {
  "use server";

  const id_kriteria = parseInt(id);
  const namaKriteria = formData.get("nama-kriteria") as string;
  const bobotKriteria = formData.get("bobot-kriteria") as string;
  const tipeKriteria = formData.get("tipe-kriteria") as string;

  await prisma.kriteria.update({
    where: {
      id_kriteria: id_kriteria,
    },
    data: {
      nama_kriteria: namaKriteria,
      bobot_kriteria: parseInt(bobotKriteria),
      tipe_kriteria: tipeKriteria,
    },
  });

  revalidatePath("/dashboard/kriteria");

  redirect("/dashboard/kriteria");
}

export async function deleteKriteria(formData: FormData) {
  "use server";

  const id_kriteria = parseInt(formData.get("id-kriteria") as string);

  await prisma.kriteria.delete({
    where: { id_kriteria: id_kriteria },
  });

  await prisma.sub_Kriteria.deleteMany({
    where: { id_kriteria: id_kriteria },
  });

  await prisma.nilai.deleteMany({
    where: { id_kriteria: id_kriteria },
  });

  revalidatePath("/dashboard/kriteria");
  revalidatePath("/dashboard/sub-kriteria");
  revalidatePath("/dashboard/hasil-metode-saw");
}
