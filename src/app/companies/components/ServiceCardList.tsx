"use client";
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "@/app/services/companies";
import ServiceCard, { ServiceCardSkeleton } from "./ServiceCard";
import { Company } from "@/app/types/companies";

interface ServiceCardListProps {
  initialCompanies: Company[];
}

const ServiceCardList: React.FC<ServiceCardListProps> = ({ initialCompanies }) => {
  const { data: companies, isLoading, error } = useQuery({
    queryKey: ["company_data"],
    queryFn: () => getCompanies(10, 1),
    initialData: initialCompanies,
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[...Array(5)].map((_, index) => (
          <ServiceCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-[30px] shadow-sm w-full flex items-center justify-center">
        <p className="text-red-500">Error: {(error as Error).message}</p>
      </div>
    );
  }

  if (!companies || companies.length === 0) {
    return (
      <div className="bg-white p-6 rounded-[30px] shadow-sm w-full flex items-center justify-center">
        <p>No companies found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {companies.map((company: Company) => (
        <ServiceCard key={company.id} CompanyData={company} />
      ))}
    </div>
  );
};

export default ServiceCardList;