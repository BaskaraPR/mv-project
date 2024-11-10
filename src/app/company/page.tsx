import { nextGetServerSession } from "@/lib/next-auth";
import { getUserCompany } from "../services/user";
import { redirect } from "next/navigation";
import Navbar from "../(main)/components/navbar";
import CompanyInfoSection from "./components/CompanyInfoSection";
import CompanyProjectSection from "./components/CompanyProjectSection";
import Footer from "../(main)/components/footer";

export default async function page() {
	const session = await nextGetServerSession();
	let userCompany = [];
	if (session && session.user) {
		userCompany = await getUserCompany(session?.user?.id);
		if (!userCompany) {
			redirect("/company/register");
		}
	}

	return (
		<div>
			<Navbar />
			<div className="mx-auto max-w-[1169px] px-5 space-y-10">
				<CompanyInfoSection idUser={session!.user!.id} />
				<CompanyProjectSection idCompany={userCompany.id} />
			</div>
		</div>
	);
}
