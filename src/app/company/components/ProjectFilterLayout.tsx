"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { setSelectedproject } from "@/redux/slices/projects";

export default function ProjectFilterLayout() {
	const activeTab = useSelector(
		(state: RootState) => state.activeProjectOption.mode
	);
	const dispatch: AppDispatch = useDispatch();

	const handleChangetab = (
		state: "Pending Approval" | "Progress" | "History"
	) => {
		dispatch(setSelectedproject(state));
	};

	return (
		<div className="flex gap-2 w-fit rounded-lg bg-gray-50 pl-8">
			{["Pending Approval", "Progress", "History"].map((tab) => (
				<button
					key={tab}
					onClick={() =>
						handleChangetab(tab as "Pending Approval" | "Progress" | "History")
					}
					className="relative px-4 py-2 text-sm capitalize"
				>
					{activeTab === tab && (
						<motion.div
							layoutId="active-tab"
							className="absolute inset-0 bg-purple-500 rounded-md"
							transition={{ type: "spring", duration: 0.6 }}
						/>
					)}
					<span
						className={`relative z-10 ${
							activeTab === tab ? "text-white" : "text-black"
						}`}
					>
						{tab}
					</span>
				</button>
			))}
		</div>
	);
}
