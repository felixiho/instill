import { Grid, Flex } from "@chakra-ui/react";
import { MovieType } from "./types";
import MovieCard from "@/components/common/MovieCard";
import Pagination from "@/components/shared/Pagination";

const MoviesList = ({
  movies,
  currentPage,
  totalResults,
  updatePage,
}: {
  movies: MovieType[];
  currentPage: number;
  totalResults: number;
  updatePage: (page: number) => void;
}) => {
  return (
    <Flex  as="section" justifyContent={"center"}>
      <Flex wrap="wrap" w="full" maxW="1140px" color="neutral.600">
        {totalResults > 1 && (
          <Pagination
            currentPage={currentPage}
            totalResults={totalResults}
            updatePage={updatePage}
          />
        )}
        <Grid
          scrollSnapAlign="center"
          w="full"
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          columnGap={6}
          px={6}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default MoviesList;
