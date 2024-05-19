"use client";

import { useFormState } from "react-dom";

import { authenticate } from "@/actions/admin";

import { ButtonAction } from "@/components/button-action";

import { FiAlertOctagon } from "react-icons/fi";

export function FormLogin() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm text-black font-medium"
        >
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Masukkan username"
          required
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm text-black font-medium"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Masukkan password"
          required
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-6 mb-4">
        <ButtonAction title="Login" />
      </div>
      {errorMessage && (
        <div className="flex items-center gap-2 justify-center ">
          <FiAlertOctagon className="text-red-500" />
          <p className="text-sm text-red-500 text-center">{errorMessage}</p>
        </div>
      )}
    </form>
  );
}
