"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCompanyByStatus } from "@/app/services/projects";
import LoadingSpinner from "@/components/LoadingSpinner";
import { X, Check } from "lucide-react";
import { projectAction } from "@/app/services/projects";
export default function CompanyProjectSection({
	idCompany,
}: {
	idCompany: string;
}) {
	const queryClient = useQueryClient();
	const { data, isLoading } = useQuery({
		queryKey: ["company", idCompany, "pending_projects"],
		queryFn: () =>
			getCompanyByStatus({ companyId: idCompany, status: "pending" }),
	});

	const mutation = useMutation({
		mutationFn: projectAction,
		mutationKey: ["handle_project_action"],
		onSuccess: (data) => {
			console.log("status updated successfully:", data);
			queryClient.invalidateQueries({
				queryKey: ["company", idCompany, "pending_projects"],
			});
		},
		onError: (error) => {
			console.error("Error updating project status", error);
		},
	});

	if (isLoading)
		return (
			<div className="flex justify-center items-center h-screen">
				<LoadingSpinner size="large" />
			</div>
		);

	const handleAcceptProject = async (projectId: string) => {
		mutation.mutate({ projectId: projectId, status: "progress" });
	};

	const handleRejectProject = async (projectId: string) => {
		mutation.mutate({ projectId: projectId, status: "rejected" });
	};

	return (
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
									Requested Price:{" "}
									{new Intl.NumberFormat("id-ID", {
										style: "currency",
										currency: "IDR",
									}).format(data.project_price)}
								</span>

								<span className="mt-2">User: {data.user_id}</span>
								<span className="max-w-96 mt-2">
									{new Intl.DateTimeFormat("id-ID", {
										dateStyle: "long",
									}).format(new Date(data.start_date))}{" "}
									-{" "}
									{new Intl.DateTimeFormat("id-ID", {
										dateStyle: "long",
									}).format(new Date(data.completed_date))}
								</span>
							</div>
							<div className="flex flex-row space-x-4 ">
								<button
									onClick={() => handleRejectProject(data.id)}
									className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-100 transition"
								>
									<X className="w-10 h-10" />
								</button>
								<button
									onClick={() => handleAcceptProject(data.id)}
									className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-500 text-green-500 hover:bg-green-100 transition"
								>
									<Check className="w-10 h-10" />
								</button>
							</div>
						</div>
					</div>
				))}
		</div>
	);
}
