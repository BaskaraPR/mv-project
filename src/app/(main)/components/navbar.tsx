import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./logoutbutton";
import UserDropdown from "./UserDropdown";

import Link2 from "@/app/(main)/components/button";
import logo from "@/../public/logo/image.png";
import { nextGetServerSession } from "@/lib/next-auth";
import ClientSelect from "./ClientSelect";
import { getTags } from "@/app/services/tags";

export default async function Navbar() {
  const session = await nextGetServerSession();
  const tags = await getTags(); // Fetching tags here

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-auto my-5 bg-white flex max-w-[1356px] items-center justify-between rounded-full px-8 py-4 shadow-md">
      <div className="flex items-center space-x-2">
        <Image
          src={logo}
          alt="TaskNest Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-2xl font-bold">TaskNest</span>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link href="/companies" className="text-gray-600 hover:text-gray-900">
          Companies
        </Link>
        {/* Tags Dropdown */}
        <div className="w-48">
          <ClientSelect tags={tags} />
        </div>
        {session ? (
          <>
            <UserDropdown user={session.user} />
            <Link href="/history" className="text-gray-600 hover:text-gray-900">
              Projects
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link2 href={"/auth/login"} variant="primary">
              Log In
            </Link2>
            <Link2 href={"auth/signUp"} variant="secondary">
              Sign Up
            </Link2>
          </>
        )}
      </div>
    </nav>
  );
}
