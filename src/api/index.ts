 import config from "@/config";
import fetch from "isomorphic-unfetch";

export type QueryType = Record<string, string> 
const BASE_URL = config("OMDB_API_BASEURL")
const API_KEY = config("OMDB_API_KEY") 
let fetchCacheMap: Record<string, any | undefined> = {};

//normal fetch requests without caching
export const apiFetchJson = async (query: QueryType, opts?: RequestInit) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&`; 

  const req = await fetch(url + new URLSearchParams(query), opts);
  return await req.json();
};

// Requests to the omdbapi are mainly get requests and data is mostly static
// we can cache in-memory to add an extra optimization layer
export const apiCachedFetchJson = async (
  query: QueryType,
  opts?: RequestInit
) => {
  let response: any; 

  const method = (opts?.method || "get").toLowerCase();

  if (method !== "get") {
    return await apiFetchJson(query,opts);
  }
  const {s, page} = query
  const cacheKey = `${s}:${page}`;

  if (fetchCacheMap[cacheKey]) {
    response = fetchCacheMap[cacheKey]!;
  } else {
    response = await apiFetchJson(query, opts);
    fetchCacheMap[cacheKey] = response;
  }

  return response;
};
