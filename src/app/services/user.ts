"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { axiosConfig } from "../helper/token";
import { encrypt } from "../helper/bcrypt";

interface registerUser {
	username: string;
	email: string;
	password: string;
}

export const getUser = async () => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/user_kel_bagas`,
			axiosConfig
		);
		return response.data;
	} catch (error) {
		throw new Error(`Error fetching data from Directus: ${error}`);
	}
};

export const findUserById = async (id: string) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/user_kel_bagas?filter[_and][0][id][_eq]=${id}`,
			axiosConfig
		);
		return response.data;
	} catch (error) {
		throw new Error(`Error fetching data from Directus: ${error}`);
	}
};

export const findUserByUsername = async (username: string) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/user_kel_bagas?filter[_and][0][id][_eq]=${username}`,
			axiosConfig
		);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error fetching data from Directus: ${error}`);
	}
};

export const findUserByEmail = async (email: string) => {
	try {
		const findURL = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/user_kel_bagas?filter[_and][0][email][_eq]=${email}`;
		const response = await axios.get(findURL, axiosConfig);
		return response.data.data;
	} catch (error) {
		return { success: false, message: `error finding user ${error}` };
	}
};

export const registerUser = async (data: registerUser) => {
	try {
		const hashedPass = await encrypt(data.password);
		const postURL = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/user_kel_bagas`;
		await axios.post(
			postURL,
			{ password: hashedPass, username: data.username, email: data.email },
			axiosConfig
		);
		revalidatePath("/", "layout");
		return { success: true, message: `register success` };
	} catch (error) {
		return { success: false, message: `register failed ${error}` };
	}
};
