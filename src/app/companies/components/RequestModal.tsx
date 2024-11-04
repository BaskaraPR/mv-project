"use client";

import { Send, Trash2, X } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createProject } from "@/app/services/history";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ModalProp {
  onClose: () => void;
  cp: string;
  userPP: string;
}

type CreateProject = {
  company_id: string;
  user_id: string;
  project_name: string;
  project_detail: string;
  start_date: Date;
  completed_date: Date;
  project_price: number;
};

export default function RequestModal({ onClose, cp, userPP }: ModalProp) {
  const [projectName, setProjectName] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [completedDate, setCompletedDate] = useState("");
  const [projectPrice, setProjectPrice] = useState("");
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: createProject,
    mutationKey: ["createProject"],
    onSuccess: (data) => {
      console.log("Request Sent:", data);
      toast.success("Your project has been created successfully.");
      router.push("/history");
    },
    onError: (error) => {
      console.error("Error creating project:", error);
      toast.error("An error occurred. Please try again.");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestData: CreateProject = {
      company_id: cp,
      user_id: userPP,
      project_name: projectName,
      project_detail: projectDetail,
      project_price: parseFloat(projectPrice),
      start_date: new Date(startDate),
      completed_date: new Date(completedDate),
    };
    mutation.mutate(requestData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-w-2xl w-full mx-4 bg-white rounded-3xl shadow-lg p-8 transform transition-all duration-300 ease-out">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className="ml-auto p-2 text-violet-500 hover:bg-violet-50 rounded-full"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Project Name</label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full bg-gray-50 rounded-lg px-3 py-2 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Project Detail</label>
              <textarea
                value={projectDetail}
                onChange={(e) => setProjectDetail(e.target.value)}
                className="w-full bg-gray-50 rounded-lg px-3 py-2 outline-none resize-none"
                rows={4}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-gray-50 rounded-lg px-3 py-2 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Completed Date</label>
              <input
                type="date"
                value={completedDate}
                onChange={(e) => setCompletedDate(e.target.value)}
                className="w-full bg-gray-50 rounded-lg px-3 py-2 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Project Price</label>
              <input
                type="number"
                value={projectPrice}
                onChange={(e) => setProjectPrice(e.target.value)}
                className="w-full bg-gray-50 rounded-lg px-3 py-2 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center pt-4">
            <button
              type="button"
              onClick={() => {
                setProjectName("");
                setProjectDetail("");
                setStartDate("");
                setCompletedDate("");
                setProjectPrice("");
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-full"
              aria-label="Clear fields"
            >
              <Trash2 className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className="ml-auto px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
            >
              Submit Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
