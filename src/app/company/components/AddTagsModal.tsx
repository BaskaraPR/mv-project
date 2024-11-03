"use client";
import { X } from "lucide-react";
import { useState } from "react";

export default function AddTagsModal({
	setIsModalOpen,
	submitTag,
}: {
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	submitTag: (tag: string) => Promise<void>;
}) {
	const [tag, setTag] = useState("");

	const toggleModal = () => {
		setTag("");
		setIsModalOpen(false);
	};

	const handleOverlayClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (e.target === e.currentTarget) {
			toggleModal();
		}
	};

	const handleSubmitUpdate = async (e: React.FormEvent) => {
		e.preventDefault();
		toggleModal();
		await submitTag(tag);
	};

	return (
		<form onSubmit={handleSubmitUpdate}>
			<div
				className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
				onClick={handleOverlayClick}
			>
				<div className="bg-white rounded-lg shadow-xl max-w-lg w-full relative overflow-hidden transform transition-all duration-300 ease-in-out">
					<button
						onClick={toggleModal}
						className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
					>
						<X className="w-6 h-6" />
					</button>

					<div className="p-6">
						<div className="space-y-4">
							<div className="space-y-1">
								<label
									htmlFor="nama-user"
									className="block text-sm font-medium text-secondary"
								>
									New Tag
								</label>
								<input
									type="text"
									id="nama-user"
									value={tag}
									placeholder="Tag Name"
									onChange={(e) => setTag(e.target.value)}
									required
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
								/>
							</div>
						</div>

						<div className="mt-6 flex space-x-4">
							<button
								type="submit"
								className="w-full text-white bg-purple-500 font-bold py-2 px-4 rounded-lg"
							>
								Add Tag
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}
