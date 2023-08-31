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

const Home: NextPageWithLayout = () => {
  const [searching, setSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    console.log({currentPage})
    searchMovies(searchValue)
  }, [currentPage])


  const searchMovies = (value: string) => {
    console.log({ value });
    if (!value) return;
    setSearching(true);
    setSearchValue(value);

    apiCachedFetchJson({
      s: value,
      page: currentPage.toString(),
    })
      .then((movies) => {
        setSearching(false);
        setMovies(movies.Search);
        setTotalResults(parseInt(movies.totalResults))
        console.log(movies);
      })
      .catch((error) => {
        setSearching(false);
        console.log({ error });
      });
  };

  return (
    <Box py={20} as="section">
      <Search searchMovies={searchMovies} />
      <Title searchValue={searchValue} /> 
      <MoviesList updatePage={setCurrentPage} movies={movies}  currentPage={currentPage} totalResults={totalResults}/>
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
