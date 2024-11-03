"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { findCompaniesById } from "@/app/services/companies";
import { findUserById } from "@/app/services/user";
import Image from "next/image";
import {
  Star,
  Check,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock,
  RefreshCcw,
  Users,
} from "lucide-react";
import { Button } from "../../(main)/components/button";
import RequestModal from "./RequestModal";
import { Company } from "@/app/types/companies";

const CompanyDetails = ({ initialCompanyData, cpId }: { initialCompanyData: Company, cpId: string }) => {
  const [isReq, setIsReq] = useState(false);

  const { data: selectedCompany } = useQuery({
    queryKey: ["company_detail", initialCompanyData.id],
    queryFn: () => findCompaniesById(initialCompanyData.id),
    initialData: initialCompanyData,
  });

  const { data: cpData } = useQuery({
    queryKey: ["contact_person", cpId],
    queryFn: () => findUserById(cpId),
  });

  const handleIsReq = () => {
    setIsReq(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {isReq && (
        <RequestModal
          onClose={() => setIsReq(false)}
          cp={
            cpData?.email ||
            "Contact Person is either dead or just nonexistent"
          }
        />
      )}
      {/* Company Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-black text-white text-xs px-2 py-1 rounded">
              NEW HERE
            </span>
            <h1 className="text-2xl font-bold">
              {selectedCompany.company_name}
            </h1>
          </div>
          <h2 className="text-gray-600 mb-4">
            {selectedCompany.company_subtitle}
          </h2>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>4.0</span>
              <span className="text-purple-600 hover:underline cursor-pointer">
                (20 reviews)
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>East Java, Indonesia</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-600" />
              <span className="text-sm">3-day delivery</span>
            </div>
            <div className="flex items-center gap-1">
              <RefreshCcw className="w-4 h-4 text-gray-600" />
              <span className="text-sm">2 Revisions</span>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">
          What&apos;s Included
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            "2 concepts included",
            "Logo transparency",
            "Printable file",
            "Include source file",
            "Vector file",
            "Include 3D mockup",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className="text-sm text-gray-600">From</span>
          <p className="text-2xl font-bold">$200</p>
        </div>
        <Button onClick={handleIsReq} variant="primary">
          Request Now
        </Button>
      </div>

      {/* Reviews Section */}
      <div className="mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div>
                <p className="font-semibold">Lawrence</p>
                <div className="flex">
                  {Array(4)
                    .fill(null)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-gray-200">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            The final logo design lacked creativity and fell short of my
            expectations, mainly due to a weak understanding of my needs
            and a minimal level of effort. While everything came
            together in the end, I expected more from this provider.
          </p>
        </div>
      </div>

      {/* Company Profile Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Company profile</h3>
        <div className="flex items-start gap-4 mb-4">
          <Image
            src={
              selectedCompany.company_image
                ?   `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${selectedCompany.company_image}?access_token=${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`
                : "/placeholder.svg?height=64&width=64"
            }
            alt={selectedCompany.company_name}
            width={64}
            height={64}
            className="rounded-lg"
          />
          <div>
            <h4 className="font-semibold">
              {selectedCompany.company_name}
            </h4>
            <p className="text-gray-600">
              {selectedCompany.company_subtitle}
            </p>
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Users className="w-4 h-4" />
            </div>
            <span className="text-sm">Digital Creative</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Users className="w-4 h-4" />
            </div>
            <span className="text-sm">15 crew</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {selectedCompany.description}
        </p>
      </div>
    </div>
  );
};

export default CompanyDetails;