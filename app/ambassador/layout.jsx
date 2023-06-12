"use client";

import SideBar from "@/components/SideBar";
import { usePathname } from "next/navigation";

export default function AmbassadorLayout({ children }) {
  const pathName = usePathname();
  const noSideBar = ["/ambassador/sign-up"];
  const isSideBarNeeded = noSideBar.includes(pathName);

  return (
    <main className="app">
      {isSideBarNeeded && <SideBar />}
      {children}
    </main>
  );
}
