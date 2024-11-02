import CompanyForm from "./components/CompanyForm";
import Navbar from "@/app/(main)/components/navbar";
export default function RegisterCompanyPage() {
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
