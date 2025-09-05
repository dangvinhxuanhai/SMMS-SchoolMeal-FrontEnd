import "./globals.css";
import { Merriweather } from "next/font/google";
import type { Metadata } from "next";
import { LoadingProvider } from "@/context/LoadingContext";
import RouteLoaderOverlay from "@/components/RouteLoaderOverlay";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "SchoolMeal",
  description: "SchoolMeal - Dinh dưỡng cho bé yêu",
};

export default function SchoolMeal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable}`}
        style={{ fontFamily: "var(--font-merriweather)" }}
        suppressHydrationWarning={true}
      >
        <LoadingProvider>
          {children}
          <RouteLoaderOverlay />
        </LoadingProvider>
      </body>
    </html>
  );
}