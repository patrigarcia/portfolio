import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  GridItem,
  Button,
  Text,
  Image,
  Switch,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useLanguage } from "../../context/LanguageContext";
import logo from "../../assets/Images/logo.webp";

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
  textStyle: any;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, textStyle }) => {
  const { isSpanish, setIsSpanish } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const iconButtonSize = useBreakpointValue({ base: "2rem", md: "1.5rem", lg: "1.5rem" });

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="rgba(5, 11, 21, 0.8)"
      backdropFilter="blur(8px)"
      boxShadow={isScrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none"}
      transition="all 0.3s ease"
      zIndex={1000}
    >
      <Grid
        templateColumns={{
          base: "repeat(4, 1fr)",
          md: "auto 1fr auto",
        }}
        gap={{ base: 2, md: 6 }}
        alignItems="center"
        justifyContent="center"
        maxW="1200px"
        mx="auto"
        p={4}
      >
        <GridItem display="flex" alignItems="center">
          <RouterLink to="/">
            <Image src={logo} alt="Logo" boxSize="60px" />
          </RouterLink>
        </GridItem>

        {isMobile ? (
          <GridItem colStart={5} display="flex" justifyContent="flex-end">
            <IconButton aria-label="Open menu" icon={<HamburgerIcon w={iconButtonSize} h={iconButtonSize} color="white" />} onClick={toggleDrawer} variant="unstyled" size="lg" />
          </GridItem>
        ) : (
          <>
            <GridItem display="flex" justifyContent="center" alignItems="center" gap={6}>
              <RouterLink to="/">
                <Button fontWeight="light" variant="unstyled" _hover={{}}>
                  <Text {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white" fontSize="1.1em">
                    {isSpanish ? "Inicio" : "Home"}
                  </Text>
                </Button>
              </RouterLink>
              <Button fontWeight="light" variant="unstyled" _hover={{}} onClick={() => scrollToSection("about")}>
                <Text {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white" fontSize="1.1em">
                  {isSpanish ? "Sobre mi" : "About Me"}
                </Text>
              </Button>
              <RouterLink to="/mvp-fit-check">
                <Button variant="unstyled" _hover={{}}>
                  <Text {...textStyle} fontWeight="light" _hover={{ transform: "scale(1.2)" }} color="white" fontSize="1.1em">
                    {isSpanish ? "MVP_FC" : "MVP_FC"}
                  </Text>
                </Button>
              </RouterLink>
              <Button variant="unstyled" _hover={{}} onClick={() => scrollToSection("portfolio")}>
                <Text {...textStyle} fontWeight="light" _hover={{ transform: "scale(1.2)" }} color="white" fontSize="1.1em">
                  {isSpanish ? "Portfolio" : "Portfolio"}
                </Text>
              </Button>
              <Button variant="unstyled" _hover={{}} onClick={() => scrollToSection("contact")}>
                <Text fontWeight="light" {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white" fontSize="1.1em">
                  {isSpanish ? "Contacto" : "Contact"}
                </Text>
              </Button>
            </GridItem>
            <GridItem display="flex" justifyContent="flex-end" alignItems="center">
              <Text fontWeight="light" mr={2} fontFamily="Ubuntu, sans-serif" color="white" fontSize="1.1em">
                {isSpanish ? "ES" : "EN"}
              </Text>
              <Switch colorScheme="teal" isChecked={isSpanish} onChange={() => setIsSpanish(!isSpanish)} />
            </GridItem>
          </>
        )}
      </Grid>

      <Drawer isOpen={isDrawerOpen} placement="right" onClose={toggleDrawer}>
        <DrawerOverlay />
        <DrawerContent bg="rgba(13, 21, 19, 0.98)">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">{isSpanish ? "Menú" : "Menu"}</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <RouterLink to="/" onClick={toggleDrawer}>
                <Button
                  fontWeight="light"
                  variant="unstyled"
                  _hover={{}}
                >
                  <Text {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white" fontSize="1.1em">
                    {isSpanish ? "Inicio" : "Home"}
                  </Text>
                </Button>
              </RouterLink>
              <Button
                fontWeight="light"
                variant="unstyled"
                _hover={{}}
                onClick={() => {
                  scrollToSection("about");
                  toggleDrawer();
                }}
              >
                <Text {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white" fontSize="1.1em">
                  {isSpanish ? "Sobre mi" : "About Me"}
                </Text>
              </Button>
              <RouterLink to="/mvp-fit-check" onClick={toggleDrawer}>
                <Button fontWeight="light" variant="unstyled" _hover={{}}>
                  <Text {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white" fontSize="1.1em">
                    {isSpanish ? "MVP Fit Check" : "MVP Fit Check"}
                  </Text>
                </Button>
              </RouterLink>
              <Button
                fontWeight="light"
                variant="unstyled"
                _hover={{}}
                onClick={() => {
                  scrollToSection("portfolio");
                  toggleDrawer();
                }}
              >
                <Text {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white" fontSize="1.1em">
                  {isSpanish ? "Portfolio" : "Portfolio"}
                </Text>
              </Button>
              <Button
                fontWeight="light"
                variant="unstyled"
                _hover={{}}
                onClick={() => {
                  scrollToSection("contact");
                  toggleDrawer();
                }}
              >
                <Text {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white" fontSize="1.1em">
                  {isSpanish ? "Contacto" : "Contact"}
                </Text>
              </Button>
              <Box display="flex" alignItems="center">
                <Text fontWeight="light" mr={2} fontFamily="Ubuntu, sans-serif" color="white" fontSize="1.1em">
                  {isSpanish ? "ES" : "EN"}
                </Text>
                <Switch colorScheme="purple" isChecked={isSpanish} onChange={() => setIsSpanish(!isSpanish)} />
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
