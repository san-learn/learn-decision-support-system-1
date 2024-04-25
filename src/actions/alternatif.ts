"use server";

import prisma from "@/libs/database";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllAlternatif() {
  "use server";

  return await prisma.alternatif.findMany();
}

export async function getAllAlternatifOrderByRangkingAsc() {
  "use server";

  return await prisma.alternatif.findMany({
    orderBy: { rangking: "asc" },
  });
}

export async function updateAlternatifNilaiSimpleAdditiveWeighting(
  id_alternatif: number,
  sigma_nilai_saw: string
) {
  await prisma.alternatif.update({
    where: { id_alternatif: id_alternatif },
    data: {
      nilai_saw: parseFloat(sigma_nilai_saw),
    },
  });
}

export async function updateAlternatifRangking() {
  const normalisasi_bobot = await prisma.alternatif.findMany({
    orderBy: { nilai_saw: "desc" },
  });

  normalisasi_bobot.forEach(async (alternatif, index) => {
    await prisma.alternatif.update({
      where: { id_alternatif: alternatif.id_alternatif },
      data: {
        rangking: index + 1,
      },
    });
  });

  revalidatePath("/dashboard/hasil-metode-saw");
}

export async function getAlternatif(id: string) {
  "use server";

  const id_alternatif = parseInt(id);

  return await prisma.alternatif.findUnique({
    where: { id_alternatif: id_alternatif },
  });
}

export async function createAlternatif(formData: FormData) {
  "use server";

  const namaAlternatif = formData.get("nama-alternatif") as string;

  await prisma.alternatif.create({
    data: {
      nama_alternatif: namaAlternatif,
    },
  });

  revalidatePath("/dashboard/alternatif");

  redirect("/dashboard/alternatif");
}

export async function updateAlternatif(id: string, formData: FormData) {
  "use server";

  const id_alternatif = parseInt(id);
  const namaAlternatif = formData.get("nama-alternatif") as string;

  await prisma.alternatif.update({
    where: {
      id_alternatif: id_alternatif,
    },
    data: {
      nama_alternatif: namaAlternatif,
    },
  });

  revalidatePath("/dashboard/alternatif");

  redirect("/dashboard/alternatif");
}

export async function deleteAlternatif(formData: FormData) {
  "use server";

  const id_alternatif = parseInt(formData.get("id-alternatif") as string);

  await prisma.alternatif.delete({
    where: { id_alternatif: id_alternatif },
  });

  await prisma.nilai.deleteMany({
    where: { id_alternatif: id_alternatif },
  });

  revalidatePath("/dashboard/alternatif");
  revalidatePath("/dashboard/metode-saw");
}
