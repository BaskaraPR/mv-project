"use client";
import { Company } from "@/app/types/companies";
import Image from "next/image";
import React from "react";
import { getCompanyTags } from "@/app/services/companies";
import { useQuery } from "@tanstack/react-query";

const Card = ({ CompanyData }: { CompanyData: Company }) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["company_tags", CompanyData.id],
		queryFn: () => getCompanyTags(CompanyData.id),
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="bg-white p-6 border-gray-200">
			{CompanyData ? (
				<div className="relative w-28 h-28">
					<Image
						src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${CompanyData.company_image}?access_token=${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`}
						alt={CompanyData.company_name}
						width={112}
						height={112}
						className="object-cover w-full h-full mb-4"
					/>
				</div>
			) : (
				<div className="bg-gray-200 w-28 h-28 animate-pulse mb-4" />
			)}

			<h3 className="text-xl font-semibold mb-2 mt-2">
				{CompanyData.company_name}
			</h3>

			<p className="text-gray-600 mb-4">{CompanyData.description}</p>
			{data && data.length > 0 ? (
				<ul className="flex flex-row flex-wrap">
					{data.map((tag) => (
						<li
							key={tag.id}
							className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
						>
							{tag.tags}
						</li>
					))}
				</ul>
			) : (
				<></>
			)}
			<div className="flex justify-between items-center">
				<a href="#" className="text-purple-600 hover:underline">
					Request now
				</a>
			</div>
		</div>
	);
};

export default Card;
