"use server";

import prisma from "@/libs/database";
import { revalidateAllPath } from "@/libs/utils";

import { redirect } from "next/navigation";

export async function getAllAlternatif() {
  try {
    return await prisma.alternatif.findMany({});
  } catch (error) {
    console.log(error);
  }
}

export async function getAlternatifById(id_alternatif: string) {
  try {
    return await prisma.alternatif.findUnique({
      where: { id_alternatif: parseInt(id_alternatif) },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getAllAlternatifOrderByRangkingAsc() {
  return await prisma.alternatif.findMany({
    orderBy: { rangking: "asc" },
  });
}

export async function getCountAllAlternatif() {
  try {
    return await prisma.alternatif.count();
  } catch (error) {
    console.log(error);
  }
}

export async function createAlternatif(formData: FormData) {
  const nama = formData.get("nama") as string;
  const nomor_KK = formData.get("nomor-KK") as string;
  const alamat = formData.get("alamat") as string;
  const pekerjaan = formData.get("pekerjaan") as string;

  try {
    await prisma.alternatif.create({
      data: {
        nama: nama,
        nomor_kk: nomor_KK,
        alamat: alamat,
        pekerjaan: pekerjaan,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidateAllPath();

  redirect("/dashboard/alternatif");
}

export async function updateAlternatif(
  id_alternatif: string,
  formData: FormData
) {
  const nama = formData.get("nama") as string;
  const NIK = formData.get("NIK") as string;
  const nomor_KK = formData.get("nomor-KK") as string;
  const alamat = formData.get("alamat") as string;
  const pekerjaan = formData.get("pekerjaan") as string;

  try {
    await prisma.alternatif.update({
      where: { id_alternatif: parseInt(id_alternatif) },
      data: {
        nama: nama,
        nomor_kk: nomor_KK,
        alamat: alamat,
        pekerjaan: pekerjaan,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidateAllPath();

  redirect("/dashboard/alternatif");
}

export async function updateNilaiSimpleAdditiveWeightingByIdAlternatif(
  id_alternatif: number,
  nilai_simple_additive_weighting: string
) {
  try {
    await prisma.alternatif.update({
      where: { id_alternatif: id_alternatif },
      data: {
        nilai_simple_additive_weighting: parseFloat(
          nilai_simple_additive_weighting
        ),
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidateAllPath();
}

export async function updateRangking() {
  try {
    const nilai_simple_additive_weighting = await prisma.alternatif.findMany({
      orderBy: { nilai_simple_additive_weighting: "desc" },
    });

    nilai_simple_additive_weighting.forEach(async (alternatif, index) => {
      await prisma.alternatif.update({
        where: { id_alternatif: alternatif.id_alternatif },
        data: {
          rangking: index + 1,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }

  revalidateAllPath();
}

export async function deleteAlternatifById(id_alternatif: number) {
  try {
    await prisma.alternatif.delete({
      where: { id_alternatif: id_alternatif },
    });

    await prisma.nilai.deleteMany({
      where: { id_alternatif: id_alternatif },
    });
  } catch (error) {
    console.log(error);
  }

  revalidateAllPath();
}
