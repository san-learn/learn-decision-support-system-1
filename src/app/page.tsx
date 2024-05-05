// import bycrypt from "bcrypt";

// import prisma from "@/libs/database";
import Link from "next/link";

export default function RootPage() {
  // async function createUser() {
  //   "use server";

  //   const hashedPassword = bycrypt.hashSync("admin", 10);

  //   await prisma.user.create({
  //     data: {
  //       username: "admin",
  //       password: hashedPassword,
  //     },
  //   });
  // }

  return (
    <>
      <h1>RootPage</h1>
      <Link href="/auth/sign-in">Sign In</Link>
      {/* <form action={createUser}>
        <button type="submit">Create User</button>
      </form> */}
    </>
  );
}
