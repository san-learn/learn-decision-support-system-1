import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <h1>RootPage</h1>
      <Link href="/auth/sign-in">Sign In</Link>
    </>
  );
}
