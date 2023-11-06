import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { HStack, Image, Text, Flex, Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, VStack, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import logo from "./assets/Images/LogoPat.png";
import bgstar from "./assets/Images/starback.svg";
import ColorModeSwitch from "./components/ColorModeSwitch/ColorModeSwitch";
import "./App.scss";

// Actualizado para remover el parámetro no utilizado.
const DrawerContext = React.createContext({ isDrawerOpen: false, setIsDrawerOpen: (_value: boolean) => {} });

type NavLinkProps = {
    to: string;
    children: React.ReactNode;
};

const NavLink = ({ to, children }: NavLinkProps) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    const { colorMode } = useColorMode();
    const textShadow = colorMode === "dark" ? "0px 0px 10px rgba(0, 0, 0, 1)" : "none";
    const { setIsDrawerOpen } = React.useContext(DrawerContext);

    return (
        <Link to={to} onClick={() => setIsDrawerOpen(false)}>
            <Text borderBottom={isActive ? "2px solid" : "none"} borderColor={isActive ? "blue.500" : "transparent"} _hover={{ transform: "scale(1.2)" }} pb={1} textShadow={textShadow}>
                {children}
            </Text>
        </Link>
    );
};

const App: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
            <Router>
                <Box>
                    <Flex as="header" alignItems="center" justifyContent="space-between" w="100%" h="15vh" p={4}>
                        <Link to="/" onClick={() => setIsDrawerOpen(false)}>
                            <Image src={logo} alt="Logo" boxSize="50px" ml={{ base: "55%", md: "60%", lg: "8vw" }} />
                        </Link>
                        <HStack spacing={10} fontFamily="Quicksand" display={{ base: "none", md: "flex" }} w={{ md: "80%", lg: "50%" }}>
                            <NavLink to="/">HOME</NavLink>
                            <NavLink to="/about">SOBRE MI</NavLink>
                            <NavLink to="/work">PORTFOLIO</NavLink>
                            <NavLink to="/contact">CONTACTO</NavLink>
                            <ColorModeSwitch />
                        </HStack>
                        <IconButton display={{ base: "block", md: "none" }} aria-label="Open menu" icon={<HamburgerIcon />} onClick={() => setIsDrawerOpen(true)} />
                    </Flex>
                    <Drawer isOpen={isDrawerOpen} placement="right" onClose={() => setIsDrawerOpen(false)}>
                        <DrawerOverlay>
                            <DrawerContent bgImage={`url(${bgstar})`} bgSize="cover" bgRepeat="no-repeat" bgPos="center center">
                                <DrawerCloseButton />
                                <DrawerBody>
                                    <VStack spacing={10} mt="30%">
                                        <NavLink to="/">HOME</NavLink>
                                        <NavLink to="/about">SOBRE MI</NavLink>
                                        <NavLink to="/work">PORTFOLIO</NavLink>
                                        <NavLink to="/contact">CONTACTO</NavLink>
                                        <Box mt="8%">
                                            <ColorModeSwitch />
                                        </Box>
                                    </VStack>
                                </DrawerBody>
                            </DrawerContent>
                        </DrawerOverlay>
                    </Drawer>
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Box>
            </Router>
        </DrawerContext.Provider>
    );
};

export default App;
