"use server";

import prisma from "@/libs/database";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllNilaiByIdAlternatif(id: string) {
  try {
    return await prisma.nilai.findMany({
      where: { id_alternatif: parseInt(id) },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getNilaiSimpleAdditiveWeightingByIdAlternatif(
  id_alternatif: number
) {
  try {
    const data = await prisma.nilai.aggregate({
      where: { id_alternatif: { in: [id_alternatif] } },
      _sum: { normalisasi_bobot: true },
    });

    return data._sum.normalisasi_bobot?.toFixed(2);
  } catch (error) {
    console.log(error);
  }
}

export async function getNilaiMaximalByIdKriteria(id_kriteria: number) {
  try {
    const id_sub_kriteria = await prisma.nilai.findMany({
      where: { id_kriteria: id_kriteria },
      select: { id_sub_kriteria: true },
    });

    const id_sub_kriteria_values = id_sub_kriteria.map((object) => {
      return object.id_sub_kriteria;
    });

    return await prisma.sub_Kriteria.aggregate({
      where: { id_sub_kriteria: { in: id_sub_kriteria_values } },
      _max: { nilai_sub_kriteria: true },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getNilaiMinimalByIdKriteria(id_kriteria: number) {
  try {
    const id_sub_kriteria = await prisma.nilai.findMany({
      where: { id_kriteria: id_kriteria },
      select: { id_sub_kriteria: true },
    });

    const id_sub_kriteria_values = id_sub_kriteria.map((object) => {
      return object.id_sub_kriteria;
    });

    return await prisma.sub_Kriteria.aggregate({
      where: { id_sub_kriteria: { in: id_sub_kriteria_values } },
      _min: { nilai_sub_kriteria: true },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createNilai(id_alternatif: string, formData: FormData) {
  const id_kriteria = await prisma.kriteria.findMany({
    select: { id_kriteria: true },
  });

  for (let i = 0; i < id_kriteria.length; i++) {
    await prisma.nilai.create({
      data: {
        id_alternatif: parseInt(id_alternatif),
        id_kriteria: id_kriteria[i].id_kriteria,
        id_sub_kriteria: parseInt(formData.get(i.toString()) as string),
      },
    });
  }

  revalidatePath("/dashboard/nilai");

  redirect("/dashboard/nilai");
}

export async function updateNormalisasiBobotByIdAlternatifIdKriteria(
  id_alternatif: number,
  id_kriteria: number,
  perkalian_bobot: string
) {
  try {
    await prisma.nilai.updateMany({
      where: { id_alternatif: id_alternatif, id_kriteria: id_kriteria },
      data: { normalisasi_bobot: parseFloat(perkalian_bobot) },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/hasil-perhitungan");
}

export async function updateNilai(id_alternatif: string, formData: FormData) {
  await prisma.nilai.deleteMany({
    where: { id_alternatif: parseInt(id_alternatif) },
  });

  const id_kriteria = await prisma.kriteria.findMany({
    select: { id_kriteria: true },
  });

  for (let index = 0; index < id_kriteria.length; index++) {
    await prisma.nilai.create({
      data: {
        id_alternatif: parseInt(id_alternatif),
        id_kriteria: id_kriteria[index].id_kriteria,
        id_sub_kriteria: parseInt(formData.get(index.toString()) as string),
      },
    });
  }

  revalidatePath("/dashboard/nilai");
  revalidatePath("/dashboard/hasil-perhitungan");

  redirect("/dashboard/nilai");
}

export async function deleteNilaiByIdAlternatif(id_alternatif: number) {
  try {
    await prisma.nilai.deleteMany({
      where: { id_alternatif: id_alternatif },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/nilai");
  revalidatePath("/dashboard/hasil-perhitungan");
}
