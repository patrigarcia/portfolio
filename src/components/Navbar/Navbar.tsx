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

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
  };

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
          md: "1fr repeat(4, auto) 1fr",
        }}
        gap={{ base: 2, md: 6 }}
        alignItems="center"
        justifyContent="center"
        maxW="1200px"
        mx="auto"
        p={4}
      >
        <GridItem>
          <Image src={logo} alt="Logo" boxSize="60px" />
        </GridItem>

        {isMobile ? (
          <GridItem colStart={5} display="flex" justifyContent="flex-end">
            <IconButton aria-label="Open menu" icon={<HamburgerIcon w={iconButtonSize} h={iconButtonSize} color="white" />} onClick={toggleDrawer} variant="unstyled" size="lg" />
          </GridItem>
        ) : (
          <>
            <GridItem>
              <Button fontWeight="light" variant="unstyled" _hover={{}} onClick={() => handleNavigation("home")}>
                <Text {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white">
                  {isSpanish ? "Inicio" : "Home"}
                </Text>
              </Button>
            </GridItem>
            <GridItem>
              <Button fontWeight="light" variant="unstyled" _hover={{}} onClick={() => handleNavigation("about")}>
                <Text {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white">
                  {isSpanish ? "Sobre mi" : "About Me"}
                </Text>
              </Button>
            </GridItem>
            <GridItem>
              <Button variant="unstyled" _hover={{}} onClick={() => handleNavigation("portfolio")}>
                <Text {...textStyle} fontWeight="light" _hover={{ transform: "scale(1.2)" }} color="white">
                  {isSpanish ? "Portfolio" : "Portfolio"}
                </Text>
              </Button>
            </GridItem>
            <GridItem>
              <Button variant="unstyled" _hover={{}} onClick={() => handleNavigation("contact")}>
                <Text fontWeight="light" {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white">
                  {isSpanish ? "Contacto" : "Contact"}
                </Text>
              </Button>
            </GridItem>
            <GridItem display="flex" justifyContent="flex-end" alignItems="center">
              <Text fontWeight="light" mr={2} fontFamily="Ubuntu, sans-serif" color="white">
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
              <Button
                fontWeight="light"
                variant="unstyled"
                _hover={{}}
                onClick={() => {
                  handleNavigation("home");
                  toggleDrawer();
                }}
              >
                <Text {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white">
                  {isSpanish ? "Inicio" : "Home"}
                </Text>
              </Button>
              <Button
                fontWeight="light"
                variant="unstyled"
                _hover={{}}
                onClick={() => {
                  handleNavigation("about");
                  toggleDrawer();
                }}
              >
                <Text {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white">
                  {isSpanish ? "Sobre mi" : "About Me"}
                </Text>
              </Button>
              <Button
                fontWeight="light"
                variant="unstyled"
                _hover={{}}
                onClick={() => {
                  handleNavigation("portfolio");
                  toggleDrawer();
                }}
              >
                <Text {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white">
                  {isSpanish ? "Portfolio" : "Portfolio"}
                </Text>
              </Button>
              <Button
                fontWeight="light"
                variant="unstyled"
                _hover={{}}
                onClick={() => {
                  handleNavigation("contact");
                  toggleDrawer();
                }}
              >
                <Text {...textStyle} _hover={{ transform: "scale(1.2)" }} color="white">
                  {isSpanish ? "Contacto" : "Contact"}
                </Text>
              </Button>
              <Box display="flex" alignItems="center">
                <Text fontWeight="light" mr={2} fontFamily="Ubuntu, sans-serif" color="white">
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
