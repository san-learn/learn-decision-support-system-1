import prisma from "@/libs/database";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNilai(formData: FormData) {
  "use server";

  const id_alternatif = parseInt(formData.get("id-alternatif") as string);

  const id_kriteria = await prisma.kriteria.findMany({
    select: { id_kriteria: true },
  });

  for (let i = 0; i < id_kriteria.length; i++) {
    await prisma.nilai.create({
      data: {
        id_alternatif: id_alternatif,
        id_kriteria: id_kriteria[i].id_kriteria,
        id_sub_kriteria: parseInt(formData.get(i.toString()) as string),
      },
    });
  }

  revalidatePath("/dashboard/nilai");

  redirect("/dashboard/nilai");
}

export async function getAllNilaiWithIdKriteria(id: string) {
  "use server";

  const id_alternatif = parseInt(id);

  const id_sub_kriteria = await prisma.nilai.findMany({
    where: { id_alternatif: id_alternatif },
    select: { id_sub_kriteria: true },
  });

  const id_sub_kriteria_values = id_sub_kriteria.map((object) => {
    return object.id_sub_kriteria;
  });

  return await prisma.sub_Kriteria.findMany({
    where: { id_sub_kriteria: { in: id_sub_kriteria_values } },
    select: { nama_sub_kriteria: true, nilai_sub_kriteria: true },
  });
}

export async function getAllNilaiWithIdAlternatif(id: string) {
  "use server";

  const id_alternatif = parseInt(id);

  return await prisma.nilai.findMany({
    where: { id_alternatif: id_alternatif },
  });
}

export async function updateNilai(id: string, formData: FormData) {
  "use server";

  const id_alternatif = parseInt(id);

  await prisma.nilai.deleteMany({
    where: { id_alternatif: id_alternatif },
  });

  const id_kriteria = await prisma.kriteria.findMany({
    select: { id_kriteria: true },
  });

  for (let i = 0; i < id_kriteria.length; i++) {
    await prisma.nilai.create({
      data: {
        id_alternatif: id_alternatif,
        id_kriteria: id_kriteria[i].id_kriteria,
        id_sub_kriteria: parseInt(formData.get(i.toString()) as string),
      },
    });
  }

  revalidatePath("/dashboard/nilai");

  redirect("/dashboard/nilai");
}

export async function deleteNilai(formData: FormData) {
  "use server";

  const id_alternatif = parseInt(formData.get("id-alternatif") as string);

  await prisma.nilai.deleteMany({
    where: { id_alternatif: id_alternatif },
  });

  revalidatePath("/dashboard/nilai");
}
