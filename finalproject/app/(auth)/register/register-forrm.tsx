"use client";
import { useState } from "react";
import { User, Lock, Sparkles, Check, Eye, EyeOff } from "lucide-react";
import { useRegisterForm, RegisterFormData } from "@/hooks/useRegisterForm";
import { useRegisterMutation } from "@/hooks/useRegisterMutation";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useRegisterForm();

  const mutation = useRegisterMutation({
    onSuccess: (data) => {
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 3000);
    },
    onError: (error) => {
      console.log("Handling error in component:", error.message);
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Form submitted:", data);
    const { confirmPassword, ...submitData } = data;
    mutation.mutate(submitData);
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

          {mutation.error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-600 text-sm">
                {mutation.error instanceof Error
                  ? mutation.error.message
                  : "Registration failed. Please try again."}
              </p>
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
                disabled={mutation.isPending}
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
                disabled={mutation.isPending}
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
                disabled={mutation.isPending}
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
              disabled={mutation.isPending}
              className={`w-full py-4 px-4 text-white font-semibold rounded-xl transition-all duration-300 ${
                mutation.isPending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02]"
              }`}
            >
              {mutation.isPending
                ? "Creating your account..."
                : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
