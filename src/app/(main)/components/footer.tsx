import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logo/image.png";

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image src={logo} alt="logo TaskNest" width={40} height={40} />
              <span className="text-2xl font-bold text-purple-600">
                TaskNest
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Powerful Companies Marketplace System with ability to change the
              Users (Companies & Clients)
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              For Clients
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Find Companies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Request Project
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              For Companies
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Find Work
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Create Account
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Call Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">Indo</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">+62470000000</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">TaskNest@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400 text-sm">
            2025 TaskNest. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
