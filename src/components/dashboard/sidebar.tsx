import Link from "next/link";
import { usePathname } from "next/navigation";

import { AiFillCalculator } from "react-icons/ai";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaClipboardList, FaHome } from "react-icons/fa";
import { MdInsertChart } from "react-icons/md";

const navLinks = [
  {
    name: "Home",
    href: "/dashboard/home",
    icon: <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    name: "Alternatif",
    href: "/dashboard/alternatif",
    icon: <BsPersonFillAdd className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    name: "Kriteria",
    href: "/dashboard/kriteria",
    icon: <FaClipboardList className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    name: "Nilai",
    href: "/dashboard/nilai",
    icon: <MdInsertChart className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    name: "Hasil Perhitungan",
    href: "/dashboard/hasil-metode-saw",
    icon: <AiFillCalculator className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
];

export function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  const pathname = usePathname();

  return (
    <div
      className={`w-64 bg-emerald-600 fixed h-full py-2 px-4 ${
        isSidebarOpen ? "block" : "hidden"
      }`}
    >
      <div className="mb-4 mt-2">
        <h1 className="text-xl font-bold text-center text-white">
          Admin Dashboard
        </h1>
      </div>
      <hr />
      <ul className="mt-4 text-white font-medium">
        {navLinks.map((link, index) => {
          return (
            <li
              key={index}
              className="mb-2 rounded hover:shadow hover:bg-emerald-500"
            >
              <Link
                href={link.href}
                className={`block px-3 w-full h-full py-2 rounded ${
                  pathname === link.href ? "bg-emerald-500" : ""
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
