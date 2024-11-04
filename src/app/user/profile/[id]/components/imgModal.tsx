import { updateUserPicture } from "@/app/services/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import NoImg from "@/../public/noimage.jpg";
import { X } from "lucide-react";
import { useState } from "react";

interface EditPictureModalProps {
	userId: string;
	onClose: () => void;
	onUpdate: () => void;
	updatePicture?: string;
}

export default function ImageModal({
	userId,
	onClose,
	onUpdate,
	updatePicture,
}: EditPictureModalProps) {
	const queryClient = useQueryClient();
	const [file, setFile] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setFile(file);
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		} else {
			setFile(null);
			setImagePreview(null);
		}
	};

	const mutation = useMutation({
		mutationFn: updateUserPicture,
		onSuccess: () => {
			onUpdate();
			onClose();
		},
		onError: (error) => {
			console.error("Error updating image:", error);
		},
	});

	const updateMutation = useMutation({
		mutationFn: updateUserPicture,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["user_profile", userId],
			});
			onUpdate();
			onClose();
		},
		onError: (error) => {
			console.error("Error updating image:", error);
		},
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData();
		if (!file) return;
		formData.append("image", file);
		if (updatePicture) {
			updateMutation.mutate({
				id: userId,
				formData,
				oldPictureId: updatePicture,
			});
		} else mutation.mutate({ id: userId, formData });
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
			<form
				className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
				onSubmit={handleSubmit}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
					aria-label="Close modal"
				>
					<X className="w-6 h-6" />
				</button>

				{/* Image Preview */}
				<div className="flex flex-col items-center gap-4">
					<h2 className="text-lg font-semibold">Update Profile Picture</h2>
					<div className="w-48 h-48 rounded-full overflow-hidden bg-gray-100">
						{updatePicture && imagePreview === null ? (
							<Image
								src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${updatePicture}?access_token=${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`}
								alt="Image preview"
								width={400}
								height={400}
								className="object-cover w-full h-full"
							/>
						) : (
							<Image
								src={imagePreview || NoImg}
								alt="Image preview"
								width={400}
								height={400}
								className="object-cover w-full h-full"
							/>
						)}
					</div>

					{/* File Input */}
					<label
						htmlFor="gambar"
						className="cursor-pointer bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md mt-4"
					>
						{file ? "Change Image" : "Select Image"}
					</label>
					<input
						type="file"
						id="gambar"
						accept="image/*"
						onChange={handleImageChange}
						className="hidden"
					/>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mt-4"
					>
						Submit
					</button>

					{/* Error Message */}
					{mutation.isError && (
						<p className="text-sm text-red-500 mt-2">
							Error updating image. Please try again.
						</p>
					)}

					{/* Success Message */}
					{mutation.isSuccess && (
						<p className="text-sm text-green-500 mt-2">
							Profile picture updated successfully!
						</p>
					)}
				</div>
			</form>
		</div>
	);
}
