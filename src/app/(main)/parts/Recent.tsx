"use client";

import { Button } from "../components/button";
import Image from "next/image";
import logo from "@/../public/logo/image.png";

interface WorkCardProps {
	title: string;
	description: string;
	highestBid: number;
}

const WorkCard: React.FC<WorkCardProps> = ({
	title,
	description,
	highestBid,
}) => (
	<div className="max-w-sm p-6 bg-white rounded-lg shadow-lg border border-gray-200">
		<div className="flex justify-center mb-4">
			<Image
				src={logo}
				alt="App Icon"
				height={20}
				width={20}
				className="h-12 w-12"
			/>
		</div>
		<h3 className="text-center text-xl font-semibold mb-2">{title}</h3>
		<p className="text-center text-gray-600 mb-6">{description}</p>
		<div className="flex justify-between items-center">
			<span className="text-gray-600 text-sm">Highest bid</span>
			<span className="text-black font-bold text-lg">${highestBid}</span>
		</div>
		<div className="mt-2 text-right">
			<a href="#" className="text-purple-500 font-semibold hover:underline">
				Request now
			</a>
		</div>
	</div>
);

export default function RecentWorks() {
	const works = [
		{
			title: "Logo Design",
			description:
				"With our ability to produce websites, mobile apps, and iOS apps, we will help solve your problem with good and useful products.",
			highestBid: 500,
		},
		{
			title: "Graphic Design",
			description:
				"With our ability to produce websites, mobile apps, and iOS apps, we will help solve your problem with good and useful products.",
			highestBid: 500,
		},
		{
			title: "Mobile App",
			description:
				"With our ability to produce websites, mobile apps, and iOS apps, we will help solve your problem with good and useful products.",
			highestBid: 300,
		},
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<h3 className="text-left text-gray-500 mb-2">The Companies Work!</h3>
			<h2 className="text-left text-3xl font-semibold mb-6">
				Recently Posted <span className="text-purple-500">Works</span>
			</h2>
			<div className="flex flex-wrap gap-6 mb-8 justify-center">
				{works.map((work, index) => (
					<div key={index} className="w-full max-w-80">
						<WorkCard {...work} />
					</div>
				))}
			</div>

			<div className="text-center">
				<Button variant="primary">Find More</Button>
			</div>
		</div>
	);
}
