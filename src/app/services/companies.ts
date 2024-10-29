"use server";
import axios from "axios";
import { axiosConfig } from "../helper/token";
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
