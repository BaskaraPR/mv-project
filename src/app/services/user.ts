"use server";
import axios from "axios";
import { axiosConfig } from "../helper/token";
import { json } from "stream/consumers";

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
		throw new Error(`Error fetching data from Directus: ${error}`);
	}
};

export const registerUser = async (data: registerUser) => {
	try {
		const doesUserExist = await findUserByEmail(data.email);

		if (doesUserExist.length > 0) {
			return {
				success: false,
				message: "user already exist",
				data: doesUserExist,
			};
		}
		const postURL = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/user_kel_bagas`;
		const result = await axios.post(postURL, data, axiosConfig);
		console.log(postURL);

		return result;
	} catch (error) {
		throw new Error(` ${error}`);
	}
};
