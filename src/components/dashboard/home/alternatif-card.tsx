import Link from "next/link";

import { getCountAllAlternatif } from "@/actions/alternatif";

export async function AlternatifCard() {
  const alternatif_count = await getCountAllAlternatif();

  return (
    <Link
      href="/dashboard/alternatif"
      className="p-4 w-full border border-gray-200 rounded bg-gray-800 hover:bg-gray-700 trasitia duration-200"
    >
      <h5 className="mb-2 text-base md:text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        Jumlah Alternatif
      </h5>
      <p className="mb-2 font-normal text-xs text-white">
        {alternatif_count} Alternatif
      </p>
    </Link>
  );
}
