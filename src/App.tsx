import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";
import backgroundImage from "./assets/Images/stars.webp";
import { useColorMode } from "@chakra-ui/react";
import "./App.scss";

export default function App() {
    const parallax = useRef<IParallax>(null!);

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

    const handleNavigate = (page: number) => {
        parallax.current.scrollTo(page);
    };

    return (
        <>
                <Navbar onNavigate={handleNavigate} textStyle={textStyle} />
        <Parallax ref={parallax} pages={3}>
            <Box className="opaqueBackground" bgImage={`url(${backgroundImage})`}>

                <ParallaxLayer offset={0} speed={1} factor={0.5}>
                    <Home />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1} factor={0.5}>
                    <About />
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1} factor={0.1}>
                    <Contact />
                </ParallaxLayer>
            </Box>
        </Parallax></>
    );
}
