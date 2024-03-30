import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Image, Text, Box, VStack, useBreakpointValue, Flex } from "@chakra-ui/react";
import { useLanguage } from "../../context/LanguageContext";
import nebula2 from "../../assets/Images/nebula2.webp";
import earth from "../../assets/Images/earth.webp";
import banner from "../../assets/Images/banner.png";
import me from "../../assets/Images/me.png";
import "../../App.scss";

const About: React.FC = () => {
    const planetSize = useBreakpointValue({ base: "20vh", md: "25vh", lg: "30vh" });
    const boxWidth = useBreakpointValue({ base: "90vw", md: "80vw", lg: "65vw" });
    const fontSizeText = useBreakpointValue({ base: "1em", md: "1.3em", lg: "1.3em" });
    const flexDirection = useBreakpointValue({ base: "column", md: "row" }) as any; // Ajuste aquí para resolver el error de tipo
    const { isSpanish } = useLanguage();

    return (
        <>
            <ParallaxLayer offset={0.9} speed={1} factor={1}>
                <Image src={nebula2} alt="nebula" opacity={0.9} w="120vw" h="120vh" objectFit="cover" pos="absolute" top={0} left={0} />
            </ParallaxLayer>
            <ParallaxLayer offset={0.8} speed={1} factor={0.9}>
                <Image src={earth} alt="earth" w={planetSize} objectFit="cover" mt="4%" ml="5%" />
            </ParallaxLayer>

            <ParallaxLayer>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="100vw" h="100vh" mt={{ base: "0%", md: "1%", lg: "1%" }}>
                    <Text as="b" fontFamily="Roddenberry" fontSize="2em" color="#E0E0E0" mb="2">
                        {isSpanish ? "Sobre Mí" : "About Me"}
                    </Text>
                    <Box bgColor="gray.700" p={4} borderRadius="md" boxShadow="5xl" w={boxWidth}>
                        <VStack spacing={4} align="start">
                            <Flex direction={flexDirection} align="center">
                                <Image src={me} w={{ base: "50%", md: "20%" }} rounded="full" border="1px solid gray" m="2%" />
                                <Text fontFamily="Quicksand" fontSize={fontSizeText} color="#E0E0E0">
                                    {isSpanish
                                        ? "Hola! soy Patrizia, Software Developer y Product Designer (UX/UI). Tengo experiencia con un amplio stack de tecnologías y si bien el frontend me encanta por su inmediatez, también me dedico al backend. Trato de entender a fondo qué necesitan quienes confían en mi trabajo, transformando esas expectativas en realidades."
                                        : "Hey there! I’m Patrizia. I delve into software development, product design, and UX, wielding a broad spectrum of technologies. While the immediacy of frontend development captures my heart, I’m equally committed to mastering the backend. My aim? To deeply understand the needs of those who entrust their projects to me, turning their expectations into tangible realities."}
                                </Text>
                            </Flex>

                            <Text fontFamily="Quicksand" fontSize={fontSizeText} color="#E0E0E0">
                                {isSpanish
                                    ? "Fuera de la tecnología, y como te habrás dado cuenta, me fascina el universo, pero también soy muy fan de la historia, los documentales y los gatos (tengo tres! 🐱)."
                                    : "Outside of technology, as you might have noticed, I'm fascinated by the universe. I'm also a big fan of history, documentaries, and cats—I have three! 🐱."}
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
