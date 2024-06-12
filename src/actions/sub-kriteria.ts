"use server";

import prisma from "@/libs/database";
import { revalidateAllPath } from "@/libs/utils";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllSubKriteriaByIdKriteria(id_kriteria: string) {
  try {
    return await prisma.sub_Kriteria.findMany({
      where: { id_kriteria: parseInt(id_kriteria) },
      orderBy: { nilai_sub_kriteria: "desc" },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getAllSubKriteriaByIdAlternatif(id_alternatif: number) {
  try {
    const id_sub_kriteria = await prisma.nilai.findMany({
      where: { id_alternatif: id_alternatif },
      select: { id_sub_kriteria: true },
    });

    const id_sub_kriteria_values = id_sub_kriteria.map((object) => {
      return object.id_sub_kriteria;
    });

    return await prisma.sub_Kriteria.findMany({
      where: { id_sub_kriteria: { in: id_sub_kriteria_values } },
      orderBy: { id_kriteria: "asc" },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getSubKriteriaById(id_sub_kriteria: string) {
  try {
    return await prisma.sub_Kriteria.findUnique({
      where: { id_sub_kriteria: parseInt(id_sub_kriteria) },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCountAllSubKriteria() {
  try {
    return await prisma.sub_Kriteria.count();
  } catch (error) {
    console.log(error);
  }
}

export async function createSubKriteria(
  id_kriteria: string,
  formData: FormData
) {
  const nama_sub_kriteria = formData.get("nama-sub-kriteria") as string;
  const nilai_sub_kriteria = formData.get("nilai-sub-kriteria") as string;

  try {
    await prisma.sub_Kriteria.create({
      data: {
        id_kriteria: parseInt(id_kriteria),
        nama_sub_kriteria: nama_sub_kriteria,
        nilai_sub_kriteria: parseInt(nilai_sub_kriteria),
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath(`/dashboard/kriteria/sub-kriteria/${id_kriteria}`);
  revalidateAllPath();

  redirect(`/dashboard/kriteria/sub-kriteria/${id_kriteria}`);
}

export async function updateSubKriteria(
  id_sub_kriteria: string,
  id_kriteria: number,
  formData: FormData
) {
  const nama_sub_kriteria = formData.get("nama-sub-kriteria") as string;
  const nilai_sub_kriteria = formData.get("nilai-sub-kriteria") as string;

  try {
    await prisma.sub_Kriteria.update({
      where: {
        id_sub_kriteria: parseInt(id_sub_kriteria),
      },
      data: {
        nama_sub_kriteria: nama_sub_kriteria,
        nilai_sub_kriteria: parseInt(nilai_sub_kriteria),
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath(`/dashboard/kriteria/sub-kriteria/${id_kriteria}`);
  revalidateAllPath();

  redirect(`/dashboard/kriteria/sub-kriteria/${id_kriteria}`);
}

export async function deleteSubKriteriaById(
  id_sub_kriteria: number,
  id_kriteria: number
) {
  try {
    await prisma.sub_Kriteria.delete({
      where: {
        id_sub_kriteria: id_sub_kriteria,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath(`/dashboard/kriteria/sub-kriteria/${id_kriteria}`);
  revalidateAllPath();
}
