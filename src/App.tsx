import { useEffect } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import { Box, useColorMode, VStack } from "@chakra-ui/react";
import "./App.scss";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const textStyle = {
    fontFamily: "Ubuntu, sans-serif",
    textAlign: "center" as const,
    fontSize: { base: "1.1em", md: "1.8em", lg: "1.4em" },
    transition: "transform 0.3s",
  };

  useEffect(() => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);

  const scrollToSection = (sectionId: number) => {
    const sections = ["home", "about", "portfolio", "contact"];
    const element = document.getElementById(sections[sectionId]);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar onNavigate={scrollToSection} textStyle={textStyle} />
      <Box bgGradient="linear(to-b, #F5F5DC, #F8F6F0, #FAF9F6, #FFFFFF)" minHeight="100vh" position="fixed" top="0" left="0" right="0" bottom="0" zIndex="-1" />
      <VStack spacing={0} position="relative">
        <Box id="home" minH="100vh" w="100%">
          <Home />
        </Box>
        <Box id="about" minH="100vh" w="100%">
          <About />
        </Box>
        <Box id="portfolio" minH="100vh" w="100%">
          <Portfolio />
        </Box>
        <Box id="contact" minH="100vh" w="100%">
          <Contact />
        </Box>
      </VStack>
    </>
  );
}
