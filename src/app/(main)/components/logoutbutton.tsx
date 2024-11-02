"use client";
import { signOut } from "next-auth/react";

export default function logoutbutton() {
  return (
    <button
      className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-700 hover:scale-105 shadow-sm rounded-full"
      onClick={() => signOut({ callbackUrl: "/", redirect: true })}
    >
      Log Out
    </button>
  );
}
