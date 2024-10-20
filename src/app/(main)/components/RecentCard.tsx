import logo from "@/../public/logo/image.png";
import Image from "next/image";

export default function RecentCard() {
  return (
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <Image
          src={logo} // Replace with the correct icon image
          alt="App Icon"
          height={20}
          width={20}
          className="h-12 w-12"
        />
      </div>

      {/* Title */}
      <h3 className="text-center text-xl font-semibold mb-2">Mobile App</h3>

      {/* Description */}
      <p className="text-center text-gray-600 mb-6">
        With our ability to produce websites, mobile apps, and iOS apps, we will
        help solve your problem with good and useful products.
      </p>

      {/* Bid Information */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600 text-sm">Highest bid</span>
        <span className="text-black font-bold text-lg">$300</span>
      </div>

      {/* Request Now Link */}
      <div className="mt-2 text-right">
        <a href="#" className="text-purple-500 font-semibold hover:underline">
          Request now
        </a>
      </div>
    </div>
  );
}
