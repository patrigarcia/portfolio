import React from "react";
import { Box, Flex, Image, Text, Link, Grid, Card, CardBody, CardFooter, useBreakpointValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import eventum from "../../assets/Images/eventum.gif";
import quizz from "../../assets/Images/musiquizz.gif";
import arcade from "../../assets/Images/inicio.png";
import purrtion from "../../assets/Images/purrtion.gif";
import lg from "../../assets/Images/exp1.png";
import base from "../../assets/Images/exp2.png";
import "../../App.scss";

const Work: React.FC = () => {
    const titleFontSize = { base: "md", md: "lg", lg: "1.4em" };
    const descriptionFontSize = { base: "sm", md: "md", lg: "1 emem" };
    const projectTitleFontSize = { base: "1em", md: "xl", lg: "1.1em" };
    const projectDescriptionFontSize = { base: "0.9em", md: "md", lg: "1em" };
    const src = useBreakpointValue({ base: base, md: lg });

    const projects = [
        {
            src: purrtion,
            alt: "Purrtion",
            description: "Calculadora de ración de comida para gatos. Desarrollada con React, TS, ChakraUI, Axios (llamada a API), Zustand (estados) y desplegada en AWS (S3 y CloudFront).",
            repoUrl: "https://github.com/patrigarcia/Purrtion",
        },
        {
            src: eventum,
            alt: "Eventum App",
            description: "Proyecto para optimizar y automatizar el proceso de gestión de eventos para Marina de Empresas de Valencia. Tecnologías: React, JS, SASS, MySQL, NodeJS, AWS entre otras.",
            repoUrl: "https://github.com/patrigarcia/eventum-front",
        },
        {
            src: arcade,
            alt: "E-commerce Arcade",
            description: "Desarrollado con JS, React, Redux y ChakraUI en frontend. MongoDB, NodeJS, Express y Mongoose para el backend y Jest para los tests.",
            repoUrl: "https://github.com/patrigarcia/e-commerce_frontend",
        },
        {
            src: quizz,
            alt: "Proyecto Musiquizz",
            description: "Juego de preguntas y respuestas. Se utilizó Javascript, HTML5, CSS3, Axios para la llamada a la API y Bootstrap para los estilos.",
            repoUrl: "https://github.com/patrigarcia/Proyect_Quizz",
        },
    ];

    return (
        <>
            <Flex direction="column" align="center" w="100%">
                <Text fontSize={titleFontSize} mb="3%" fontFamily="Quicksand" as="b">
                    Proyectos
                </Text>
                <Box overflowX="auto" w="90%" p={4}>
                    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={4}>
                        {projects.map((project, index) => (
                            <Card key={index} borderRadius="lg" shadow="xl" overflow="hidden" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }} mb={4}>
                                <Image src={project.src} alt={project.alt} w="100%" h="150px" objectFit="cover" />
                                <CardBody>
                                    <Text fontWeight="bold" fontSize={projectTitleFontSize} mb={2} fontFamily="Quicksand">
                                        {project.alt}
                                    </Text>
                                    <Text fontSize={projectDescriptionFontSize} fontFamily="Quicksand" display={{ base: "none", md: "block" }}>
                                        {project.description}
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Link href={project.repoUrl} isExternal color="blue.500" fontFamily="Quicksand" fontSize={projectDescriptionFontSize}>
                                        Click aquí para ver más <ExternalLinkIcon mx="2px" />
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </Grid>
                </Box>
                <Text fontSize={descriptionFontSize} my="2%" fontFamily="Quicksand">
                    Stack de tecnologías que manejo:
                </Text>
                <Box w="80%" mb="5%">
                    <Image src={src} />
                </Box>
            </Flex>
        </>
    );
};

export default Work;
