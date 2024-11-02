"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { findUserById } from "@/app/services/user";
import { User } from "@/app/types/user";
import { stringifyCompleteDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import EditProfileModal from "./components/updateModal";
import ImageModal from "./components/imgModal";

export default function Profile({ params }: { params: { id: string } }) {
  const { data, isLoading, error, refetch } = useQuery<User>({
    queryKey: ["user_profile", params.id],
    queryFn: () => findUserById(params.id),
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleImgClick = () => {
    setIsImageModalOpen(true);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>User data not found</p>; // Add a fallback in case data is undefined

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="mx-auto max-w-xl bg-white rounded-lg shadow">
        {/* Header */}
        <div className="border-b p-4">
          <div className="flex items-center gap-2">
            <Link href={"/user"}>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            </Link>
            <h1 className="text-xl font-semibold">Profile</h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Profile Picture Section */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Profile picture</p>
              <p className="text-sm">
                Click on the picture to view a larger image
              </p>
            </div>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleImgClick}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${data.profile_picture}?access_token=${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`}
                alt={data.username || " "}
                width={112}
                height={112}
                className="object-cover w-full h-full mb-4"
              />
            </div>
          </div>

          {/* Profile Information */}
          <div className="space-y-4">
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-500">Name</span>
              <span>{data.username}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-500">Date of birth</span>
              <span>{stringifyCompleteDate(data.birth_date || "")}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-500">Gender</span>
              <span>{data.gender}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-500">Region</span>
              <span>{data.region}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-500">Email</span>
              <span>{data.email}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-500">Phone number</span>
              <span>{data.phone_number}</span>
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={handleEditClick}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {isEditing && (
        <EditProfileModal
          user={data}
          userId={params.id}
          onClose={() => setIsEditing(false)}
          onUpdate={refetch}
        />
      )}

      {isImageModalOpen && (
        <ImageModal
          onClose={() => setIsImageModalOpen(false)}
          userId={params.id}
          onUpdate={refetch}
        />
      )}
    </div>
  );
}
