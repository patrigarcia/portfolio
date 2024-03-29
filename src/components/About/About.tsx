import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Image, Text, Box, VStack, useBreakpointValue, HStack } from "@chakra-ui/react";

import { useLanguage } from "../../context/LanguageContext";
import nebula2 from "../../assets/Images/nebula2.svg";
import earth from "../../assets/Images/earth.svg";
import banner from "../../assets/Images/banner.png";
import me from "../../assets/Images/me.png";
import "../../App.scss";

const About: React.FC = () => {
    const planetSize = useBreakpointValue({ base: "20vh", md: "25vh", lg: "30vh" });
    const boxWidth = useBreakpointValue({ base: "90vw", md: "80vw", lg: "65vw" });
    const fontSizeText = useBreakpointValue({ base: "1em", md: "1.3em", lg: "1.3em" });
    const { isSpanish } = useLanguage();

    return (
        <>
            <ParallaxLayer offset={0.9} speed={1} factor={1}>
                <Image src={nebula2} alt="nebula" opacity={0.9} w="120vw" h="120vh" objectFit="cover" pos="absolute" top={0} left={0} />
            </ParallaxLayer>
            <ParallaxLayer offset={0.8} speed={1} factor={0.9}>
                <Image src={earth} alt="me" w={planetSize} objectFit="cover" mt="4%" ml="5%" />
            </ParallaxLayer>

            <ParallaxLayer>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="100vw" h="100vh" mt={{ base: "0%", md: "1%", lg: "1%" }}>
                    <Text as="b" fontFamily="Roddenberry" fontSize="2em" color="#E0E0E0" mb="2">
                        {isSpanish ? "Sobre Mí" : "About Me"}
                    </Text>
                    <Box bgColor="gray.700" p={4} borderRadius="2xl" boxShadow="5xl" w={boxWidth} opacity="0.9">
                        <VStack spacing={4} align="start">
                            <HStack>
                                <Image src={me} w="20%" rounded="full" border="1px solid gray" m="2%" />
                                <Text fontFamily="Quicksand" fontSize={fontSizeText} color="#E0E0E0" as="b">
                                    {isSpanish
                                        ? "Hola! soy Patrizia, Software Developer y Product Designer (UX/UI). Tengo experiencia con un amplio stack de tecnologías y si bien el frontend me encanta por su inmediatez, tambien me dedico al backend. Trato de entender a fondo qué necesitan quienes confían en mi trabajo, transformando esas expectativas en realidades."
                                        : "Hey there! I'm Patrizia, I work in Software development, product design and UX. I have experience with a wide stack of technologies and although I love the frontend for its immediacy, I am also dedicated to the backend. I try to thoroughly understand what those who trust my work need, transforming those expectations into realities."}
                                </Text>
                            </HStack>

                            <Text fontFamily="Quicksand" fontSize={fontSizeText} color="#E0E0E0" as="b">
                                {isSpanish
                                    ? "Fuera de la tecnología, y como te habrás dado cuenta, me fascina el universo, pero también soy muy fan de la historia, los documentales y los gatos (tengo tres! 🐱)."
                                    : "I work with the following technological stack:"}
                            </Text>
                            <Image src={banner} opacity="0.7" />
                        </VStack>
                    </Box>
                </Box>
            </ParallaxLayer>
        </>
    );
};

export default About;
