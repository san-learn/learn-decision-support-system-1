"use client";

import { useRouter } from "next/navigation";

import { HiOutlineRefresh } from "react-icons/hi";

export function ButtonRefresh() {
  const router = useRouter();

  function handleClickRefreshPage() {
    router.refresh();
  }

  return (
    <button
      className="flex items-center text-base font-medium py-1 px-2 rounded shadow-sm hover:bg-emerald-600 text-white"
      onClick={handleClickRefreshPage}
    >
      <HiOutlineRefresh className="w-6 h-6" />
    </button>
  );
}
