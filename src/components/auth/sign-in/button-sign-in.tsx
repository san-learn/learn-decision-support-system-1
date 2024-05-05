import { useFormStatus } from "react-dom";

export function ButtonSignIn() {
  const { pending } = useFormStatus();

  return (
    <button
      className="flex w-full justify-center rounded bg-emerald-500 px-4 py-2 text-sm font-semibold leading-6 text-white hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      aria-disabled={pending}
    >
      Sign In
    </button>
  );
}
