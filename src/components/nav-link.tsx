"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationLink({
  link,
}: {
  link: { name: string; href: string };
}) {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={link.href}
        {...(pathname === link.href && { className: "uppercase" })}
      >
        {link.name}
      </Link>
    </>
  );
}
