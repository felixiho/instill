import { Box } from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "@/layout/Layout";
import { HomeProvider } from "@/context/HomeContext";
import TopNav from "@/layout/TopNav";
import BottomNav from "@/layout/BottomNav";
import Search from "@/modules/home /Search";
import Title from "@/modules/home /Title";
import { apiCachedFetchJson } from "@/api";
import MoviesList from "@/modules/home /MoviesList";
import Pagination from "@/components/shared/Pagination";
import logger from "@/config/logger";

const Home: NextPageWithLayout = () => {
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
        !useCurrentPage && setCurrentPage(1)
      })
      .catch((error) => {
        setSearching(false);
        logger.error("An error occurred getting results from omdb api", {
          error,
        });
      });
  };

  return (
    <Box py={20} as="section">
      <Search searching={searching} searchMovies={searchMovies} />
      <Title
        totalResults={totalResults}
        searchValue={searchValue}
        error={error}
      />
      <MoviesList
        updatePage={setCurrentPage}
        movies={movies}
        currentPage={currentPage}
        totalResults={totalResults}
      />
    </Box>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <HomeProvider>
        <TopNav />
        <BottomNav>{page}</BottomNav>
      </HomeProvider>
    </Layout>
  );
};

export default Home;
