"use server";
import axios from "axios";
import { axiosConfig } from "../helper/token";
import { revalidatePath } from "next/cache";
import { History} from "../types/projects";

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

export const createProject = async (data: History) => {
  try {
    const postURL = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/projects`;
    await axios.post(
      postURL,
      {
        company_id: data.company_id,
        user_id: data.user_id,
        project_name: data.project_name,
        project_detail: data.project_detail,
        start_date: data.start_date,
        completed_date: data.completed_date,
        project_price: data.project_price,  
        project_status: "pending",
      },
      axiosConfig
    );
    revalidatePath("/", "layout");
    return { success: true, message: `register success` };
  } catch (error) {
    throw new Error(`Error fetching data from Directus: ${error}`);
  }
};
