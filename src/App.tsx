import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HStack, Image, Text, Flex, Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, VStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import logo from "./assets/Images/LogoPat.png";
import bgstar from "./assets/Images/starback.svg";
import ColorModeSwitch from "./components/ColorModeSwitch/ColorModeSwitch";
import "./App.scss";

const App: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <Router>
            <Box>
                <Flex as="header" alignItems="center" justifyContent="space-between" w="100%" h="15vh" p={4}>
                    <Image src={logo} alt="Logo" boxSize="50px" ml="3%" />

                    <HStack spacing={8} fontFamily="Quicksand" display={{ base: "none", md: "flex" }}>
                        <Link to="/">
                            <Text _hover={{ transform: "scale(1.1)" }} _active={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}>
                                HOME
                            </Text>
                        </Link>
                        <Link to="/about">
                            <Text _hover={{ transform: "scale(1.1)" }} _active={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}>
                                ABOUT ME
                            </Text>
                        </Link>
                        <Link to="/work">
                            <Text _hover={{ transform: "scale(1.1)" }} _active={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}>
                                PORTFOLIO
                            </Text>
                        </Link>
                        <Link to="/contact">
                            <Text _hover={{ transform: "scale(1.1)" }} _active={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}>
                                CONTACT
                            </Text>
                        </Link>
                    </HStack>

                    <IconButton display={{ base: "block", md: "none" }} aria-label="Open menu" icon={<HamburgerIcon />} onClick={handleDrawerOpen} />
                </Flex>

                <Drawer isOpen={isDrawerOpen} placement="right" onClose={handleDrawerClose}>
                    <DrawerOverlay>
                        <DrawerContent bgImage={`url(${bgstar})`} bgSize="cover" bgRepeat="no-repeat" bgPos="center center">
                            <DrawerCloseButton />
                            <DrawerBody>
                                <VStack spacing={10} mt="30%">
                                    <Link to="/" onClick={handleDrawerClose}>
                                        HOME
                                    </Link>
                                    <Link to="/about" onClick={handleDrawerClose}>
                                        ABOUT ME
                                    </Link>
                                    <Link to="/work" onClick={handleDrawerClose}>
                                        PORTFOLIO
                                    </Link>
                                    <Link to="/contact" onClick={handleDrawerClose}>
                                        CONTACT
                                    </Link>
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
    );
};

export default App;
