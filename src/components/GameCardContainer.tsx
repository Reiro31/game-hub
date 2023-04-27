import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width="250px"
      borderRadius={10}
      overflow="hidden"
      border="solid grey 2px"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
