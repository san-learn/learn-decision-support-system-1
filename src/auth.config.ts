import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/authentication/sign-in",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLoggedIn) {
          return true;
        }

        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard/home", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
