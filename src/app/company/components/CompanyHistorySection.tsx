"use client";
import { useQuery } from "@tanstack/react-query";
import { getCompanyByMultipleStatus } from "@/app/services/projects";
import LoadingSpinner from "@/components/LoadingSpinner";
export default function CompanyHistorySection({
	idCompany,
}: {
	idCompany: string;
}) {
	const { data, isLoading } = useQuery({
		queryKey: ["company", idCompany, "projects_history"],
		queryFn: () =>
			getCompanyByMultipleStatus({
				companyId: idCompany,
				status: ["cancelled", "finished"],
			}),
	});

	if (isLoading)
		return (
			<div className="flex justify-center items-center h-screen">
				<LoadingSpinner size="large" />
			</div>
		);

	return (
		<div>
			<div className="w-full flex justify-center flex-col space-y-4 max-h-[800px] overflow-y-auto pb-4">
				{data &&
					data.map((data) => (
						<div key={data.id} className="shadow-xl">
							<div className="flex justify-between bg-white w-full h-full rounded-xl  p-8">
								<div className="flex flex-col">
									<h2 className="max-w-96 break-words text-2xl font-bold text-purple-500">
										{data.project_name}
									</h2>
									<span className="max-w-96 break-words">
										{data.project_detail}
									</span>
									<span className="mt-2">
										{new Intl.NumberFormat("id-ID", {
											style: "currency",
											currency: "IDR",
										}).format(data.project_price)}
									</span>
									<span className="mt-2">User: {data.user_id}</span>
								</div>
								<div className="flex min-h-full flex-col justify-between">
									<div className="flex">
										<span className="max-w-96">
											{new Intl.DateTimeFormat("id-ID", {
												dateStyle: "long",
											}).format(new Date(data.start_date))}{" "}
											-{" "}
											{new Intl.DateTimeFormat("id-ID", {
												dateStyle: "long",
											}).format(new Date(data.completed_date))}
										</span>
									</div>
									<div className="flex justify-center space-x-4">
										<div
											className={`${
												data.project_status === "cancelled"
													? "bg-red-500"
													: "bg-green-600"
											} w-full text-center text-white px-6 py-2 shadow-sm rounded-full`}
										>
											{data.project_status}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
