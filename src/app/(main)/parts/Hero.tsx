import Image from "next/image";
import { CompanyCounter, WorkCounter } from "../components/Counter";
import lady from "@/../public/personIdk.png";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 p-6">
      {/* Left section with image and counters */}
      <div className="relative">
        {/* Image */}
        <Image
          src={lady}
          alt="wa"
          width={600}
          height={500}
          className="rounded-lg"
        />

        {/* Company Counter at the top-right */}
        <div className="absolute top-4 right-4">
          <CompanyCounter />
        </div>

        {/* Work Counter at the bottom-right */}
        <div className="absolute top-20 right-2 transform translate-x-4">
          <WorkCounter />
        </div>
      </div>

      {/* Right section with text */}
      <div className="text-right space-y-4">
        <h2 className="text-3xl font-semibold">Find The Best</h2>
        <h2 className="text-3xl font-semibold">
          <span className="text-purple-500">Companies</span> Here
        </h2>
        <p className="text-gray-600">ambatukammm</p>
      </div>
    </div>
  );
}
