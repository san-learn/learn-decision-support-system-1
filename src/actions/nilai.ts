import prisma from "@/libs/database";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// catatan refactoring: ini bukan nilai saw tetapi nilai normalisasi bobot
export async function getSumNilaiSimpleAdditiveWeighting(
  id_alternatif: number
) {
  const data = await prisma.nilai.aggregate({
    where: { id_alternatif: { in: [id_alternatif] } },
    _sum: { nilai_simple_additive_weighting: true },
  });

  return data._sum.nilai_simple_additive_weighting?.toFixed(2);
}

// catatan refactoring: ini bukan nilai saw tetapi nilai normalisasi bobot
export async function updateNilaiSimpleAdditiveWeighting(
  id_kriteria: number,
  id_alternatif: number,
  perkalian_bobot: number
) {
  "use server";

  await prisma.nilai.updateMany({
    where: { id_alternatif: id_alternatif, id_kriteria: id_kriteria },
    data: { nilai_simple_additive_weighting: perkalian_bobot },
  });
}

export async function getNilaiMaxWithIdKriteria(id_kriteria: number) {
  "use server";

  const id_sub_kriteria = await prisma.nilai.findMany({
    where: { id_kriteria: id_kriteria },
    select: { id_sub_kriteria: true },
  });

  const id_sub_kriteria_values = id_sub_kriteria.map((object) => {
    return object.id_sub_kriteria;
  });

  const max = await prisma.sub_Kriteria.aggregate({
    where: { id_sub_kriteria: { in: id_sub_kriteria_values } },
    _max: { nilai_sub_kriteria: true },
  });

  return max;
}

export async function getNilaiMinWithIdKriteria(id_kriteria: number) {
  "use server";

  const id_sub_kriteria = await prisma.nilai.findMany({
    where: { id_kriteria: id_kriteria },
    select: { id_sub_kriteria: true },
  });

  const id_sub_kriteria_values = id_sub_kriteria.map((object) => {
    return object.id_sub_kriteria;
  });

  const min = await prisma.sub_Kriteria.aggregate({
    where: { id_sub_kriteria: { in: id_sub_kriteria_values } },
    _min: { nilai_sub_kriteria: true },
  });

  return min;
}

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
