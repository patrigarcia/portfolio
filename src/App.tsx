import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import { Box, Image, useBreakpointValue, Button, Grid, Text, Link, VStack } from "@chakra-ui/react";
import backgroundImage from "./assets/Images/stars.webp";
import { useColorMode } from "@chakra-ui/react";
import { useLanguage } from "./context/LanguageContext";
import pat from "/src/assets/Images/pat.webp";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import "./App.scss";

export default function App() {
    const parallax = useRef<IParallax>(null!);
    const { isSpanish } = useLanguage();

    const imageSize = useBreakpointValue({ base: "30vh", md: "20vh", lg: "25vh" });
    const marginLeftValue = useBreakpointValue({ base: "70vw", md: "75vw", lg: "78vw" });
    const marginTopValue = useBreakpointValue({ base: "23vh", md: "20vh", lg: "5vh" });
    const wParallax = useBreakpointValue({ base: "30%", md: "2%", lg: "20%" });
    const iconSize = useBreakpointValue({
        base: "1.5em",
        md: "2em",
        lg: "2.5em",
    });

    const { colorMode, toggleColorMode } = useColorMode();

    const textStyle = {
        fontFamily: "Roddenberry",
        textAlign: "center" as const,
        fontSize: { base: "1.3em", md: "1.8em", lg: "1.8em" },
        transition: "transform 0.3s",
    };

    React.useEffect(() => {
        if (colorMode === "light") {
            toggleColorMode();
        }
    }, []);

    return (
        <Parallax ref={parallax} pages={4}>
            <Box className="opaqueBackground" bgImage={`url(${backgroundImage})`}>
                <ParallaxLayer offset={0.6} speed={-1} onClick={() => parallax.current?.scrollTo(0)} style={{ zIndex: 1, width: wParallax }}>
                    <Image
                        src={pat}
                        w={imageSize}
                        style={{
                            transform: `translate(${marginLeftValue}, ${marginTopValue})`,
                        }}
                        onClick={() => parallax.current?.scrollTo(0)}
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1} factor={1}>
                    <Home />
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0} style={{ display: "flex", justifyContent: "space-evenly", alignItems: "flex-start", position: "absolute", top: "2%", width: "100vw" }}>
                    <Grid templateColumns="repeat(3, 1fr)" gap={{ base: "7vw", md: "8vw", lg: "10vw" }}>
                        <Button variant="unstyled" _hover={{}} onClick={() => parallax.current?.scrollTo(1)}>
                            <Text {...textStyle} _hover={{ transform: "scale(1.2)" }}>
                                {isSpanish ? "SOBRE MÍ" : "ABOUT ME"}
                            </Text>
                        </Button>

                        <Button variant="unstyled" _hover={{}} onClick={() => parallax.current?.scrollTo(2)}>
                            <Text {...textStyle} _hover={{ transform: "scale(1.2)" }}>
                                {isSpanish ? "PORTFOLIO" : "PORTFOLIO"}
                            </Text>
                        </Button>
                        <Button variant="unstyled" _hover={{}} onClick={() => parallax.current?.scrollTo(3)}>
                            <Text {...textStyle} _hover={{ transform: "scale(1.2)" }}>
                                {isSpanish ? "CONTACTO" : "CONTACT"}
                            </Text>
                        </Button>
                    </Grid>
                    <VStack position="absolute" left={{ base: "5%", md: "10%", lg: "10%" }} bottom="20%" zIndex="999" top="30vh" spacing="10">
                        <Link href="https://github.com/patrigarcia" isExternal aria-label="GitHub">
                            <FaGithub size={iconSize} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/patggarcia/" isExternal aria-label="LinkedIn">
                            <FaLinkedin size={iconSize} />
                        </Link>
                        <Link href={`${window.location.origin}/assets/Pdf/CV.pdf`} download="CV_PatriciaGarcia.pdf" aria-label="Download CV">
                            <FaFilePdf size={iconSize} />
                        </Link>
                    </VStack>{" "}
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.5} factor={1}>
                    <About />
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.5} factor={1}>
                    <Work />
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.5} factor={1}>
                    <Contact />
                </ParallaxLayer>
            </Box>
        </Parallax>
    );
}
