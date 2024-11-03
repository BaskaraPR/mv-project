import EditCompanyPage from "./components/EditCompanyPage";
import Navbar from "@/app/(main)/components/navbar";
import { nextGetServerSession } from "@/lib/next-auth";
import { getUserCompany } from "@/app/services/user";
import { redirect } from "next/navigation";
export default async function page({ params }: { params: { id: string } }) {
	const session = await nextGetServerSession();
	if (session && session.user) {
		const userCompany = await getUserCompany(session?.user?.id);
		if (userCompany.id !== params.id) {
			redirect("/company");
		}
	}

	return (
		<div>
			<Navbar />
			<div className="mx-auto max-w-[1169px] px-5 ">
				<div className="flex items-center min-h-screen">
					<div className="w-full flex shadow-2xl rounded-xl p-8 justify-center">
						<EditCompanyPage idCompany={params.id} />
					</div>
				</div>
			</div>
		</div>
	);
}
