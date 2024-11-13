"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserProjects } from "@/app/services/projects";
import { getCompanyTags } from "@/app/services/companies";
import { History, ProjectStatus } from "@/app/types/projects";
import { Tags } from "@/app/types/tags";
import Image from "next/image";

type HistoryCardProps = {
  id: string;
};

const statusRank = {
  [ProjectStatus.Pending]: 0,
  [ProjectStatus.Progress]: 1,
  [ProjectStatus.Finished]: 2,
};

const ProjectCard = ({ project }: { project: History }) => {
  const { data: tags, isLoading: tagsLoading } = useQuery({
    queryKey: ["company_tags", project.company_id],
    queryFn: () => getCompanyTags(project.company_id),
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      {/* Top Section */}
      <div className="flex gap-6 mb-12">
        {/* Left - Company Logo */}
        <div className="w-16 h-16 flex-shrink-0">
          {project.company_image ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${project.company_image}?access_token=${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`}
              alt={project.company_name}
              width={64}
              height={64}
              className="rounded-lg object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg" />
          )}
        </div>

        {/* Right - Content */}
        <div className="flex-1">
          <h3 className="font-medium text-lg mb-4">{project.project_name}</h3>
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              {!tagsLoading && tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: Tags) => (
                    <span
                      key={tag.id}
                      className="text-gray-500 text-sm"
                    >
                      {tag.tags}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="text-gray-600 text-sm max-w-[50%]">{project.project_detail}</div>
          </div>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="w-full max-w-[300px] mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="absolute left-0 right-0 h-1 bg-gray-200">
            <div 
              className="absolute left-0 h-full bg-purple-500 transition-all duration-500"
              style={{ 
                width: project.project_status === ProjectStatus.Pending ? '0%' : 
                       project.project_status === ProjectStatus.Progress ? '50%' : '100%' 
              }}
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white z-10">
            <SendIcon />
          </div>
          <div className={`w-10 h-10 rounded-full ${project.project_status !== ProjectStatus.Pending ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-400'} flex items-center justify-center z-10`}>
            <ClockIcon />
          </div>
          <div className={`w-10 h-10 rounded-full ${project.project_status === ProjectStatus.Finished ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-400'} flex items-center justify-center z-10`}>
            <CheckIcon />
          </div>
        </div>
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

  if (isLoading) return (
    <div className="max-w-7xl mx-auto space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm p-6 mb-6 animate-pulse">
          <div className="flex gap-6 mb-12">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
            <div className="flex-1">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4" />
              <div className="flex justify-between">
                <div className="flex-1 pr-4">
                  <div className="flex gap-2">
                    <div className="h-4 bg-gray-200 rounded w-16" />
                    <div className="h-4 bg-gray-200 rounded w-16" />
                    <div className="h-4 bg-gray-200 rounded w-16" />
                  </div>
                </div>
                <div className="h-16 bg-gray-200 rounded w-1/3" />
              </div>
            </div>
          </div>
          <div className="w-[300px] mx-auto flex justify-between">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-10 h-10 bg-gray-200 rounded-full" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  if (!Array.isArray(data)) return <p>No project data found.</p>;

  return (
    <div className="max-w-7xl mx-auto">
      {data.map((project) => (
        <ProjectCard key={project.project_name} project={project} />
      ))}
    </div>
  );
}