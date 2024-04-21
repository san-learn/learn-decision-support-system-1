import prisma from "@/libs/database";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllSubKriteria(id: string) {
  "use server";

  const id_kriteria = parseInt(id);

  return await prisma.sub_Kriteria.findMany({
    where: { id_kriteria: id_kriteria },
  });
}

export async function getSubKriteria(id: string) {
  "use server";

  const id_sub_kriteria = parseInt(id);

  return await prisma.sub_Kriteria.findUnique({
    where: { id_sub_kriteria: id_sub_kriteria },
  });
}

export async function updateSubKriteria(
  id_kriteria: number,
  id: string,
  formData: FormData
) {
  "use server";

  const id_sub_kriteria = parseInt(id);
  const namaSubKriteria = formData.get("nama-sub-kriteria") as string;
  const nilaiSubKriteria = formData.get("nilai-sub-kriteria") as string;

  await prisma.sub_Kriteria.update({
    where: {
      id_sub_kriteria: id_sub_kriteria,
    },
    data: {
      nama_sub_kriteria: namaSubKriteria,
      nilai_sub_kriteria: parseInt(nilaiSubKriteria),
    },
  });

  revalidatePath(`/dashboard/kriteria/sub-kriteria/${id_kriteria}`);

  redirect(`/dashboard/kriteria/sub-kriteria/${id_kriteria}`);
}

export async function createSubKriteria(id: string, formData: FormData) {
  "use server";

  const idKriteria = parseInt(id);
  const namaSubKriteria = formData.get("nama-sub-kriteria") as string;
  const nilaiSubKriteria = formData.get("nilai-sub-kriteria") as string;

  await prisma.sub_Kriteria.create({
    data: {
      id_kriteria: idKriteria,
      nama_sub_kriteria: namaSubKriteria,
      nilai_sub_kriteria: parseInt(nilaiSubKriteria),
    },
  });

  revalidatePath(`/dashboard/kriteria/sub-kriteria/${id}`);

  redirect(`/dashboard/kriteria/sub-kriteria/${id}`);
}

export async function deleteSubKriteria(formData: FormData) {
  "use server";

  const id_sub_kriteria = parseInt(formData.get("id-sub-kriteria") as string);

  await prisma.sub_Kriteria.delete({
    where: {
      id_sub_kriteria: id_sub_kriteria,
    },
  });

  revalidatePath(`/dashboard/kriteria/sub-kriteria/${id_sub_kriteria}`);
}
