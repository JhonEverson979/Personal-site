"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/navbar";
import { useEffect, useState } from "react";
import StartPage from "@/components/StartPage/startpage";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [saber, setSaber] = useState(true); //mudei

  useEffect(() => {
    setTimeout(() => {
      setSaber(false);
    }, 1400);
  }, []);

  return (
    <html className="bg-hero-pattern  font-serif" lang="en">
      <title>jhon everson</title>
      <body>
        {saber ? (
          <StartPage />
        ) : (
          <>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
