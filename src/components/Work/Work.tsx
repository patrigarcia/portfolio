import React from "react";
import { Box, HStack, Image, Text, VStack, Button } from "@chakra-ui/react";
import "../../App.scss";

const Work: React.FC = () => {
    // Definición de tamaños de fuente en variables
    const titleFontSize = { base: "md", md: "lg", lg: "1.2em" };
    const descriptionFontSize = { base: "sm", md: "md", lg: "1.1em" };
    const projectTitleFontSize = { base: "1em", md: "xl", lg: "1.1em" };
    const projectDescriptionFontSize = { base: "0.9em", md: "md", lg: "1.1em" };

    const projects = [
        {
            src: "src/assets/Images/eventum.gif",
            alt: "Eventum App",
            description: "Eventum es una aplicación diseñada para optimizar y automatizar el proceso de creación, gestión y confirmación de eventos en Marina de Empresas.",
            repoUrl: "https://github.com/patrigarcia/eventum-front",
        },
        {
            src: "src/assets/Images/inicio.png",
            alt: "E-commerce Arcade",
            description: "Arcade es una plataforma e-commerce que ofrece una interfaz de usuario y una vista administrativa, permitiendo la gestión de ventas y la aplicación de diversos filtros.",
            repoUrl: "https://github.com/patrigarcia/e-commerce_frontend",
        },
        {
            src: "src/assets/Images/musiquizz.gif",
            alt: "Proyecto Musiquizz",
            description: "En este proyecto se desarrolló un juego de preguntas y respuestas. Se implementaron las funciones necesarias para ejecutar el código de la manera más eficiente posible.",
            repoUrl: "https://github.com/patrigarcia/Proyect_Quizz",
        },
    ];

    return (
        <>
            <Text fontSize={titleFontSize} mb={2} ml="5%" fontFamily="Quicksand" as="b">
                Portfolio
            </Text>
            <Text fontSize={descriptionFontSize} mb="4%" ml="5%" w="90%" fontFamily="Quicksand">
                Aquí presento una selección de proyectos en los que he empleado Javascript, NodeJs, React, MongoDB, MySQL, HTML y CSS. Además, he utilizado frameworks y bibliotecas como Chakra UI y
                Bootstrap para garantizar una experiencia de usuario óptima y un diseño atractivo.
            </Text>
            <Box overflowX="auto" w="90%" p={4} ml={{ base: "3%", md: "2%", lg: "5%" }}>
                <HStack spacing={4}>
                    {projects.map((project, index) => (
                        <VStack key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" minW="300px" mb={4}>
                            <Image src={project.src} alt={project.alt} w="100%" h="200px" objectFit="cover" />
                            <Box p="6">
                                <Text fontWeight="bold" fontSize={projectTitleFontSize} mb={2} fontFamily="Quicksand">
                                    {project.alt}
                                </Text>
                                <Text fontSize={projectDescriptionFontSize} color="gray.600" mb={4} fontFamily="Quicksand">
                                    {project.description}
                                </Text>
                                <Button as="a" href={project.repoUrl} target="_blank" colorScheme="blue" mb={2} width="full" mt="4%" fontFamily="Quicksand">
                                    Ver en GitHub
                                </Button>
                            </Box>
                        </VStack>
                    ))}
                </HStack>
            </Box>
        </>
    );
};

export default Work;
