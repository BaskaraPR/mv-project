"use client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import CompanyForm from "../../components/CompanyForm";
import { createCompany } from "@/app/services/companies";

export default function RegisterCompanyPage() {
	const router = useRouter();
	const mutation = useMutation({
		mutationFn: createCompany,
		mutationKey: ["register_company_field"],
		onSuccess: (data) => {
			console.log("company registered successfully:", data);
			router.push("/company");
		},
		onError: (error) => {
			console.error("Error registering company:", error);
		},
	});

	const handleRegisterCompany = async (formData: FormData) => {
		mutation.mutate(formData);
	};

	return (
		<div>
			<CompanyForm submitAction={handleRegisterCompany} />
		</div>
	);
}
