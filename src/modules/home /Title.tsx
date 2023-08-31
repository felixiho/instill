import { Flex, Heading, Text } from "@chakra-ui/react";

const Title = ({
  searchValue,
  totalResults,
  error,
}: {
  searchValue: string;
  totalResults: number;
  error: string;
}) => {
  return (
    <Flex w="full" flexDir={"column"} justifyContent={"center"} mb={10} mt={16}>
      <Heading textAlign={"center"}> Movie Finder</Heading>

      {totalResults ? (
        <Text fontWeight={"thin"} textAlign={"center"} mt={3}>
          Showing {totalResults} results for: <b>{searchValue}</b>
        </Text>
      ) : (
        <Text fontWeight={"thin"} textAlign={"center"} mt={3}>
          Search for a movie title to see results
        </Text>
      )}
      <Text color="red.500"  textAlign={"center"} mt={12}>
        {error}
      </Text>
    </Flex>
  );
};

export default Title;
