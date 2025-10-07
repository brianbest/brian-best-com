import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Provide a fallback project ID for build time
const projectId = process.env.SANITY_PROJECT_ID || "placeholder-project-id";

export const sanityClient = createClient({
  projectId: projectId,
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2023-10-21",
  useCdn: process.env.NODE_ENV === "production",
});

export const urlFor = (source: any) => imageUrlBuilder(sanityClient).image(source); 