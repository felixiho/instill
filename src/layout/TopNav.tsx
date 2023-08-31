import NotificationIcon from "@/components/common/NotificationIcon";
import { useHomeContext } from "@/context/HomeContext";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineShopping, AiOutlineMessage } from "react-icons/ai";

const TopNav = () => {
  const { showBackground } = useHomeContext();
  return (
    <Box
      position="fixed"
      top={0}
      width="full"
      overflow={"hidden"}
      zIndex={3}
      transition="background-color 200ms ease-in"
      backgroundColor={showBackground ? "white" : "transparent"}
      padding={6}
      boxShadow={showBackground ? "rgba(149, 157, 165, 0.2) 0px 8px 24px" : ""}
    >
      <Flex justifyContent={"center"} my={3}>
        <Heading>Instill Education</Heading>
      </Flex>
    </Box>
  );
};

export default TopNav;
