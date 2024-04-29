"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

import prisma from "@/libs/database";

export async function getUser(username: string) {
  try {
    const user = await prisma.user.findFirst({
      where: { username: username },
    });

    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);

    throw new Error("Failed to fetch user.");
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Username atau password salah.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function signOutUser() {
  await signOut();
}
