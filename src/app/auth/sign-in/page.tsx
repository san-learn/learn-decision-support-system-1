import { FormSignIn } from "@/components/auth/sign-in/form-sign-in";

export default function AuthSignInPage() {
  return (
    <>
      <div className="flex min-h-[100vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-transparent">
        <div className=" bg-gray-600 p-4 max-w-md mx-auto rounded">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-4">
            <h1 className="text-center text-2xl text-pretty font-bold leading-9 tracking-tight text-white">
              KANTOR WALI NAGARI SAOK LAWEH
            </h1>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <FormSignIn />
          </div>
        </div>
      </div>
    </>
  );
}
