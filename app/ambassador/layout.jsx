"use client";
import "../../flow/config"
import SideBar from "@/components/SideBar";
import { usePathname } from "next/navigation";

export default function AmbassadorLayout({ children }) {
  const pathName = usePathname();
  const isSideBarNeeded = ["/ambassador/sign-up"];
  const noSideBar = isSideBarNeeded.includes(pathName);

  return noSideBar ? (
    <main>{children}</main>
  ) : (
    <main className="w-[100%] h-[100%] flex_row">
      <SideBar />
      <section className="w-[80%] ml-auto border-l-[#403f3f] border-l-[1px] flex_col items-center justify-start">
        {children}
      </section>
    </main>
  );
}
