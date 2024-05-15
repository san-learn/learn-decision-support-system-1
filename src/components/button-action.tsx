"use client";

import { useFormStatus } from "react-dom";

import { CgSpinner } from "react-icons/cg";

export function ButtonAction({ title }: { title: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`flex w-full justify-center rounded ${
        pending ? "cursor-not-allowed bg-emerald-600" : "bg-emerald-500"
      } px-4 py-2 text-sm md:text-base font-medium leading-6 text-white hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400`}
      type="submit"
      disabled={pending}
    >
      {pending ? <CgSpinner className="animate-spin h-6 w-6" /> : title}
    </button>
  );
}
