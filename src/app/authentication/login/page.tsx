import type { Metadata } from "next";

// import { createAdmin } from "@/actions/admin";

import { FormLogin } from "@/components/auth/login/form-login";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Halaman Login untuk Sistem Penunjang Keputusan dengan menggunakan metode Simple Additive Weighting.",
};

export default function AuthenticationLoginPage() {
  return (
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url('/background.jpg')]" />
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-black uppercase">
                LOGIN
              </h2>
              <p className="mt-3 text-black">Kantor Wali Nagari Saok Laweh</p>
            </div>
            <div className="mt-8">
              <FormLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
    //  <form action={createAdmin}>
    //   <button type="submit">Create Admin</button>
    // </form>
  );
}
