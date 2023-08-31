import { Box, Flex } from "@chakra-ui/react"; 
import CopyrightSection from "./CopyrightSection";
import { ChildrenProps } from "@/components/layouts/types";

const BottomNav = ({ children }: ChildrenProps) => {
  return (
    <Box>
      {children}
      <Box
        position="fixed"
        bottom={0}
        width="full"
        overflow={"hidden"}
        background="white"
        zIndex={3}
        padding={4}
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <CopyrightSection />
      </Box>
    </Box>
  );
};

export default BottomNav;
