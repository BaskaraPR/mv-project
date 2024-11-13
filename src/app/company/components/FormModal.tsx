"use client";
import { X } from "lucide-react";
import { useState } from "react";

export default function FormModal({
	setIsModalOpen,
	submitAction,
	label,
	button,
}: {
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	submitAction: (tag: string) => Promise<void>;
	label: string;
	button: string;
}) {
	const [value, setValue] = useState("");

	const toggleModal = () => {
		setValue("");
		setIsModalOpen(false);
	};

	const handleOverlayClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (e.target === e.currentTarget) {
			toggleModal();
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		toggleModal();
		await submitAction(value);
	};

	return (
		<form onSubmit={handleSubmit} className="absolute">
			<div
				className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 "
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
									{label}
								</label>
								<input
									type="text"
									id="nama-user"
									value={value}
									onChange={(e) => setValue(e.target.value)}
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
								{button}
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}
