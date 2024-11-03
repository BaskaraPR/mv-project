import { nextGetServerSession } from "@/lib/next-auth";
import { getUserCompany } from "../services/user";
import { redirect } from "next/navigation";
import Navbar from "../(main)/components/navbar";
import CompanyInfoSection from "./components/CompanyInfoSection";

export default async function page() {
	const session = await nextGetServerSession();
	if (session && session.user) {
		const userCompany = await getUserCompany(session?.user?.id);
		if (!userCompany) {
			redirect("/company/register");
		}
	}

	return (
		<div>
			<Navbar />
			<div className="mx-auto max-w-[1169px] px-5">
				<CompanyInfoSection idUser={session!.user!.id} />
			</div>
		</div>
	);
}
