"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8 max-w-md bg-white rounded-2xl shadow-lg">
          <div className="flex justify-center mb-4">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            {error?.message || "An unexpected error occurred."}
          </p>
          <Button
            variant="default"
            className="px-6 py-2 rounded-xl"
            onClick={() => reset()}
          >
            Try Again
          </Button>
        </div>
      </body>
    </html>
  );
}
