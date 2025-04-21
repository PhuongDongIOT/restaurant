import { toast } from "sonner";

export const loginSuccessToast = (username: string) => {
  toast.success("Login successful!", {
    description: `Welcome back, ${username}!`,
    duration: 3000, // Display time (milliseconds)
    position: 'top-right', // Toast display position
    // You can add other toast properties here
  });
};