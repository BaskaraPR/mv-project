"use server";
import axios from "axios";
export const getUser = async () => {
	try {
		const response = await axios.get(
			`${process.env.PUBLIC_NEXT_DIRECTUS}/user_kel_bagas`
		);
		return response.data;
	} catch (error) {
		throw new Error(`Error fetching data from Directus: ${error}`);
	}
};
