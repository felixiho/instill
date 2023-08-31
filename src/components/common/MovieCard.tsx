import { MovieType } from "@/modules/home /types";
import { Box, Flex, GridItem, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
 
const MovieCard = ({ movie }: { movie: MovieType }) => {
  return (
    <GridItem mb={4} display={"flex"} justifyContent={"center"}>
      <Link href={"/product"}>
        <Box position="relative">
          <Box height={{base: '', md:"360px"}} mx="auto"  rounded={"md"} overflow={"hidden"}>
            <Image src={movie.Poster} alt="shirt image" />
          </Box> 
        </Box>
        <Box my={4} px={2}>
          <Text mt={2} fontSize="xs">
            {movie.Type}
          </Text>
          <Text fontWeight="bold" fontSize="md">
            {movie.Title}
          </Text>
          <Flex mt={2} justifyContent="space-between" my="auto">
            <Flex as="span" my="auto">
              <Text ml={1} fontSize="2xs">
                {movie.Year}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Link>
    </GridItem>
  );
};

export default MovieCard;
