"use client";
import CompanyForm from "@/app/company/components/CompanyForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { updateCompany, findCompaniesById } from "@/app/services/companies";
export default function EditCompanyPage({ idCompany }: { idCompany: string }) {
	const router = useRouter();
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: updateCompany,
		mutationKey: ["edit_company_field"],
		onSuccess: (data) => {
			console.log("company updated successfully:", data);
			router.push("/company");
			queryClient.invalidateQueries({ queryKey: ["company_data", idCompany] });
		},
		onError: (error) => {
			console.error("Error updating company:", error);
		},
	});

	const { data, isLoading } = useQuery({
		queryKey: ["company_data", idCompany],
		queryFn: () => findCompaniesById(idCompany!),
	});

	if (isLoading) {
		return (
			<div className="bg-white p-6 rounded-[30px] shadow-sm w-[341px] h-[393px] flex items-center justify-center">
				Loading...
			</div>
		);
	}

	const handleRegisterCompany = async (formData: FormData) => {
		mutation.mutate({ formData, idCompany });
	};

	return (
		<div>
			<CompanyForm submitAction={handleRegisterCompany} updateData={data} />
		</div>
	);
}
