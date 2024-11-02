"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { createCompany } from "@/app/services/companies";
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import NoImg from "@/../public/noimage.jpg";
import Image from "next/image";
export default function CompanyForm() {
	const { data } = useSession();
	const [name, setName] = useState("");
	const [website, setWebsite] = useState("");
	const [description, setDescription] = useState("");
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
		mutationFn: createCompany,
		mutationKey: ["register_company_field"],
		onSuccess: (data) => {
			console.log("company registered successfully:", data);
			redirect("/company");
		},
		onError: (error) => {
			console.error("Error registering company:", error);
		},
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("company_name", name);
		formData.append("company_website", website);
		formData.append("description", description);
		formData.append("contact_person", data?.user?.id ?? "");
		if (file) formData.append("image", file);
		mutation.mutate(formData);
	};

	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			<span className="font-bold text-2xl my-4">Register Your Company</span>
			<div className="flex flex-row flex-wrap gap-8">
				<div>
					<div className="w-96 h-96 rounded-lg overflow-hidden">
						{imagePreview ? (
							<Image
								src={imagePreview}
								alt="preview"
								width={400}
								height={400}
								className="w-full h-full object-cover"
							/>
						) : (
							<Image
								src={NoImg}
								alt="preview"
								width={400}
								height={400}
								className="w-full h-full object-cover"
							/>
						)}
					</div>
					<div className="w-full flex justify-center pt-4">
						<label
							htmlFor="gambar"
							className="cursor-pointer w-full py-2 rounded-md bg-purple-500 text-white text-center"
						>
							Browse
						</label>
					</div>
					<input
						type="file"
						id="gambar"
						accept="image/*"
						onChange={handleImageChange}
						className="hidden"
					/>
				</div>
				<div className="min-w-96 flex flex-col justify-between">
					<div className="space-y-4">
						<div>
							<label
								htmlFor="companyname"
								className="block text-sm font-medium text-gray-700"
							>
								Company Name
							</label>
							<input
								type="text"
								id="companyname"
								name="companyname"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="website"
								className="block text-sm font-medium text-gray-700"
							>
								Company Website
							</label>
							<input
								type="text"
								id="website"
								name="website"
								value={website}
								onChange={(e) => setWebsite(e.target.value)}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="description"
								className="block text-sm font-medium text-gray-700"
							>
								Description
							</label>
							<input
								type="text"
								id="description"
								name="description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
								required
							/>
						</div>
					</div>
					<button
						type="submit"
						className="cursor-pointer w-full py-2 rounded-md bg-purple-500 text-white text-center mt-4"
					>
						Submit
					</button>
				</div>
			</div>
		</form>
	);
}
