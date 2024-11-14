"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserProjects } from "@/app/services/projects";
import { History, ProjectStatus } from "@/app/types/projects";
import LoadingSpinner from "@/components/LoadingSpinner";
import Image from "next/image";
type HistoryCardProps = {
	id: string;
};

const SendIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		className="w-5 h-5"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
		/>
	</svg>
);

const ClockIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		className="w-5 h-5"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
);

const CheckIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		className="w-5 h-5"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
		/>
	</svg>
);

const ProjectCard = ({ project }: { project: History }) => {
	return (
		<div className="bg-white border rounded-lg shadow-2xl p-6 mb-4 max-w-xl min-w-full flex flex-row justify-between">
			<div className="">
				<div className="mb-4 space-y-2">
					<h3 className="font-medium text-lg truncate">
						{project.project_name}
					</h3>
					<p className="text-sm text-gray-500 truncate">
						{project.project_detail}
					</p>
					<h3 className="font-medium text-lg truncate">
						{new Intl.NumberFormat("id-ID", {
							style: "currency",
							currency: "IDR",
						}).format(project.project_price)}
					</h3>
					<span>
						{new Intl.DateTimeFormat("id-ID", {
							dateStyle: "long",
						}).format(new Date(project.start_date))}{" "}
						-{" "}
						{new Intl.DateTimeFormat("id-ID", {
							dateStyle: "long",
						}).format(new Date(project.completed_date))}
					</span>
				</div>

				<div className="relative flex justify-between items-center mt-4 max-w-[500px] flex-wrap">
					<div className="min-w-[500px]">
						<div className="relative flex items-center justify-between">
							<div className="absolute left-0 right-0 h-1 bg-gray-200">
								<div
									className="absolute left-0 h-full bg-purple-500 transition-all duration-500"
									style={{
										width:
											project.project_status === ProjectStatus.Pending
												? "0%"
												: project.project_status === ProjectStatus.Progress
												? "50%"
												: "100%",
									}}
								/>
							</div>
							<div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white z-10">
								<SendIcon />
							</div>
							<div
								className={`w-10 h-10 rounded-full ${
									project.project_status !== ProjectStatus.Pending
										? "bg-purple-500 text-white"
										: "bg-gray-200 text-gray-400"
								} flex items-center justify-center z-10`}
							>
								<ClockIcon />
							</div>
							<div
								className={`w-10 h-10 rounded-full ${
									project.project_status === ProjectStatus.Finished
										? "bg-purple-500 text-white"
										: "bg-gray-200 text-gray-400"
								} flex items-center justify-center z-10`}
							>
								<CheckIcon />
							</div>
						</div>
					</div>
				</div>
				<div className="flex space-x-4 mt-4">
					<div
						className={`${
							project.project_status === "cancelled"
								? "bg-red-500"
								: "bg-green-600"
						} text-center text-white px-6 py-2 shadow-sm rounded-full`}
					>
						Project {project.project_status}
					</div>
				</div>
			</div>
			<div className="px-4 flex flex-row gap-4">
				<div className="flex flex-col">
					<span className="font-light text-right">{project.company_id.id}</span>
					<h3 className="text-lg font-bold text-right">
						{project.company_id.company_name}
					</h3>
					<span className="font-light text-right">
						{project.company_id.company_website}
					</span>
				</div>
				<div className="h-40 w-40 ">
					{project.company_id.company_image ? (
						<Image
							src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${project.company_id.company_image}?access_token=${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`}
							alt={project.company_id.company_name}
							width={400}
							height={400}
							className="rounded-lg object-cover w-full h-full"
						/>
					) : (
						<div className="bg-gray-200 w-24 h-24 rounded-lg animate-pulse" />
					)}
				</div>
			</div>
		</div>
	);
};

export default function HistoryCard({ id }: HistoryCardProps) {
	const { data, isLoading } = useQuery<History[]>({
		queryKey: ["project_data_user", id],
		queryFn: () => getUserProjects(id),
	});

	if (isLoading) return <LoadingSpinner />;
	if (!Array.isArray(data)) return <p>No project data found.</p>;

	return (
		<div className="max-w-7xl mx-auto">
			{data.map((project) => (
				<ProjectCard key={project.project_name} project={project} />
			))}
		</div>
	);
}
