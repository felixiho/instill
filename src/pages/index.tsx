import { Box } from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "@/layout/Layout";
import { HomeProvider } from "@/context/HomeContext";
import TopNav from "@/layout/TopNav";
import BottomNav from "@/layout/BottomNav";
import Search from "@/modules/home /Search";
import Title from "@/modules/home /Title";
import { apiCachedFetchJson } from "@/api";
import MoviesList from "@/modules/home /MoviesList";

const Home: NextPageWithLayout = () => {
  const [searching, setSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([])

  const searchMovies = (value: string) => {
    console.log({value})
    if (!value) return
    setSearching(true);
    setSearchValue(value);

    apiCachedFetchJson({
      s: value,
      page: "1",
    })
      .then((movies) => {
        setSearching(false);
        setMovies(movies.Search);
        console.log(movies)
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
      <MoviesList movies={movies} />
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
