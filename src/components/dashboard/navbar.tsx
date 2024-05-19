import { signOutUser } from "@/actions/admin";

import { FaBars } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";

interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Navbar({ isSidebarOpen, setIsSidebarOpen }: NavbarProps) {
  function handleClick() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <nav className="bg-emerald-500 px-4 py-3 flex justify-between sticky top-0 w-full z-50">
      <div className="flex items-center text-xl">
        <FaBars
          className="text-white mr-4 cursor-pointer"
          onClick={handleClick}
        />
        <span className="text-white text-base md:text-lg lg:text-xl font-semibold">
          Kantor Wali Nagari Saok Laweh
        </span>
      </div>
      <div className="flex items-center gap-x-5 z-99">
        <form
          action={signOutUser}
          className="rounded shadow-sm hover:bg-emerald-600 text-white"
        >
          <button className="flex items-center text-base font-medium py-1 px-2">
            <RiLogoutBoxRFill className="w-6 h-6" />
          </button>
        </form>
      </div>
    </nav>
  );
}
