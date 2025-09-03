"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import "./globals.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${merriweather.variable}`}
        style={{ fontFamily: "var(--font-merriweather)" }}
        suppressHydrationWarning={true}
      >
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <Loader />
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
