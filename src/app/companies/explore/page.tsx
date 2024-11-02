"use client";
import ServiceCard from "../components/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "@/app/services/companies";
import { Company } from "@/app/types/companies";

export default function ExplorePage() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["company_data"],
		queryFn: () => getCompanies(10, 1),
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="max-w-[1369px] container mx-auto p-4 mt-16">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="max-h-[800px] overflow-y-auto">
					<div className="space-y-6">
						{data && data.map((data: Company, index: number) => (
							<ServiceCard key={index} CompanyData={data} />
						))}
					</div>
				</div>

				<div className="md:col-span-2">
					<div className="bg-white rounded-lg shadow-md p-6">
						<div className="flex flex-col space-y-8 mb-2">
							<h2 className="text-xl font-semibold">{"<"} Choose Company</h2>
							<span className="text-sm text-gray-600">
								Information will be displayed here
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
