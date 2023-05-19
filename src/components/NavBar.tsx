import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <a href="/">
        <Image src={logo} width="70px" />
      </a>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
