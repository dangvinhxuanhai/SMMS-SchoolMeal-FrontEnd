import { useMutation } from "@tanstack/react-query";
import { RegisterFormData } from "./useRegisterForm";

const registerUser = async (
  data: Omit<RegisterFormData, "confirmPassword">
) => {
  console.log("Sending registration request:", data);
  
  const response = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || "Registration failed");
  }

  const result = await response.json();
  console.log("Registration response:", result);
  return result;
};

interface UseRegisterMutationCallbacks {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export const useRegisterMutation = (callbacks?: UseRegisterMutationCallbacks) => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("Registration successful:", data);
      callbacks?.onSuccess?.(data);
    },
    onError: (error) => {
      console.error("Registration error:", error);
      callbacks?.onError?.(error);
    },
  });
};