"use server";
import axios from "axios";
import { axiosConfig } from "../helper/token";
import { Tags } from "../types/tags";

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

export const createTags = async (tagData: Tags) => {
  try {
    const createdTag = await axios.post(
      `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/company_tags`,
      tagData,
      axiosConfig
    );
    return createdTag.data;
  } catch (error) {
    throw new Error(`Error creating data to Directus: ${error}`);
  }
};
