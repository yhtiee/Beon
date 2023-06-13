"use client";

import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Beon",
  description: "Identify ideal ambassadors for your brand's niche.",
};

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const isLayoutNeeded = pathName === "/ambassador/sign-up";
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className="app">
          {!isLayoutNeeded && <Nav />}
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
