import Link from "next/link";

import { getKriteriaById } from "@/actions/kriteria";

import { TableSubKriteria } from "@/components/dashboard/kriteria/sub-kriteria/[slug]/table-sub-kriteria";

export default async function DashboardKriteriaSubKriteriaPage({
  params,
}: {
  params: { slug: string };
}) {
  const kriteria = await getKriteriaById(params.slug);

  return (
    <div className="flex p-4 flex-col gap-4">
      <div className="w-full xl:mb-0 mx-auto text-white">
        <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full rounded">
          <div className="rounded-t mb-0 py-3 border-0 bg-gray-800">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-medium text-sm md:text-base">
                  List Sub Kriteria &gt;{" "}
                  <Link href="/dashboard/kriteria">
                    {kriteria?.nama_kriteria}
                  </Link>
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <Link
                  href={`/dashboard/kriteria/sub-kriteria/tambah/${params.slug}`}
                  className="inline-block rounded bg-emerald-500 px-3 py-1.5 text-sm md:text-base font-medium leading-6 text-white hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  Tambah Sub Kriteria
                </Link>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <TableSubKriteria id_kriteria={params.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
