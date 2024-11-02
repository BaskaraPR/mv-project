import { nextGetServerSession } from "@/lib/next-auth";
import { getUserCompany } from "../services/user";
import { redirect } from "next/navigation";

export default async function page() {
	const session = await nextGetServerSession();
	if (session && session.user) {
		const userCompany = await getUserCompany(session?.user?.id);
		if (!userCompany) {
			redirect("/company/register");
		}
	}

	return <div></div>;
}
