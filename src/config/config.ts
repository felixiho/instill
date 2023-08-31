export const CONFIG = { 
  OMDB_API_BASEURL: process.env.NEXT_PUBLIC_API_BASEURL || "",
  OMDB_API_KEY: process.env.NEXT_PUBLIC_OMDB_API_KEY || "", 
} as const;
