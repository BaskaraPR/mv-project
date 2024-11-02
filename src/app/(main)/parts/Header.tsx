import { Search } from "lucide-react";
import Image from "next/image";
import money from "@/../public/money.png";

export default function Header() {
  return (
    <header className="bg-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Are you looking for Companies?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find a company, Fast. TaskNest helps you find elite companies at a
              moments notice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6 pr-1">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition duration-300 whitespace-nowrap">
            Hire a freelancer
          </button>
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="search company"
              className="w-full px-6 py-3 pr-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition duration-300"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src={money}
              alt="Illustration of a person surrounded by money and coins"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
