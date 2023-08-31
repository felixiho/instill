import { colors } from "@/config/chakra";
import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  FormLabel,
  InputRightElement,
} from "@chakra-ui/react";
import { FormEvent, FormEventHandler, useState } from "react";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { ThreeDots } from "react-loader-spinner";

const SearchBox = ({
  handleClick,
  searching,
}: {
  handleClick: (value: string) => void;
  searching: boolean;
}) => {
  const [value, setValue] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleClick(value);
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
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
          onChange={(e) => setValue(e.target.value)}
          type="text"
          pr="100px"
          height="64px"
        />

        <InputRightElement py={2} w="100px" my="auto" height={"64px"}>
          <Divider orientation="vertical" />
          <Button
            bg="transparent"
            type="submit"
            onClick={() => handleClick(value)}
            mx={4}
            _hover={{
              background: "transparent",
              transform: "translate(-3px, 0)",
            }}
            fontWeight={"normal"}
          >
            {searching ? (
              <ThreeDots height="50" width="50" radius="9" color="#555555" />
            ) : (
              "Search"
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchBox;
