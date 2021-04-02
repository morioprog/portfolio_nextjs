import { NextPage } from "next";
import { Box, Center } from "@chakra-ui/layout";

import Heading from "components/contents/Heading";
import About from "components/contents/About";
import Skills from "components/contents/Skills";
import Languages from "components/contents/Languages";

const Home: NextPage = () => {
  return (
    <>
      <Heading />
      <Center bg="mainColor.1">
        <Box
          paddingTop={{ base: "16px", sm: "32px", md: "48px" }}
          paddingBottom="128px"
          width={{ base: "95vw", sm: "90vw", md: "80vw", lg: "70vw" }}
          textAlign="center"
        >
          <About />
          <Skills />
          <Languages />
        </Box>
      </Center>
    </>
  );
};

export default Home;
