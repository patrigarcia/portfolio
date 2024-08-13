import React, { useState } from "react";
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
import logo from "../../../public/assets/Images/logo.webp";

interface NavbarProps {
    onNavigate: (page: number) => void;
    textStyle: any;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, textStyle }) => {
    const { isSpanish, setIsSpanish } = useLanguage();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isMobile = useBreakpointValue({ base: true, md: false });
    const mxValue = useBreakpointValue({ base: "5vw", md: "10vw" }); 
    const iconButtonSize = useBreakpointValue({ base: "2rem", md: "1.5rem" }); 

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <Box position="fixed" top={0} left={0} width="100%" bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))" zIndex={1000} p={4}>
            <Grid templateColumns="repeat(4, 1fr)" alignItems="center" mx={mxValue}>
                <GridItem display="flex" justifyContent="flex-start">
                    <Image src={logo} alt="Logo" boxSize="60px" />
                </GridItem>

                {isMobile ? (
                    <GridItem colStart={4} display="flex" justifyContent="flex-end">
                        <IconButton aria-label="Open menu" icon={<HamburgerIcon w={iconButtonSize} h={iconButtonSize} />} onClick={toggleDrawer} variant="unstyled" size="lg" />
                    </GridItem>
                ) : (
                    <>
                        <GridItem display="flex" justifyContent="center">
                            <Button fontWeight="light" variant="unstyled" _hover={{}} onClick={() => onNavigate(1)}>
                                <Text {...textStyle} _hover={{ transform: "scale(1.2)" }}>
                                    {isSpanish ? "Sobre mi" : "About Me"}
                                </Text>
                            </Button>
                        </GridItem>
                        <GridItem display="flex" justifyContent="center">
                            <Button variant="unstyled" _hover={{}} onClick={() => onNavigate(2)}>
                                <Text fontWeight="light" {...textStyle} _hover={{ transform: "scale(1.2)" }}>
                                    {isSpanish ? "Contacto" : "Contact"}
                                </Text>
                            </Button>
                        </GridItem>
                        <GridItem display="flex" justifyContent="flex-end" alignItems="center">
                            <Text fontWeight="light" mr={2} fontFamily="Ubuntu, sans-serif">
                                {isSpanish ? "ES" : "EN"}
                            </Text>
                            <Switch colorScheme="purple" isChecked={isSpanish} onChange={() => setIsSpanish(!isSpanish)} />
                        </GridItem>
                    </>
                )}
            </Grid>

            <Drawer isOpen={isDrawerOpen} placement="right" onClose={toggleDrawer}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>{isSpanish ? "Menú" : "Menu"}</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4}>
                            <Button
                                fontWeight="light"
                                variant="unstyled"
                                _hover={{}}
                                onClick={() => {
                                    onNavigate(1);
                                    toggleDrawer();
                                }}
                            >
                                <Text {...textStyle} _hover={{ transform: "scale(1.2)" }}>
                                    {isSpanish ? "Sobre mi" : "About Me"}
                                </Text>
                            </Button>
                            <Button
                                fontWeight="light"
                                variant="unstyled"
                                _hover={{}}
                                onClick={() => {
                                    onNavigate(2);
                                    toggleDrawer();
                                }}
                            >
                                <Text {...textStyle} _hover={{ transform: "scale(1.2)" }}>
                                    {isSpanish ? "Contacto" : "Contact"}
                                </Text>
                            </Button>
                            <Box display="flex" alignItems="center">
                                <Text fontWeight="light" mr={2} fontFamily="Ubuntu, sans-serif">
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
