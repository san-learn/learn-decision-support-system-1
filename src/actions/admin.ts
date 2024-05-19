"use server";

import prisma from "@/libs/database";

import { signIn, signOut } from "@/auth";

import bcrypt from "bcrypt";
import { AuthError } from "next-auth";

export async function getAdmin(username: string) {
  try {
    const user = await prisma.admin.findFirst({
      where: { username: username },
    });

    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);

    throw new Error("Failed to fetch user.");
  }
}

export async function createAdmin() {
  const hashed_password = await bcrypt.hash("admin", 10);

  await prisma.admin.create({
    data: {
      username: "admin",
      password: hashed_password,
    },
  });
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
