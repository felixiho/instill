export const CONFIG = {
  // put config
  OMDB_API_BASEURL: process.env.NEXT_PUBLIC_API_BASEURL as string,
  OMDB_API_KEY: process.env.NEXT_PUBLIC_API_KEY || "", 
} as const;
