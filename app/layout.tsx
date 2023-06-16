"use client";
import earth from "../public/images/planets/earth.png";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import { useEffect, useState } from "react";
import StartPage from "@/components/StartPage/startpage";
import Footer from "@/components/Footer/footer";
import Image from "next/image";

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
            <main>
              <div className="opacity-60 -z-10 absolute right-0">
                <Image
                  className=""
                  alt="planet"
                  priority
                  width={300}
                  height={300}
                  src={earth}
                />
              </div>
              {children}{" "}
            </main>

            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
