import Image from "next/image";
import { Company } from "@/app/types/companies";
import { getCompanyTags } from "@/app/services/companies";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";


const ServiceCard = ({ CompanyData }: { CompanyData: Company }) => {
	const { data: tags, isLoading, error } = useQuery({
		queryKey: ["company_tags", CompanyData.id],
		queryFn: () => getCompanyTags(CompanyData.id),
	  });

	return (
		<div
			className="w-[341px] p-[20px] bg-white rounded-lg 
      shadow-lg gap-[22px] flex flex-col border border-gray-200 text-center"
		>
			<div className="w-full flex justify-center">
				<div className="w-28 h-28">
					{CompanyData && (
						<Image
							src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${CompanyData.company_image}?access_token=${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`}
							alt={CompanyData.company_name}
							width={117}
							height={80}
							className="object-cover w-full h-full mb-4"
						/>
					)}
				</div>
			</div>
			{CompanyData && (
				<>
					<h3 className="text-xl font-semibold">{CompanyData.company_name}</h3>
					{tags && tags.length > 0 && (
						<div className="flex flex-wrap justify-center gap-2">
							{tags.map((tag) => (
							<span
								key={tag.id}
								className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
							>
								{tag.tags}
							</span>
							))}
						</div>
					)}
					<p className="text-gray-600 py-1">{CompanyData.description}</p>

					<div className="flex justify-center items-center mt-4">
						<Link
							href={`/companies/explore/${CompanyData.id}`}
							className="text-purple-600 hover:underline"
						>
							Request now
						</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default ServiceCard;
