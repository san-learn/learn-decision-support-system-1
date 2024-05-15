import Link from "next/link";

import { getCountAllKriteria } from "@/actions/kriteria";

export async function KriteriaCard() {
  const kriteria_count = await getCountAllKriteria();

  return (
    <Link
      href="/dashboard/kriteria"
      className="p-4 w-full border border-gray-200 rounded bg-gray-800 hover:bg-gray-700 trasitia duration-200"
    >
      <h5 className="mb-2 text-base md:text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        Jumlah Kriteria
      </h5>
      <p className="mb-2 font-normal text-xs text-white">
        {kriteria_count} Kriteria
      </p>
    </Link>
  );
}
