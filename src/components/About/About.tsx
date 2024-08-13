import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Text, Box, VStack, useBreakpointValue, Flex, Image } from "@chakra-ui/react";
import { useLanguage } from "../../context/LanguageContext";
import me from "../../assets/Images/me.png";
import nebula2 from "../../assets/Images/nebula3.webp";
import "../../App.scss";

const About: React.FC = () => {
    const boxWidth = useBreakpointValue({ base: "90vw", md: "80vw", lg: "65vw" });
    const fontSizeText = useBreakpointValue({ base: "1em", md: "1.3em", lg: "1.3em" });
    const flexDirection = useBreakpointValue({ base: "column", md: "row" }) as any;
    const { isSpanish } = useLanguage();

    return (
        <>
            <ParallaxLayer offset={0} speed={1.5} factor={1}>
                <Image src={nebula2} alt="nebula" opacity={0.2} w="120vw" h="120vh" objectFit="cover" pos="absolute" top={0} left={0} />
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.5} factor={0.5}>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="100vw" h="100vh" mt={{ base: "0%", md: "1%", lg: "1%" }}>
                    <Text as="b" fontFamily="Ubuntu" fontSize="2em" color="#E0E0E0" mb="2" textShadow="2px 2px 4px black">
                        {isSpanish ? "Sobre Mí" : "About Me"}
                    </Text>
                    <Box w={boxWidth}>
                        <VStack spacing={4} align="start">
                            <Flex direction={flexDirection} align="center">
                                <Image src={me} w={{ base: "50%", md: "20%" }} rounded="full" border="1px solid gray" m="2%" />
                                <Text fontFamily="Ubuntu" fontSize={fontSizeText} color="#E0E0E0" fontWeight="light" textShadow="2px 2px 4px black">
                                    {isSpanish
                                        ? "Hola! soy Patrizia, CPO en Igrowker, Software Developer y Product Designer (UX/UI). Mi trabajo es crear soluciones digitales sostenibles para problemas reales. Al diseñar un producto, utilizo tanto mi formación como mi conocimiento del mercado y del usuario para asegurarme de que cumple con todos los estándares de calidad. Como desarrolladora de software, tengo también los conocimientos técnicos necesarios para llevar a cabo proyectos integrales o supervisarlos en todas sus etapas, desde el diseño y la creación hasta su ejecución y puesta en producción."
                                        : "Hey there! I’m Patrizia. CPO at Igrowker, Software Developer, and Product Designer (UX/UI). My work involves creating sustainable digital solutions for real-world problems. When designing a product, I draw on both my formal training and my understanding of the market and users to ensure it meets all quality standards. As a software developer, I also have the technical expertise to execute full-scale projects or oversee them through all stages, from design and creation to implementation and production."}
                                </Text>
                            </Flex>

                            <Text fontFamily="Ubuntu" fontSize={fontSizeText} color="#E0E0E0" fontWeight="light" textShadow="2px 2px 4px black">
                                {isSpanish
                                    ? "Fuera de la tecnología, y como te habrás dado cuenta, me fascina el universo, pero también soy muy fan de la historia, los documentales y los gatos (tengo tres! 🐱)."
                                    : "Outside of technology, as you might have noticed, I'm fascinated by the universe. I'm also a big fan of history, documentaries, and cats—I have three! 🐱."}
                            </Text>
                        </VStack>
                    </Box>
                </Box>
            </ParallaxLayer>
        </>
    );
};

export default About;
