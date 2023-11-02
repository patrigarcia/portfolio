import React from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import "../../App.scss";

const Work: React.FC = () => {
    const projects = [
        {
            src: "src/assets/Images/eventum.gif",
            alt: "Eventum App",
            description: "Eventum es una aplicación diseñada para optimizar y automatizar el proceso de creación, gestión y confirmación de eventos en Marina de Empresas.",
        },
        {
            src: "src/assets/Images/inicio.png",
            alt: "E-commerce Arcade",
            description: "Arcade es una plataforma e-commerce que ofrece una interfaz de usuario y una vista administrativa, permitiendo la gestión de ventas y la aplicación de diversos filtros.",
        },
        {
            src: "src/assets/Images/musiquizz.gif",
            alt: "Proyecto Musiquizz",
            description: "En este proyecto se desarrolló un juego de preguntas y respuestas.Se implementaron las funciones necesarias para ejecutar el código de la manera más eficiente posible.",
        },
    ];

    return (
        <Box overflowX="auto" w="100%" p={4}>
            <Text fontSize="lg" mb={2}>
                Portfolio
            </Text>
            <Text fontSize="sm" mb="8%">
                Aquí presento una selección de proyectos en los que he empleado Javascript, NodeJs, React, MongoDB, MySQL, HTML y CSS. Además, he utilizado frameworks y bibliotecas como Chakra UI y
                Bootstrap para garantizar una experiencia de usuario óptima y un diseño atractivo.
            </Text>
            <HStack spacing={4}>
                {projects.map((project, index) => (
                    <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" minW="300px" mb={4}>
                        <Image src={project.src} alt={project.alt} w="100%" h="200px" objectFit="cover" />
                        <Box p="6">
                            <Text fontWeight="bold" fontSize="xl" mb={2}>
                                {project.alt}
                            </Text>
                            <Text fontSize="md" color="gray.600">
                                {project.description}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </HStack>
        </Box>
    );
};

export default Work;
