import { Box, Flex, Text } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { BiFirstPage, BiLastPage } from "react-icons/bi";

export type PaginationType = {
  totalResults: number;
  currentPage: number;
  updatePage: (page: number) => void
};
const MOVIE_PER_PAGE = 10

const Pagination = ({ totalResults, currentPage, updatePage }: PaginationType) => {
  const totalPages = Math.ceil(totalResults / MOVIE_PER_PAGE);
  const handlePagination = (newPage: number) => { 
    if (newPage > totalPages || newPage < 1) return;
    updatePage(newPage)
  };
  return (
    <Flex w="full" justifyContent={"flex-end"} pb={6} px={8}>
      <Box cursor={"pointer"} onClick={() => handlePagination(1)}>
        <IconContext.Provider value={{ color: "#555555", size: "24px" }}>
          <BiFirstPage />
        </IconContext.Provider>
      </Box>
      <Box cursor={"pointer"} onClick={() => handlePagination(currentPage-1)}>
        <IconContext.Provider value={{ color: "#555555", size: "24px" }}>
          <MdNavigateBefore />
        </IconContext.Provider>
      </Box>
      <Text fontWeight={"light"} px={3}>{currentPage}</Text>
      <Box cursor={"pointer"} onClick={() => handlePagination(currentPage+1)}>
        <IconContext.Provider value={{ color: "#555555", size: "24px" }}>
          <MdNavigateNext />
        </IconContext.Provider>
      </Box>
      <Box cursor={"pointer"} onClick={() => handlePagination(totalPages)}>
        <IconContext.Provider value={{ color: "#555555", size: "24px" }}>
          <BiLastPage />
        </IconContext.Provider>
      </Box>
      <Text fontWeight={"light"} pl={4}>{totalPages} page{totalPages > 1 ? 's' : ''}</Text>
    </Flex>
  );
};

export default Pagination;
