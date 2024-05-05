"use client";

import { useFormState } from "react-dom";

import { authenticate } from "@/actions/user";
import { FiAlertOctagon } from "react-icons/fi";
import { ButtonSignIn } from "./button-sign-in";

export function FormSignIn() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form className="space-y-6" action={dispatch}>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-white"
        >
          Username
        </label>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Masukkan username"
            required
            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 


focus:ring-emerald-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-white"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Masukkan password"
            required
            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 


focus:ring-emerald-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <ButtonSignIn />
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
