"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div
      className={cn("flex flex-col gap-6 w-full", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-2 shadow-lg shadow-blue-500/25 transform rotate-1 hover:rotate-3 transition-transform duration-300">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-sm"></div>
          </div>
        </div>

        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
          Sign in to your account and continue your journey
        </p>
      </div>

      <div className="grid gap-6">
        {/* Email Field */}
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 flex items-center gap-2"
          >
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            Email Address
          </Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="enter@example.com"
              required
              className={cn(
                "h-12 px-4 bg-white/70 border-2 border-gray-200/80 rounded-xl transition-all duration-300 placeholder:text-gray-400",
                "focus:border-blue-400 focus:bg-white focus:shadow-lg focus:shadow-blue-500/10",
                focusedInput === "email" &&
                  "border-blue-400 bg-white shadow-lg shadow-blue-500/10"
              )}
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 pointer-events-none opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 flex items-center gap-2"
            >
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Password
            </Label>
            <a
              href="#"
              className="text-sm text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline transition-colors duration-200 font-medium"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className={cn(
                "h-12 px-4 bg-white/70 border-2 border-gray-200/80 rounded-xl transition-all duration-300 placeholder:text-gray-400",
                "focus:border-blue-400 focus:bg-white focus:shadow-lg focus:shadow-blue-500/10",
                focusedInput === "password" &&
                  "border-blue-400 bg-white shadow-lg shadow-blue-500/10"
              )}
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput(null)}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 pointer-events-none opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          onClick={handleSubmit}
          className="h-12 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              Signing in...
            </div>
          ) : (
            "Sign In"
          )}
        </Button>

        <div className="relative flex items-center">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="mx-4 text-sm text-gray-500 bg-white px-2">
            Or continue with
          </span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        <Button
          type="button"
          variant="outline"
          className="h-12 w-full border-2 border-gray-200 hover:border-gray-300 bg-white/70 hover:bg-white text-gray-700 font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group"
        >
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Continue with GitHub
          </div>
        </Button>
      </div>

      <div className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <a
          href="#"
          className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline transition-colors duration-200"
        >
          Create account
        </a>
      </div>
    </div>
  );
}