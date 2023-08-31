import { colors } from "@/config/chakra";
import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <InputGroup
      borderColor={"white"}
      bg="white"
      boxShadow={"0px 8px 20px rgba(0,0,0,0.06)"}
      maxW={"628px"} 
      alignItems={"center"}
      rounded={"lg"}
    >
      <InputLeftElement
        pointerEvents="none"
        py="2rem"
        children={
          <IconContext.Provider value={{ color: colors.brand }}>
            <FaSearch />
          </IconContext.Provider>
        }
      />
      <Input
        _active={{ borderColor: "white" }}
        _focusVisible={{ boxShadow: "white" }}
        fontWeight={"light"}
        placeholder="Search...."
        type="text"
        pr="100px"
        height="64px"
      /> 

      <InputRightElement py={2} w="100px" my="auto" height={"64px"}>
        <Divider orientation="vertical" />
        <Button
          bg="transparent"
          onClick={handleClick}
          mx={4}
          _hover={{
            background:'transparent',
            transform: "translate(-3px, 0)",
          }}
          fontWeight={"normal"} 
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup> 
  );
};

export default SearchBox;
