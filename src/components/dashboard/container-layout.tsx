"use client";

import { useState } from "react";

import { Dashboard } from "@/components/dashboard/dashboard";
import { Sidebar } from "@/components/dashboard/sidebar";

export function ContainerLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Dashboard
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      >
        {children}
      </Dashboard>
    </div>
  );
}
