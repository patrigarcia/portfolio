import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Image, Text, useBreakpointValue, Flex, Switch, Box } from "@chakra-ui/react";
import "../../App.scss";
import { useLanguage } from "../../context/LanguageContext";
import nebula from "../../assets/Images/nebula.svg";
import Typing from "../Typing/Typing";

const Home: React.FC = () => {
    const fontSize = useBreakpointValue({ base: "1.9em", md: "3em", lg: "3.2em" });
    const isBase = useBreakpointValue({ base: true, md: false });
    const { isSpanish, setIsSpanish } = useLanguage();

    return (
        <>
            <Flex align="flex-end" justify="flex-end" mb={4} zIndex={9999} position="relative" mt="2%" mr="2%">
                <Text fontFamily="Roddenberry" mr={2}>
                    {isSpanish ? "EN" : "ES"}
                </Text>
                <Switch isChecked={isSpanish} onChange={() => setIsSpanish(!isSpanish)} />
            </Flex>

            <ParallaxLayer offset={0} speed={1} factor={1}>
                <Image src={nebula} alt="stars" opacity={0.9} w="100vw" h="100vh" objectFit="cover" pos="absolute" top={0} left={0} />
            </ParallaxLayer>

            <ParallaxLayer style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw" }}>
                <Box>
                    <Text fontFamily="RodItalic" fontSize={fontSize}>
                        {isSpanish ? "HOLA, SOY PATRICIA" : "HI, I'M PATRICIA"}
                    </Text>
                </Box>
                <Box minHeight="40px" display="flex" alignItems="center" justifyContent="center">
                    <Text fontFamily="Roddenberry" fontSize={fontSize} textAlign="center">
                        {isBase ? (
                            <>
                                {" "}
                                <Typing />{" "}
                            </>
                        ) : (
                            <>
                                {" "}
                                <Typing />{" "}
                            </>
                        )}
                    </Text>
                </Box>
            </ParallaxLayer>
        </>
    );
};

export default Home;
