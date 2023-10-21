import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Image, Text, useBreakpointValue, Flex, Switch } from "@chakra-ui/react";
import "../../App.scss";
import { useLanguage } from "../../context/LanguageContext";
import nebula from "../../assets/Images/nebula.svg";

const Home: React.FC = () => {
    const fontSize = useBreakpointValue({ base: "2.7em", md: "3em", lg: "3.2em" });
    const isBase = useBreakpointValue({ base: true, md: false });
    const { isSpanish, setIsSpanish } = useLanguage();

    return (
        <>
            <Flex align="flex-end" justify="flex-end" mb={4} zIndex={9999} position="relative" mt="2%" mr="2%">
                <Text fontFamily="Roddenberry" mr={2}>
                    {isSpanish ? "English" : "Español"}
                </Text>
                <Switch isChecked={isSpanish} onChange={() => setIsSpanish(!isSpanish)} />
            </Flex>

            <ParallaxLayer offset={0} speed={1} factor={1}>
                <Image src={nebula} alt="stars" opacity={0.9} w="100vw" h="100vh" objectFit="cover" pos="absolute" top={0} left={0} />
            </ParallaxLayer>

            <ParallaxLayer style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw" }}>
                <Text fontFamily="RodItalic" fontSize={fontSize}>
                    {isSpanish ? "HOLA, SOY PATRICIA" : "HI, I'M PATRICIA"}
                </Text>
                {isBase ? (
                    <>
                        <Text fontFamily="Roddenberry" fontSize="2em" textAlign="center">
                            {isSpanish ? "DESARROLLADORA FULLSTACK," : "FULLSTACK DEVELOPER,"}
                        </Text>
                        <Text fontFamily="Roddenberry" fontSize="2em" textAlign="center">
                            {isSpanish ? "DISEÑADORA GRÁFICA & UX-UI" : "UX-UI & GRAPHIC DESIGNER"}
                        </Text>
                    </>
                ) : (
                    <Text fontFamily="Roddenberry" fontSize={fontSize} textAlign="center">
                        {isSpanish ? "DESARROLLADORA FULLSTACK, DISEÑADORA GRÁFICA & UX-UI" : "FULLSTACK DEVELOPER, UX-UI & GRAPHIC DESIGNER"}
                    </Text>
                )}
            </ParallaxLayer>
        </>
    );
};

export default Home;
