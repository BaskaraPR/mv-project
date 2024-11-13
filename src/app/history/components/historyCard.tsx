"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserProjects } from "@/app/services/projects";
import { History, ProjectStatus } from "@/app/types/projects";

type HistoryCardProps = {
	id: string;
};

const statusRank = {
	[ProjectStatus.Pending]: 0,
	[ProjectStatus.Progress]: 1,
	[ProjectStatus.Finished]: 2,
};

const getProgressColor = (status: ProjectStatus) => {
	switch (status) {
		case ProjectStatus.Pending:
			return "bg-yellow-500";
		case ProjectStatus.Progress:
			return "bg-blue-500";
		case ProjectStatus.Finished:
			return "bg-green-500";
		default:
			return "bg-gray-200";
	}
};

const ProjectCard = ({ project }: { project: History }) => {
	const progressColor = getProgressColor(project.project_status);
	const statusLevel = statusRank[project.project_status];

	return (
		<div className="bg-white border rounded-lg shadow-sm p-6 mb-4 max-w-xl">
			<div className="mb-4">
				<h3 className="font-medium text-lg truncate">{project.project_name}</h3>
				<p className="text-sm text-gray-500 truncate">
					{project.project_detail}
				</p>
			</div>

			<div className="relative flex justify-between items-center mt-4">
				<div className="absolute left-0 right-0 h-0.5 bg-gray-200">
					<div
						className={`absolute left-0 h-full ${progressColor} transition-all duration-500`}
						style={{ width: `${(statusLevel / 2) * 100}%` }}
					/>
				</div>

				{["send", "clock", "file-check"].map((icon, index) => (
					<div
						key={icon}
						className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${
							statusLevel >= index
								? "bg-purple-600 text-white"
								: "bg-gray-200 text-gray-400"
						}`}
					>
						{icon === "send" && <SendIcon />}
						{icon === "clock" && <ClockIcon />}
						{icon === "file-check" && <CheckIcon />}
					</div>
				))}
			</div>
		</div>
	);
};

// SVG Icon Components
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

export default function HistoryCard({ id }: HistoryCardProps) {
	const { data, isLoading } = useQuery<History[]>({
		queryKey: ["project_data", id],
		queryFn: () => getUserProjects(id),
	});

	if (isLoading) return <p>Loading...</p>;
	if (!Array.isArray(data)) return <p>No project data found.</p>;

	return (
		<div className="max-w-7xl mx-auto">
			{data.map((project) => (
				<ProjectCard key={project.project_name} project={project} />
			))}
		</div>
	);
}
