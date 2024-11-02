import CompanyForm from "./components/CompanyForm";
import Navbar from "@/app/(main)/components/navbar";
import { nextGetServerSession } from "@/lib/next-auth";
import { getUserCompany } from "@/app/services/user";
import { redirect } from "next/navigation";
export default async function RegisterCompanyPage() {
	const session = await nextGetServerSession();
	if (session && session.user) {
		const userCompany = await getUserCompany(session?.user?.id);
		if (userCompany) {
			redirect("/company");
		}
	}
	return (
		<>
			<Navbar />
			<div className="mx-auto max-w-[1169px] px-5 ">
				<div className="flex items-center min-h-screen">
					<div className="w-full flex shadow-2xl rounded-xl p-8 justify-center">
						<CompanyForm />
					</div>
				</div>
			</div>
		</>
	);
}
