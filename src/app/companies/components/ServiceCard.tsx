import Image from "next/image";
import { Company } from "@/app/types/companies";
import Link from "next/link";
const ServiceCard = ({ CompanyData }: { CompanyData: Company }) => {
	return (
		<div
			className="w-[341px] p-[20px] bg-white rounded-tl-[30px] 
      shadow-lg gap-[22px] flex flex-col rounded-sm border border-gray-200 text-center"
		>
			<div className="w-full flex justify-center">
				<div className="w-28 h-28">
					{CompanyData && (
						<Image
							src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${CompanyData.company_image}?access_token=${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`}
							alt={CompanyData.company_name}
							width={112}
							height={112}
							className="object-cover w-full h-full mb-4"
						/>
					)}
				</div>
			</div>
			{CompanyData && (
				<>
					<h3 className="text-xl font-semibold">{CompanyData.company_name}</h3>
					<p className="text-gray-600 ">{CompanyData.description}</p>
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
