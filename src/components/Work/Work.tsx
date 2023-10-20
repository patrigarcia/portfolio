import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Image, Card, CardBody, Stack, Divider, Text, Button, CardFooter, Heading, Grid, Link, useBreakpointValue } from "@chakra-ui/react";
import { useLanguage } from "../../context/LanguageContext";

const Work: React.FC = () => {
    const { isSpanish } = useLanguage();
    const cardWidth = useBreakpointValue({ base: "95%", md: "90%", lg: "90%" });
    const gridWidth = useBreakpointValue({ base: "95%", md: "90%", lg: "60%" });
    const gridColumns = useBreakpointValue({ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" });
    const planetSize = useBreakpointValue({ base: "40vh", md: "60vh", lg: "60vh" });
    const textSizeCard = useBreakpointValue({ base: "1em", md: "1.4em", lg: "1.5em" });

    return (
        <>
            <ParallaxLayer offset={0.95} speed={0.5} factor={1}>
                <Image src="src/assets/Images/nebula3.svg" alt="stars" opacity={0.9} w="110vw" h="110vh" objectFit="cover" pos="absolute" top={0} left={0} />
            </ParallaxLayer>

            <ParallaxLayer offset={0.99} speed={0.55} factor={1}>
                <Image src="src/assets/Images/naranja.svg" alt="me" w={planetSize} ml={{ base: "2.5%", md: "-2%", lg: "1%" }} objectFit="cover" />
            </ParallaxLayer>

            <ParallaxLayer>
                <Text fontFamily="Roddenberry" fontSize="2em" color="#E0E0E0" ml={{ base: "4%", md: "5%", lg: "15%" }} mt="10%">
                    {isSpanish ? "Portfolio" : "Portfolio"}
                </Text>
                <Grid templateColumns={gridColumns} w={gridWidth} ml={{ base: "2.5%", md: "5%", lg: "20%" }} mt="3%">
                    <Card w={cardWidth} mb="5%">
                        <CardBody>
                            <Image src="src/assets/Images/eventum.gif" borderRadius="lg" />
                            <Stack mt="6" spacing="3">
                                <Heading size={textSizeCard}>Eventum</Heading>
                                <Text size={textSizeCard}>
                                    {isSpanish
                                        ? "Eventum es una aplicación diseñada para optimizar y automatizar el proceso de creación, gestión y confirmación de eventos en Marina de Empresas."
                                        : "Eventum is an application designed to optimize and automate the process of creating, managing, and confirming events at Marina de Empresas."}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter display="flex" justifyContent="center" w="100%">
                            <Link href="https://github.com/patrigarcia/eventum-front" isExternal>
                                <Button w="100%" variant="solid" colorScheme="blue">
                                    {isSpanish ? "Ver en Github" : "See it on Github"}
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card w={cardWidth} mb="5%">
                        <CardBody>
                            <Image src="src/assets/Images/inicio.png" borderRadius="lg" />
                            <Stack mt="6" spacing="3">
                                <Heading size={textSizeCard}>Arcade</Heading>
                                <Text size={textSizeCard}>
                                    {isSpanish
                                        ? "E-commerce para la venta de videojuegos y accesorios, con categorías, filtros, vista de usuario y vista de administrador."
                                        : "E-commerce for the sale of video games and accessories, with categories, filters, user view and administrator view."}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter display="flex" justifyContent="center" w="100%">
                            <Link href="https://github.com/patrigarcia/e-commerce_frontend" isExternal>
                                <Button w="100%" variant="solid" colorScheme="blue">
                                    {isSpanish ? "Ver en Github" : "See it on Github"}
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card w={cardWidth} mb="5%">
                        <CardBody>
                            <Image src="src/assets/Images/musiquizz.gif" borderRadius="lg" />
                            <Stack mt="6" spacing="3">
                                <Heading size={textSizeCard}>MusiQuizz</Heading>
                                <Text size={textSizeCard}>
                                    {isSpanish ? "En este proyecto se ha desarrollado un juego de preguntas y respuestas." : "In this project, a question and answer game has been developed."}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter display="flex" justifyContent="center" w="100%">
                            <Link href="https://github.com/patrigarcia/Proyect_Quizz" isExternal>
                                <Button w="100%" variant="solid" colorScheme="blue">
                                    {isSpanish ? "Ver en Github" : "See it on Github"}
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </Grid>
            </ParallaxLayer>
        </>
    );
};

export default Work;
