"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCompanyByStatus } from "@/app/services/projects";
import LoadingSpinner from "@/components/LoadingSpinner";
import { projectAction, sendResult } from "@/app/services/projects";
import { useState } from "react";
import FormModal from "./FormModal";

interface Project {
	id: string;
	project_name: string;
}
export default function CompanyProgressProjectSection({
	idCompany,
}: {
	idCompany: string;
}) {
	const queryClient = useQueryClient();
	const [selectedOption, setSelectedOption] = useState<Project | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { data, isLoading } = useQuery({
		queryKey: ["company", idCompany, "progress_projects"],
		queryFn: () =>
			getCompanyByStatus({ companyId: idCompany, status: "progress" }),
	});

	const mutation = useMutation({
		mutationFn: projectAction,
		mutationKey: ["handle_project_action"],
		onSuccess: (data) => {
			console.log("status updated successfully:", data);
			queryClient.invalidateQueries({
				queryKey: ["company", idCompany, "progress_projects"],
			});
		},
		onError: (error) => {
			console.error("Error updating project status", error);
		},
	});

	const ResultMutation = useMutation({
		mutationFn: sendResult,
		mutationKey: ["handle_project_send_result"],
		onSuccess: (data) => {
			console.log("result has been sent successfully:", data);
			queryClient.invalidateQueries({
				queryKey: ["company", idCompany, "progress_projects"],
			});
		},
		onError: (error) => {
			console.error("Error updating project result ", error);
		},
	});

	const handleFinishProject = async (link: string) => {
		try {
			ResultMutation.mutate({
				projectId: selectedOption!.id,
				resultlink: link,
			});
		} catch (error) {
			throw new Error(`Error updating data from Directus: ${error}`);
		}
	};

	const handleCancelProject = async (projectId: string) => {
		mutation.mutate({ projectId: projectId, status: "cancelled" });
	};

	if (isLoading)
		return (
			<div className="flex justify-center items-center h-screen">
				<LoadingSpinner size="large" />
			</div>
		);

	return (
		<div>
			{isModalOpen && (
				<FormModal
					setIsModalOpen={setIsModalOpen}
					submitAction={handleFinishProject}
					label={`Result For ${selectedOption!.project_name} `}
					button="Complete Project"
				/>
			)}
			<div className="w-full flex justify-center flex-col space-y-4 max-h-[800px] overflow-y-auto pb-4">
				{data &&
					data.map((data) => (
						<div key={data.id} className="shadow-xl">
							<div className="flex justify-between bg-white w-full h-full rounded-xl  p-8">
								<div className="flex flex-col">
									<h2 className="max-w-96 break-words text-2xl font-bold text-purple-500">
										{data.project_name}
									</h2>
									<span className="max-w-96 break-words">
										{data.project_detail}
									</span>
									<span className="mt-2">
										{new Intl.NumberFormat("id-ID", {
											style: "currency",
											currency: "IDR",
										}).format(data.project_price)}
									</span>
									<span className="mt-2">User: {data.user_id}</span>
								</div>
								<div className="flex min-h-full flex-col justify-between">
									<div className="flex">
										<span className="max-w-96">
											{new Intl.DateTimeFormat("id-ID", {
												dateStyle: "long",
											}).format(new Date(data.start_date))}{" "}
											-{" "}
											{new Intl.DateTimeFormat("id-ID", {
												dateStyle: "long",
											}).format(new Date(data.completed_date))}
										</span>
									</div>
									<div className="flex justify-center space-x-4">
										<button
											className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-700 hover:scale-105 shadow-sm rounded-full"
											onClick={() => {
												setIsModalOpen(true);
												setSelectedOption(data);
											}}
										>
											Send Result
										</button>
										<button
											onClick={() => handleCancelProject(data.id)}
											className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-700 hover:scale-105 shadow-sm rounded-full"
										>
											Cancel Project
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
