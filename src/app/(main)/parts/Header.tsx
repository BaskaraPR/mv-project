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
            <div className="flex">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-l-full font-medium hover:bg-purple-700 transition duration-300">
                Find a company
              </button>
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="search companies work"
                  className="w-full px-4 py-3 rounded-r-full border-2 border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
