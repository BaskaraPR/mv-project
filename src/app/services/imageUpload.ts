"use server";
import axios from "axios";
import { axiosConfig } from "../helper/token";
export const uploadImage = async (file: File) => {
	try {
		const formData = new FormData();
		formData.append("file", file);
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/files`,
			formData,
			axiosConfig
		);
		return { success: true, id: response.data.data.id };
	} catch (error) {
		return { success: false, message: `Error uploading image: ${error}` };
	}
};
