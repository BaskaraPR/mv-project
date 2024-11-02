"use server";
import axios from "axios";
import { axiosConfig } from "../helper/token";
import { uploadImage } from "./imageUpload";
export const getCompanies = async (dataPerPage: number, page: number) => {
	try {
		const limit = dataPerPage;
		const offset = (page - 1) * dataPerPage;
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/corporations`,
			{
				...axiosConfig,
				params: {
					limit,
					offset,
				},
			}
		);

		return response.data.data;
	} catch (error) {
		throw new Error(`Error fetching data from Directus: ${error}`);
	}
};

export const findCompaniesById = async (id: string) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/corporations?filter[id][_eq]=${id}`,
			axiosConfig
		);
		return response.data.data[0];
	} catch (error) {
		throw new Error(`Error fetching data from Directus: ${error}`);
	}
};
export const getCompanyTags = async (companyId: string) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/company_tags?filter[_and][0][company_id][_eq]=${companyId}`,
			axiosConfig
		);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error fetching data from Directus: ${error}`);
	}
};

export const createCompany = async (formData: FormData) => {
	try {
		const postURL = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/corporations`;
		const imageId = await uploadImage(formData.get("image"));
		if (imageId) {
			const response = await axios.post(
				postURL,
				{
					company_name: formData.get("company_name"),
					company_website: formData.get("company_website"),
					contact_person: formData.get("contact_person"),
					description: formData.get("description"),
					company_image: imageId.id,
				},
				axiosConfig
			);

			return response.data.data;
		}
	} catch (error) {
		return {
			success: false,
			message: `error creating company ${error}`,
		};
	}
};
