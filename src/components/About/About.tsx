import React from "react";
import { Text, Box, VStack, useBreakpointValue, Flex, Image, Grid, GridItem } from "@chakra-ui/react";
import { useLanguage } from "../../context/LanguageContext";

import up from "../../assets/Images/up.webp";
import edem from "../../assets/Images/edem.png";
import uxer from "../../assets/Images/uxer.png";
import "../../App.scss";

const About: React.FC = () => {
  const boxWidth = useBreakpointValue({ base: "90vw", md: "80vw", lg: "65vw" });
  const fontSizeText = useBreakpointValue({ base: "1em", md: "1.3em", lg: "1.3em" });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" }) as any;
  const { isSpanish } = useLanguage();

  const educationCards = [
    {
      image: up,
      title: isSpanish ? "Ingeniería en Informática" : "IT Engineering",
      institution: isSpanish ? "Universidad de Palermo" : "Universidad de Palermo",
      alt: "UP Logo",
    },
    {
      image: edem,
      title: isSpanish ? "Desarrollo de Software" : "Software Development",
      institution: isSpanish ? "EDEM Escuela de Empresarios" : "EDEM Escuela de Empresarios",
      alt: "EDEM Logo",
    },
    {
      image: uxer,
      title: isSpanish ? "Diseño de Producto" : "Product Designer",
      institution: isSpanish ? "UXER School" : "UXER School",
      alt: "UXER Logo",
    },
  ];

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      w="100%" 
      minH="100vh"
      py={{ base: 8, md: 16 }}
      px={4}
    >
      <Text as="b" fontFamily="Ubuntu" fontSize="2em" color="#4A5568" mb="2">
        {isSpanish ? "Sobre Mí" : "About Me"}
      </Text>
      <Box w={boxWidth}>
        <VStack spacing={{ base: 4, md: 6 }} align="start">
          <Flex direction={flexDirection} align="center">
            <Text fontFamily="Ubuntu" fontSize={fontSizeText} color="#4A5568" fontWeight="light">
              {isSpanish
                ? "Me desempeño como CPO en Igrowker, soy Product Engineer y Software Developer. Mi trabajo consiste en crear soluciones digitales sostenibles para problemas reales, abarcando todo el ciclo de vida del producto: desde la conceptualización y el diseño, pasando por el desarrollo y la supervisión, hasta su ejecución y puesta en producción.\n\nAl diseñar un producto, integro tanto mi formación técnica como mi conocimiento del mercado y del usuario para garantizar que cumpla con los más altos estándares de calidad. Además, me aseguro de que cada proyecto se alinee con los objetivos estratégicos, ajustándose al roadmap, los plazos y los presupuestos establecidos, optimizando recursos y asegurando un impacto real."
                : "I'm the CPO at Igrowker, as well as a Product Engineer and Software Developer. My work focuses on creating sustainable digital solutions for real-world problems, covering the entire product lifecycle: from conceptualization and design, through development and supervision, to execution and production release.\n\nWhen designing a product, I combine my technical expertise with market and user insights to ensure it meets the highest quality standards. Additionally, I ensure that each project aligns with strategic goals, adhering to the roadmap, timelines, and budgets, optimizing resources, and ensuring meaningful impact."}
            </Text>
          </Flex>
          <Text fontFamily="Ubuntu" fontSize={fontSizeText} color="#4A5568" fontWeight="bold" mt={{ base: 6, md: 8 }}>
            {isSpanish ? "Tengo estudios en:" : "I have studied:"}
          </Text>
          <Grid 
            templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={{ base: 4, md: 6 }}
            w="100%"
            mt={{ base: 2, md: 4 }}
          >
            {educationCards.map((card, index) => (
              <GridItem key={index}>
                <Box
                  bg="rgba(255, 255, 255, 0.03)"
                  borderRadius="lg"
                  overflow="hidden"
                  transition="transform 0.2s ease"
                  _hover={{ transform: "translateY(-2px)" }}
                  boxShadow="0 2px 4px rgba(0, 0, 0, 0.05)"
                  height={{ base: "auto", md: "180px" }}
                  display="flex"
                  flexDirection="column"
                >
                  <Box
                    h={{ base: "80px", md: "100px" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    p={4}
                    bg="rgba(255, 255, 255, 0.01)"
                  >
                    <Image
                      src={card.image}
                      alt={card.alt}
                      maxH={{ base: "50px", md: "70px" }}
                      objectFit="contain"
                    />
                  </Box>
                  <VStack p={4} spacing={1} align="center" flex="1" justifyContent="center">
                    <Text
                      color="#4A5568"
                      fontSize={{ base: "xs", md: "sm" }}
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {card.title}
                    </Text>
                    <Text
                      color="#4A5568"
                      fontSize={{ base: "2xs", md: "xs" }}
                      textAlign="center"
                    >
                      {card.institution}
                    </Text>
                  </VStack>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Box>
    </Box>
  );
};

export default About;
