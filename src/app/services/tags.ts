"use server";
import axios from "axios";
import { axiosConfig } from "../helper/token";

export const getTags = async () => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/company_tags`,
			axiosConfig
		);
		return response.data.data || [];
	} catch (error) {
		throw new Error(`Error fetching data from Directus: ${error}`);
	}
};

export const createTags = async ({
	tag,
	idCompany,
}: {
	tag: string;
	idCompany: string;
}) => {
	try {
		const createdTag = await axios.post(
			`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/company_tags`,
			{ company_id: idCompany, tags: tag },
			axiosConfig
		);
		return createdTag.data;
	} catch (error) {
		return {
			success: false,
			message: `error updating company: ${error}`,
		};
	}
};

export const deleteTag = async (idTag: string) => {
	try {
		const deletedTag = await axios.delete(
			`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/company_tags/${idTag}`,
			axiosConfig
		);
		return deletedTag.data;
	} catch (error) {
		return {
			success: false,
			message: `error deleting company: ${error}`,
		};
	}
};
