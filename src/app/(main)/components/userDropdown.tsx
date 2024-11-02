"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function UserDropdown({ user }) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);
	useEffect(() => {
		function handleClickOutside(event: any) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return (
		<div className="relative" ref={dropdownRef}>
			<button
				className={`flex items-center space-x-1 ${
					isOpen ? "text-purple-500" : "text-gray-600 hover:text-gray-900"
				} transition-colors duration-150`}
				onClick={() => setIsOpen(!isOpen)}
				aria-haspopup="true"
				aria-expanded={isOpen}
			>
				<span>{user?.name}</span>
				<ChevronDown
					className={`h-4 w-4 transition-transform duration-150 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>
			{isOpen && (
				<div className="absolute right-0 mt-8 w-48 p-4 rounded-lg overflow-hidden shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div
						className="py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
					>
						<Link
							href={`/user/profile/${user.id}`}
							className="block px-3 py-2 text-sm text-black hover:bg-transparent hover:text-purple-500 transition duration-150 ease-in-out"
							role="menuitem"
						>
							Profile
						</Link>
						<Link
							href="/company"
							className="block px-3 py-2 text-sm text-black hover:bg-transparent hover:text-purple-500 transition duration-150 ease-in-out"
							role="menuitem"
						>
							Your Company
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}