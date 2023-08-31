import { apiCachedFetchJson } from "@/api";
import logger from "@/config/logger";
import { useEffect, useState } from "react";

export function useMovies() {
  const [searching, setSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    searchMovies(searchValue, true);
  }, [currentPage]);

  const searchMovies = (value: string, useCurrentPage: boolean = false) => {
    if (!value) return;
    setError("");
    setSearching(true);
    setSearchValue(value);
    apiCachedFetchJson({
      s: value,
      page: useCurrentPage ? currentPage.toString() : "1",
    })
      .then((movies) => {
        setSearching(false);
        if (movies.Response === "False") {
          setError(movies.Error);
          setMovies([]);
          setTotalResults(0);
          logger.error("An error occurred getting results from omdb api", {
            error: movies.Error,
          });
          return;
        }
        setMovies(movies.Search);
        setTotalResults(parseInt(movies.totalResults));
        !useCurrentPage && setCurrentPage(1);
      })
      .catch((error) => {
        setSearching(false);
        logger.error("An error occurred getting results from omdb api", {
          error,
        });
      });
  };

  return [
    searching,
    searchMovies,
    totalResults,
    searchValue,
    error,
    currentPage,
    setCurrentPage,
    movies,
  ] as const;
}
