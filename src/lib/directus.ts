import { createDirectus, rest, staticToken } from "@directus/sdk";

const url = process.env.DIRECTUS_URL;
const access = process.env.DIRECTUS_TOKEN;

if (!url || !access) {
  throw new Error("DIRECTUS_URL is not defined in the environment variables");
}

const directus = createDirectus(url).with(rest()).with(staticToken(access));

export default directus;
