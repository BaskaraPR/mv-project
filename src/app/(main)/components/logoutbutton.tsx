"use client";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";

export default function LogoutButton() {
  const handleLogout = () => {
    toast.promise(
      signOut({ callbackUrl: "/", redirect: true }),
      {
        loading: "Logging out...",
        success: "Logged out successfully!",
        error: "Failed to log out. Try again!",
      }
    );
  };

  return (
    <button
      className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-700 hover:scale-105 shadow-sm rounded-full"
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
}
