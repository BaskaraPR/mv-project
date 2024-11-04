import React, { Suspense } from "react";
import { getCompanies, findCompaniesById } from "@/app/services/companies";
import ServiceCardList from "../../components/ServiceCardList";
import CompanyDetails from "../../components/CompanyDetails";
import CompanyDetailsSkeleton from "../../components/CompanyDetailsSkeleton";
import ServiceCard from "../../components/ServiceCard";
import { nextGetServerSession } from "@/lib/next-auth";

export default async function ExplorePage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const companiesPromise = getCompanies(10, 1);
    const selectedCompanyPromise = findCompaniesById(params.id);

    const [companies, selectedCompany] = await Promise.all([
      companiesPromise,
      selectedCompanyPromise,
    ]);
    const session = await nextGetServerSession();
    const currentUserId = session?.user?.id;
    return (
      <div className="max-w-[1369px] container mx-auto p-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side - Service Cards */}
          <div className="max-h-[800px] overflow-y-auto">
            <Suspense
              fallback={
                <div className="space-y-6">
                  {[...Array(5)].map((_, index) => (
                    <ServiceCard key={index} />
                  ))}
                </div>
              }
            >
              <ServiceCardList initialCompanies={companies} />
            </Suspense>
          </div>

          {/* Right Side - Company Details */}
          <div className="md:col-span-2">
            <Suspense fallback={<CompanyDetailsSkeleton />}>
              <CompanyDetails
                initialCompanyData={selectedCompany}
                cpId={params.id}
                userPP={currentUserId || ""}
              />
            </Suspense>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="max-w-[1369px] container mx-auto p-4 mt-16">
        <p className="text-red-500">
          An error occurred: {(error as Error).message}
        </p>
      </div>
    );
  }
}

