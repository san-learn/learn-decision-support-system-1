import { signOutUser } from "@/actions/user";
import { NavigationLink } from "@/components/nav-link";

const navLinks = [
  {
    name: "Home",
    href: "/dashboard/home",
  },
  {
    name: "Alternatif",
    href: "/dashboard/alternatif",
  },
  {
    name: "Kriteria",
    href: "/dashboard/kriteria",
  },
  {
    name: "Nilai",
    href: "/dashboard/nilai",
  },
  {
    name: "Hasil Metode SAW",
    href: "/dashboard/hasil-metode-saw",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex justify-between px-16 py-8 border-b-[1px] border-white">
        <h1 className="uppercase">Sistem Penunjang Keputusan</h1>
        <nav className="flex gap-12">
          {navLinks.map((link, index) => {
            return <NavigationLink link={link} key={index} />;
          })}
          <form action={signOutUser}>
            <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </nav>
      </header>
      <main>
        <div className="px-16 py-8">{children}</div>
      </main>
    </>
  );
}
