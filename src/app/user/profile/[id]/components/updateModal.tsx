import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@/app/services/user";

type UpdateUserData = {
  email: string;
  username: string;
  gender: string;
  region: string;
  phone_number: string;
  birth_date: Date;
};

interface EditProfileModalProps {
  user: UpdateUserData;
  userId: string;
  onClose: () => void;
  onUpdate: () => void;
}

export default function EditProfileModal({
  user,
  userId,
  onClose,
  onUpdate,
}: EditProfileModalProps) {
  const [formData, setFormData] = useState<UpdateUserData>({
    ...user,
    birth_date: user.birth_date ? new Date(user.birth_date) : new Date(),
  });

  const mutation = useMutation({
    mutationFn: updateUser,
    mutationKey: ["updateUser"],
    onSuccess: (data) => {
      console.log("User updated successfully:", data);
      onUpdate();
      onClose();
    },
    onError: (error) => {
      console.error("Error updating user:", error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "birth_date" ? new Date(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      username: formData.username,
      gender: formData.gender,
      region: formData.region,
      phone_number: formData.phone_number,
      birth_date: formData.birth_date,
    };

    mutation.mutate({
      id: userId,
      data: userData,
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full border px-3 py-2 rounded"
          />

          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="mr-2"
              />
              Female
            </label>
          </div>
          <label className="block text-sm font-medium text-gray-700">
            Region
          </label>
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
            placeholder="Region"
            className="w-full border px-3 py-2 rounded"
          />
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border px-3 py-2 rounded"
          />
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            name="birth_date"
            value={
              formData.birth_date instanceof Date
                ? formData.birth_date.toISOString().split("T")[0]
                : ""
            }
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
