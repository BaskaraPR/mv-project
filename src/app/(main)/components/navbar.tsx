import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Link2 from "@/app/(main)/components/button";
import Image from "next/image";
import logo from "@/../public/logo/image.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="logo TaskNest" width={40} height={40} />
        <span className="text-xl font-semibold text-purple-600">TaskNest</span>
      </div>
      <div className="flex items-center space-x-6">
        <Link className="text-gray-600 hover:text-gray-900" href="/">
          Home
        </Link>
        <Link className="text-gray-600 hover:text-gray-900" href="/companies">
          Companies
        </Link>
        <div className="relative group">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            Category
            <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          {/* Dropdown menu could be added here */}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Link2 href={"/auth/login"} variant="primary">
          Log In
        </Link2>
        <Link2 href={"auth/signUp"} variant="secondary">
          Sign Up
        </Link2>
      </div>
    </nav>
  );
}
