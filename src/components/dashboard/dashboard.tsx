import { Navbar } from "@/components/dashboard/navbar";

interface DashboardProps {
  children: React.ReactNode;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Dashboard({
  children,
  isSidebarOpen,
  setIsSidebarOpen,
}: DashboardProps) {
  return (
    <div className={`w-full ${isSidebarOpen && "ml-20 md:ml-64"}`}>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {children}
    </div>
  );
}
