import { Box } from "@chakra-ui/react";
import { ReactElement} from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "@/layout/Layout";
import { HomeProvider } from "@/context/HomeContext";
import TopNav from "@/layout/TopNav";
import BottomNav from "@/layout/BottomNav";
import Search from "@/modules/home /Search";
import Title from "@/modules/home /Title";
import MoviesList from "@/modules/home /MoviesList";
import { useMovies } from "@/modules/home /hooks/useMovies";

const Home: NextPageWithLayout = () => {
  const [
    searching,
    searchMovies,
    totalResults,
    searchValue,
    error,
    currentPage,
    setCurrentPage,
    movies,
  ] = useMovies();
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
