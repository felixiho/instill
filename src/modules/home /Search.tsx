import { Box, Flex } from "@chakra-ui/react";
import SearchBox from "@/components/common/SearchBox";

const Search = ({
  searchMovies,
  searching
}: {
  searchMovies: (value: string) => void;
  searching: boolean
}) => {
  return (
    <Box as="section" my={6}>
      <Flex w="full" flexDir={"column"} position={"relative"}>
        <Box
          w="full"
          height={20}
          bg="linear-gradient(66deg, #e6fbfe 0%, #edddfb 100%)"
        ></Box>
        <Flex
          position={"absolute"}
          w="full"
          justifyContent={"center"}
          zIndex={4444}
          px={4}
          bottom={"-32px"}
        >
          <SearchBox searching={searching} handleClick={searchMovies} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Search;
