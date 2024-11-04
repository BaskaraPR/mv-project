import { Search } from "lucide-react";

interface SearchInputProps {
	searchTerm: string;
	handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSearch: () => void;
}

export default function SearchInput({
	searchTerm,
	handleSearchChange,
	handleSearch,
}: SearchInputProps) {
	return (
		<>
			<input
				type="text"
				value={searchTerm}
				onChange={handleSearchChange}
				placeholder="Search companies"
				className="w-full py-3 px-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
			/>
			<button
				onClick={handleSearch}
				className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white p-2 rounded-full"
			>
				<Search className="w-5 h-5" />
			</button>
		</>
	);
}
