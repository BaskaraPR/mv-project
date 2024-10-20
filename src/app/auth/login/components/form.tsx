"use client";

import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2 text-center">Log In</h1>
      <p className="text-gray-600 mb-6 text-center">
        Welcome back! Please log in to access your account.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
            placeholder="test@mail@gmail.com"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember"
            className="ml-2 block text-sm text-gray-700"
          >
            Remember Me
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">OR</div>

      <button className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
        <FaGoogle />
        Login with Google
      </button>

      <p className="mt-4 text-center text-sm text-gray-600">
        Dont have an account?{" "}
        <Link
          href="/auth/signUp"
          className="font-medium text-purple-600 hover:text-purple-500 inline-flex items-center"
        >
          <span className="flex items-center gap-1">
            Sign Up
            <MdOutlineArrowOutward />
          </span>
        </Link>
      </p>
    </div>
  );
}
