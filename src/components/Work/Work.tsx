import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Image, Card, Text, Button, Flex, Box, Heading, Grid, Link, useBreakpointValue } from "@chakra-ui/react";
import { useLanguage } from "../../context/LanguageContext";
import nebula3 from "../../assets/Images/nebula3.webp";
import naranja from "../../assets/Images/naranja.webp";
import eventum from "../../assets/Images/eventum.gif";
import arcade from "../../assets/Images/inicio.png";
import musiquizz from "../../assets/Images/musiquizz.gif";
import purrtion from "../../assets/Images/gifPurr.gif";
import "../../App.scss";

const Work: React.FC = () => {
    const { isSpanish } = useLanguage();
    const cardWidth = useBreakpointValue({ base: "95%", md: "90%", lg: "90%" });
    const gridWidth = useBreakpointValue({ base: "95%", md: "90%", lg: "60%" });
    const gridColumns = useBreakpointValue({
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(2, 1fr)",
    });
    const planetSize = useBreakpointValue({ base: "40vh", md: "60vh", lg: "60vh" });
    const textSizeCard = useBreakpointValue({ base: "0.9em", md: "1em", lg: "1em" });

    return (
        <>
            <ParallaxLayer offset={0.95} speed={0.5} factor={1}>
                <Image src={nebula3} alt="stars" opacity={0.9} w="110vw" h="110vh" objectFit="cover" pos="absolute" top={0} left={0} />
            </ParallaxLayer>

            <ParallaxLayer offset={0.99} speed={0.55} factor={1}>
                <Image src={naranja} alt="me" w={planetSize} ml={{ base: "2.5%", md: "-2%", lg: "1%" }} objectFit="cover" />
            </ParallaxLayer>

            <ParallaxLayer>
                <Text fontFamily="Roddenberry" fontSize="2em" color="#E0E0E0" ml={{ base: "7%", md: "5%", lg: "45%" }} mt="10%">
                    {isSpanish ? "Portfolio" : "Portfolio"}
                </Text>
                <Grid templateColumns={gridColumns} w={gridWidth} ml={{ base: "5%", md: "5%", lg: "20%" }} mt="3%" mb="90%">
                    {[
                        {
                            src: eventum,
                            title: "Eventum",
                            description: isSpanish ? "Optimiza y automatiza la gestión de eventos." : "Optimizes and automates the events managing.",
                            link: "https://github.com/patrigarcia/eventum-front",
                        },
                        {
                            src: arcade,
                            title: "Arcade",
                            description: isSpanish ? "Tienda e-commerce de accesorios para videojuegos" : "Video game accessories e-commerce store",
                            link: "https://github.com/patrigarcia/e-commerce_frontend",
                        },
                        {
                            src: musiquizz,
                            title: "MusiQuizz",
                            description: isSpanish ? "Juego de preguntas y respuestas." : "A question and answer game.",
                            link: "https://github.com/patrigarcia/Proyect_Quizz",
                        },
                        {
                            src: purrtion,
                            title: "Purrtion",
                            description: isSpanish ? "Calculadora de alimento para gatos." : "A cat food calculator.",
                            link: "https://github.com/patrigarcia/Purrtion",
                        },
                    ].map((project, index) => (
                        <Card key={index} display="flex" flexDirection="row" overflow="hidden" variant="outline" w={cardWidth} mb="5%">
                            <Image
                                src={project.src}
                                alt={project.title}
                                objectFit="cover"
                                maxW={{ base: "50%", sm: "200px", md: "250px" }}
                                flexShrink={0}
                                transition="0.3s ease-in-out"
                                _hover={{ transform: "scale(1.05)" }}
                            />

                            <Flex direction="column" justifyContent="space-between" p="4" width={{ base: "70%", sm: "auto" }} flexGrow={1}>
                                <Box>
                                    <Heading size={textSizeCard}>{project.title}</Heading>
                                    <Text fontSize={textSizeCard}>{project.description}</Text>
                                </Box>
                                <Flex justifyContent="flex-end">
                                    <Link href={project.link} isExternal>
                                        <Button variant="solid" colorScheme="purple" mt="4vh">
                                            Ver código
                                        </Button>
                                    </Link>
                                </Flex>
                            </Flex>
                        </Card>
                    ))}
                </Grid>
            </ParallaxLayer>
        </>
    );
};

export default Work;
