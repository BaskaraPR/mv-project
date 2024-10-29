"use client";
import ServiceCard from "../../components/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "@/app/services/companies";
export default function CompanySection() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["company_data"],
		queryFn: () => getCompanies(10, 1),
	});
	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<div className="max-h-[800px] overflow-y-auto">
			<div className="space-y-6">
				{data &&
					data.map((data, index: number) => (
						<ServiceCard key={index} CompanyData={data} />
					))}
			</div>
		</div>
	);
}
