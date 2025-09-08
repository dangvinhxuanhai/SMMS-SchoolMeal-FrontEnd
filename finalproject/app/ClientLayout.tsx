"use client";

import type React from "react";
import { LoadingProvider } from "@/context/LoadingContext";
import RouteLoaderOverlay from "@/components/RouteLoaderOverlay";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
