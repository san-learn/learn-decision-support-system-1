import prisma from "@/libs/database";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllAlternatif() {
  "use server";

  return await prisma.alternatif.findMany();
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
    where: {
      id_alternatif: id_alternatif,
    },
  });

  revalidatePath("/dashboard/alternatif");
}
