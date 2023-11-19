import { VStack, Heading} from "@chakra-ui/react";
import Navbar from "./Navbar";

function Wrapper(props) {
  return ( 
    <VStack minH="100vh" minW="100vw">
      <Navbar />
      <Heading size="md">List Daftar Buku:</Heading>
      {props.children}
    </VStack>
  
  );
}

export default Wrapper;
