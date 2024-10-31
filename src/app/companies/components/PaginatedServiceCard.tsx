import { useState } from "react";
import ServiceCard from "./ServiceCard"; // Adjust path if needed
import { Company } from "@/app/types/companies";

const PaginatedServiceCards = ({ companies }: { companies: Company[] }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 3;

	// Calculate the number of pages
	const totalPages = Math.ceil(companies.length / itemsPerPage);

	// Get the items for the current page
	const currentItems = companies.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const handleNextPage = () => {
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	};

	const handlePreviousPage = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 1));
	};

	return (
		<div className="flex flex-col items-center">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{currentItems.map((company) => (
					<ServiceCard key={company.id} CompanyData={company} />
				))}
			</div>

			{/* Pagination controls */}
			<div className="flex justify-center items-center mt-4 gap-2">
				<button
					onClick={handlePreviousPage}
					disabled={currentPage === 1}
					className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
				>
					Previous
				</button>
				<span className="text-lg font-semibold">
					Page {currentPage} of {totalPages}
				</span>
				<button
					onClick={handleNextPage}
					disabled={currentPage === totalPages}
					className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default PaginatedServiceCards;
