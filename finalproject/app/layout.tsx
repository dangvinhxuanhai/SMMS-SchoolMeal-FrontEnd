import "./globals.css";
import { Merriweather } from "next/font/google";
import type { Metadata } from "next";
import { LoadingProvider } from "@/context/LoadingContext";
import RouteLoaderOverlay from "@/components/RouteLoaderOverlay";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "SchoolMeal",
  description: "SchoolMeal - Dinh dưỡng cho bé yêu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable}`}
        style={{ fontFamily: "var(--font-merriweather)" }}
        suppressHydrationWarning
      >
        <LoadingProvider>
          <div
            className="relative min-h-screen flex flex-col"
            style={{
              background: "linear-gradient(135deg, #D3CAE2, #E6C17A)",
            }}
          >
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <RouteLoaderOverlay />
        </LoadingProvider>
      </body>
    </html>
  );
}
