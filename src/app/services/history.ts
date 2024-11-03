"use server";
import axios from "axios";
import { axiosConfig } from "../helper/token";

export const getUserProjects = async (userId: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/projects?filter[user_id][_eq]=${userId}`,
      axiosConfig
    );
    return response.data.data;
  } catch (error) {
    throw new Error(`Error fetching data from Directus: ${error}`);
  }
};
