import Link from "next/link";

import { getCountAllSubKriteria } from "@/actions/sub-kriteria";

export async function SubKriteriaCard() {
  const sub_kriteria_count = await getCountAllSubKriteria();

  return (
    <Link
      href="/dashboard/sub-kriteria"
      className="p-4 w-full border border-gray-200 rounded bg-gray-800 hover:bg-gray-700 trasitia duration-200"
    >
      <h5 className="mb-2 text-base md:text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        Jumlah Sub Kriteria
      </h5>
      <p className="mb-2 font-normal text-xs text-white">
        {sub_kriteria_count} Sub Kriteria
      </p>
    </Link>
  );
}
