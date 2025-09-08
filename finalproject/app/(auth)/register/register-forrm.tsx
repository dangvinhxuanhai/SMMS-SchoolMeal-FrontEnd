"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Lock, Sparkles, Check, Eye, EyeOff } from "lucide-react";

const registerSchema = z
  .object({
    phone: z
      .string()
      .min(9, "Phone must be at least 9 digits")
      .regex(/^[0-9]+$/, "Phone must only contain numbers"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-2xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome!</h1>
          <p className="text-gray-600">Create your account to get started</p>
        </div>

        <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
          {isSuccess && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-3xl flex items-center justify-center z-20">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Success!
                </h3>
                <p className="text-gray-600">Your account has been created</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="relative">
              <User
                className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${
                  errors.phone ? "text-red-500" : "text-gray-400"
                }`}
              />
              <input
                type="text"
                {...register("phone")}
                placeholder="Enter your phone number"
                disabled={isSubmitting}
                className={`block w-full pl-10 pr-3 py-3 border-2 rounded-xl ${
                  errors.phone
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-indigo-500"
                } focus:outline-none focus:ring-4 focus:ring-indigo-500/20`}
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Lock
                className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${
                  errors.password ? "text-red-500" : "text-gray-400"
                }`}
              />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Create a strong password"
                disabled={isSubmitting}
                className={`block w-full pl-10 pr-10 py-3 border-2 rounded-xl ${
                  errors.password
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-indigo-500"
                } focus:outline-none focus:ring-4 focus:ring-indigo-500/20`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Lock
                className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${
                  errors.confirmPassword ? "text-red-500" : "text-gray-400"
                }`}
              />
              <input
                type="password"
                {...register("confirmPassword")}
                placeholder="Confirm your password"
                disabled={isSubmitting}
                className={`block w-full pl-10 pr-3 py-3 border-2 rounded-xl ${
                  errors.confirmPassword
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-indigo-500"
                } focus:outline-none focus:ring-4 focus:ring-indigo-500/20`}
              />
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-4 text-white font-semibold rounded-xl transition-all duration-300 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? "Creating your account..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
