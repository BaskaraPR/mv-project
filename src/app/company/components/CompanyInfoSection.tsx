"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUserCompany } from "@/app/services/user";
import { getCompanyTags } from "@/app/services/companies";
import AddTagsModal from "./AddTagsModal";
import { createTags, deleteTag } from "@/app/services/tags";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

export default function CompanyInfoSection({ idUser }: { idUser: string }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const queryClient = useQueryClient();
	const {
		data: company,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["user", idUser, "company_data"],
		queryFn: () => getUserCompany(idUser),
	});

	const { data: tags } = useQuery({
		queryKey: ["company_tags", company?.id],
		queryFn: () => getCompanyTags(company.id!),
	});

	const mutation = useMutation({
		mutationFn: createTags,
		mutationKey: ["edit_tags_field"],
		onSuccess: (data) => {
			console.log("tags updated successfully:", data);
			queryClient.invalidateQueries({
				queryKey: ["company_tags", company?.id],
			});
		},
		onError: (error) => {
			console.error("Error posting new tag:", error);
		},
	});

	const deleteMutation = useMutation({
		mutationFn: deleteTag,
		onSuccess: (data) => {
			console.log("tag deleted successfully:", data);
			queryClient.invalidateQueries({
				queryKey: ["company_tags", company?.id],
			});
		},
		onError: (error) => {
			console.error("Error deleting tag:", error);
		},
	});

	const handleCreateTags = async (tagData: string) => {
		mutation.mutate({ tag: tagData, idCompany: company.id });
	};

	const handleDeleteTag = async (tagId: string) => {
		deleteMutation.mutate(tagId);
	};

	if (isLoading)
		return (
			<div className="bg-white p-6 rounded-[30px] shadow-sm w-[301px] h-[393px] flex items-center justify-center">
				Loading...
			</div>
		);

	if (error)
		return (
			<div className="bg-white p-6 rounded-[30px] shadow-sm w-[301px] h-[393px] flex items-center justify-center">
				Error: {error.message}
			</div>
		);

	return (
		<div className="w-full flex justify-center">
			{isModalOpen && (
				<AddTagsModal
					setIsModalOpen={setIsModalOpen}
					submitTag={handleCreateTags}
				/>
			)}

			<div className="flex justify-between max-h-400 bg-white w-full  rounded-xl shadow-2xl mt-32 p-8">
				<div className="flex flex-row space-x-10">
					<div className="h-40 w-40">
						{company.company_image ? (
							<Image
								src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${company.company_image}?access_token=${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`}
								alt={company.company_name}
								width={400}
								height={400}
								className="rounded-lg object-cover w-full h-full"
							/>
						) : (
							<div className="bg-gray-200 w-24 h-24 rounded-lg animate-pulse" />
						)}
					</div>
					<div className="flex flex-col justify-between">
						<div>
							<h1 className="text-2xl font-bold">{company.company_name}</h1>
							<span className="mt-2 text-wrap">{company.description}</span>
						</div>
						{tags && tags.length > 0 ? (
							<div className="flex gap-2">
								{tags.map((tag) => (
									<span
										key={tag.id}
										className="inline-flex items-center gap-1 px-3 py-1 bg-gray-300 text-gray-800 rounded-full text-sm font-medium transition-colors hover:bg-gray-200"
									>
										{tag.tags}
										<button
											className="p-1 rounded-full hover:bg-gray-300 transition-colors"
											onClick={() => handleDeleteTag(tag.id)}
										>
											<X size={14} />
										</button>
									</span>
								))}
							</div>
						) : (
							<div className="mt-2">
								<span className="px-3 py-1 bg-purple-500 rounded-full text-sm text-white">
									No tags available
								</span>
							</div>
						)}
					</div>
				</div>
				<div className="flex flex-col justify-between ">
					<span className="text-right">{company.company_website}</span>
					<div className="flex flex-row gap-4">
						<button
							className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-700 hover:scale-105 shadow-sm rounded-full"
							onClick={() => setIsModalOpen(true)}
						>
							Add Tags
						</button>
						<Link
							href={`/company/edit/${company.id}`}
							className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-700 hover:scale-105 shadow-sm rounded-full"
						>
							Edit
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
