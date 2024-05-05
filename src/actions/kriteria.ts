"use server";

import prisma from "@/libs/database";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllKriteria() {
  try {
    return await prisma.kriteria.findMany();
  } catch (error) {
    console.log(error);
  }
}

export async function getKriteriaById(id_kriteria: string) {
  try {
    return await prisma.kriteria.findUnique({
      where: { id_kriteria: parseInt(id_kriteria) },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createKriteria(formData: FormData) {
  const nama_kriteria = formData.get("nama-kriteria") as string;
  const bobot_kriteria = formData.get("bobot-kriteria") as string;
  const tipe_kriteria = formData.get("tipe-kriteria") as string;

  try {
    await prisma.kriteria.create({
      data: {
        nama_kriteria: nama_kriteria,
        bobot_kriteria: parseInt(bobot_kriteria),
        tipe_kriteria: tipe_kriteria,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/kriteria");
  revalidatePath("/dashboard/hasil-perhitungan");

  redirect("/dashboard/kriteria");
}

export async function updateKriteria(id_kriteria: string, formData: FormData) {
  const nama_kriteria = formData.get("nama-kriteria") as string;
  const bobot_kriteria = formData.get("bobot-kriteria") as string;
  const tipe_kriteria = formData.get("tipe-kriteria") as string;

  try {
    await prisma.kriteria.update({
      where: {
        id_kriteria: parseInt(id_kriteria),
      },
      data: {
        nama_kriteria: nama_kriteria,
        bobot_kriteria: parseInt(bobot_kriteria),
        tipe_kriteria: tipe_kriteria,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/kriteria");
  revalidatePath("/dashboard/sub-kriteria");
  revalidatePath("/dashboard/hasil-perhitungan");

  redirect("/dashboard/kriteria");
}

export async function deleteKriteriaById(id_kriteria: number) {
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
  revalidatePath("/dashboard/hasil-perhitungan");
}
