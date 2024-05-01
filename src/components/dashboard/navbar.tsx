import { signOutUser } from "@/actions/user";
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
    <nav className="bg-emerald-600 px-4 py-3 flex justify-between">
      <div className="flex items-center text-xl">
        <FaBars
          className="text-white mr-4 cursor-pointer"
          onClick={handleClick}
        />
        <span className="text-white text-lg font-semibold">
          Kantor Wali Nagari Saok Laweh
        </span>
      </div>
      <div className="flex items-center gap-x-5">
        <form
          action={signOutUser}
          className="rounded hover:shadow hover:bg-emerald-500 py-1.5 px-3"
        >
          <div className="text-white">
            <button className="flex items-center text-sm gap-x-1 font-medium">
              <RiLogoutBoxRFill className="w-6 h-6" />
              Sign Out
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
}
