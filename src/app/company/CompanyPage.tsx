"use client";
import CompanyInfoSection from "./components/CompanyInfoSection";
import CompanyProjectSection from "./components/CompanyProjectSection";
import CompanyProgressProjectSection from "./components/CompanyProgressProjectSection";
import ProjectFilterLayout from "./components/ProjectFilterLayout";
import CompanyHistorySection from "./components/CompanyHistorySection";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
export default function CompanyPage({
	idUser,
	idCompany,
}: {
	idUser: string;
	idCompany: string;
}) {
	const activeTab = useSelector(
		(state: RootState) => state.activeProjectOption.mode
	);

	return (
		<div>
			<div className="mx-auto max-w-[1169px] px-5 space-y-10">
				<CompanyInfoSection idUser={idUser} />
				<ProjectFilterLayout />
				{activeTab === "Pending Approval" ? (
					<CompanyProjectSection idCompany={idCompany} />
				) : activeTab === "Progress" ? (
					<CompanyProgressProjectSection idCompany={idCompany} />
				) : (
					<CompanyHistorySection idCompany={idCompany} />
				)}
			</div>
		</div>
	);
}
