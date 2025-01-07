import React from "react";
import { Text, Box, VStack, useBreakpointValue, Flex, Image } from "@chakra-ui/react";
import { useLanguage } from "../../context/LanguageContext";
import me from "../../assets/Images/me.png";
import "../../App.scss";

const About: React.FC = () => {
    const boxWidth = useBreakpointValue({ base: "90vw", md: "80vw", lg: "65vw" });
    const fontSizeText = useBreakpointValue({ base: "1em", md: "1.3em", lg: "1.3em" });
    const flexDirection = useBreakpointValue({ base: "column", md: "row" }) as any;
    const { isSpanish } = useLanguage();

    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center" 
            w="100%" 
            h="100vh" 
            mt={{ base: "0%", md: "1%", lg: "1%" }}
            px={4}
        >
            <Text as="b" fontFamily="Ubuntu" fontSize="2em" color="#4A5568" mb="2">
                {isSpanish ? "Sobre Mí" : "About Me"}
            </Text>
            <Box w={boxWidth}>
                <VStack spacing={4} align="start">
                    <Flex direction={flexDirection} align="center">
                        <Image src={me} w={{ base: "50%", md: "20%" }} rounded="full" border="1px solid #CBD5E0" m="2%" />
                        <Text fontFamily="Ubuntu" fontSize={fontSizeText} color="#4A5568" fontWeight="light">
                            {isSpanish
                                ? "Hola! soy Patrizia, CPO en Igrowker, Software Developer y Product Designer (UX/UI). Mi trabajo es crear soluciones digitales sostenibles para problemas reales. Al diseñar un producto, utilizo tanto mi formación como mi conocimiento del mercado y del usuario para asegurarme de que cumple con todos los estándares de calidad. Como desarrolladora de software, tengo también los conocimientos técnicos necesarios para llevar a cabo proyectos integrales o supervisarlos en todas sus etapas, desde el diseño y la creación hasta su ejecución y puesta en producción."
                                : "Hey there! I'm Patrizia. CPO at Igrowker, Software Developer, and Product Designer (UX/UI). My work involves creating sustainable digital solutions for real-world problems. When designing a product, I draw on both my formal training and my understanding of the market and users to ensure it meets all quality standards. As a software developer, I also have the technical expertise to execute full-scale projects or oversee them through all stages, from design and creation to implementation and production."}
                        </Text>
                    </Flex>

                    <Text fontFamily="Ubuntu" fontSize={fontSizeText} color="#4A5568" fontWeight="light">
                        {isSpanish
                            ? "Fuera de la tecnología, y como te habrás dado cuenta, me fascina el universo, pero también soy muy fan de la historia, los documentales y los gatos (tengo tres! 🐱)."
                            : "Outside of technology, as you might have noticed, I'm fascinated by the universe. I'm also a big fan of history, documentaries, and cats—I have three! 🐱."}
                    </Text>
                </VStack>
            </Box>
        </Box>
    );
};

export default About;
