"use client";

import { Button } from "../components/button";
import { Company } from "@/app/types/companies";
import Card from "@/app/companies/components/Card";
import { getCompanies } from "@/app/services/companies";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
export default function RecentWorks() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["company_data"],
		queryFn: () => getCompanies(3, 1),
	});

	if (isLoading)
		return (
			<div className="flex justify-center items-center h-screen">
				<LoadingSpinner size="large" />
			</div>
		);

	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="container mx-auto px-4 py-8">
			<h3 className="text-left text-gray-500 mb-2">The Companies Work!</h3>
			<h2 className="text-left text-3xl font-semibold mb-6">
				Recently Posted <span className="text-purple-500">Works</span>
			</h2>
			<div className="flex flex-wrap gap-6 mb-8 justify-center">
				{data &&
					data.map((data: Company, index: number) => (
						<Card key={index} CompanyData={data} />
					))}
			</div>

			<div className="text-center">
				<Button variant="primary">Find More</Button>
			</div>
		</div>
	);
}
