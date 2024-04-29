import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcrypt";

import { authConfig } from "./auth.config";

import { getUser } from "./actions/user";

import { User as UserModel } from "@prisma/client";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(1) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;

          const user = await getUser(username);

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) {
            return user;
          }
        }

        console.log("Invalid credentials");

        return null;
      },
    }),
  ],
});

declare module "next-auth" {
  interface User extends UserModel {}
}
