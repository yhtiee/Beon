"use client";

import SideBar from "@/components/SideBar";
import { usePathname } from "next/navigation";

export default function BrandLayout({ children }) {
  const pathName = usePathname();
  const noSideBar = ["/brand/sign-up"];
  const isSideBarNeeded = noSideBar.includes(pathName);

  return (
    <main className="w-[100%] h-[100%] flex_row">
      {!isSideBarNeeded && <SideBar />}
      <section className="w-[80%] ml-auto border-l-[#403f3f] border-l-[1px] flex_col items-center justify-start">
        {children}
      </section>
    </main>
  );
}
