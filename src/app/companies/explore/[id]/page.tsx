"use client";
import { useQuery } from "@tanstack/react-query";
import { findCompaniesById } from "@/app/services/companies";
import CompanySection from "../components/CompanySection";
import { Company } from "@/app/types/companies";
import Image from "next/image";
export default function ExplorePageCompany({
	params,
}: {
	params: { id: string };
}) {
	const { data, isLoading, error } = useQuery<Company>({
		queryKey: ["company_data", params.id],
		queryFn: () => findCompaniesById(params.id),
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<div className="max-w-[1369px] container mx-auto p-4 mt-16">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<CompanySection />
				<div className="md:col-span-2">
					<div className="bg-white rounded-lg shadow-md p-6">
						<div className="flex flex-col items-center mb-2">
							<div className="w-full flex justify-center">
								<div className="w-28 h-28">
									{data && (
										<Image
											src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${data.company_image}?access_token=${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`}
											alt={data.company_name}
											width={112}
											height={112}
											className="object-cover w-full h-full mb-4"
										/>
									)}
								</div>
							</div>
							<h2 className="text-xl font-semibold">
								{data && data.company_name}
							</h2>
						</div>
						<div className="flex items-center mb-4">
							<span className="ml-1 text-sm font-semibold">
								{data?.company_website}
							</span>
						</div>
						<p className="text-sm mb-2 my-2">{data?.description}</p>

						<button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
							Request Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
