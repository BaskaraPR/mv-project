"use client";
import SearchInput from "@/app/(main)/components/SearchInput";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
	const [searchTerm, setSearchTerm] = useState("");
	const router = useRouter();

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleSearch = () => {
		const params: URLSearchParams = new URLSearchParams();
		if (searchTerm) {
			params.set("keyword", searchTerm);
		}

		router.push(`?${params.toString()}`);
	};

	return (
		<header className="bg-purple-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<div>
						<h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
							What Services are You Looking for?
						</h1>
						<p className="text-xl text-gray-600 mb-8">
							Find a company, Fast. TaskNest helps you find elite companies at a
							moments notice
						</p>
						<div className="flex">
							<div className="relative">
								<SearchInput
									searchTerm={searchTerm}
									handleSearchChange={handleSearchChange}
									handleSearch={handleSearch}
								/>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<Image
							src="/image5.svg"
							alt="Slave"
							width={400}
							height={300}
							className="w-full h-auto"
						/>
					</div>
				</div>
			</div>
		</header>
	);
}
