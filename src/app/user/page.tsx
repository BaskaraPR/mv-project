import { ArrowLeft, User } from "lucide-react";
import Link from "../(main)/components/button";
import { nextGetServerSession } from "@/lib/next-auth";
import Logoutbutton from "../(main)/components/logoutbutton";

export default async function UserMenu() {
  const session = await nextGetServerSession();
  const currentUserId = session?.user?.id;
  const username = session?.user?.name;
  const email = session?.user?.email;
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="w-full max-w-sm mx-auto mt-8 bg-white rounded-[32px] p-6 relative shadow-xl">
        <Link
          href={"/companies"}
          className="absolute left-4 top-4 text-gray-700"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>

        <div className="flex flex-col items-center mt-8 mb-6">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-3">
            <User className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-xl font-semibold">{username}</h2>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>

        <div className="space-y-3">
          <Link
            href={`/user/profile/${currentUserId}`}
            variant="primary"
            className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl h-12 font-medium"
          >
            Show Profile
          </Link>
          <Link
            href={"/user/language"}
            variant="primary"
            className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl h-12 font-medium"
          >
            Language
          </Link>
          <Link
            href={"/user/currency"}
            variant="primary"
            className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl h-12 font-medium "
          >
            Currency
          </Link>
          <div className="flex justify-center items-center">
            <Logoutbutton />
          </div>
        </div>
      </div>
    </div>
  );
}
