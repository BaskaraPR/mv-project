import { nextGetServerSession } from "@/lib/next-auth";
import { getUserCompany } from "../services/user";
import { redirect } from "next/navigation";
import CompanyPage from "./CompanyPage";
import Navbar from "../(main)/components/navbar";
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
		<>
			<Navbar />
			<CompanyPage idUser={session!.user!.id} idCompany={userCompany.id} />
		</>
	);
}
