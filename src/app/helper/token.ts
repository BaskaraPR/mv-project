export const axiosConfig = {
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`,
	},
};
