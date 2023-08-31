import { Flex, Heading, Text } from "@chakra-ui/react";

const Title = ({ searchValue }: { searchValue: string }) => {
  return (
    <Flex w="full" flexDir={"column"} justifyContent={"center"} mb={10} mt={16}>
      <Heading textAlign={"center"}> Movie Finder</Heading>
      {searchValue ? (
        <Text fontWeight={"thin"} textAlign={"center"} mt={3}>
          Showing results for: <b>{searchValue}</b>
        </Text>
      ) : (
        <Text fontWeight={"thin"} textAlign={"center"} mt={3}>
          Search for a movie title to see results
        </Text>
      )}
    </Flex>
  );
};

export default Title;
