import React from "react";
import { Text, VStack, Image, Box, Grid, GridItem, Stack } from "@chakra-ui/react";
import me from "../../assets/Images/patri.svg";
import banner from "../../assets/Images/tech.png";
import { Link } from "react-router-dom";
import SkillChart from "../SkillChart/SkillChart";

const About: React.FC = () => {
    const baseFontSize = "0.9em";
    const mediumFontSize = "1.2em";
    const largeFontSize = "1.2em";

    return (
        <Box p={4} width="100%">
            <Grid templateColumns={{ md: "30% 70%", lg: "30% 70%" }} gap={4} display={{ base: "block", md: "grid", lg: "grid" }}>
                <GridItem>
                    <Link to="/">
                        <Image src={me} borderRadius="full" w={{ base: "40%", md: "80%", lg: "60%" }} objectFit="cover" ml={{ base: "30%", md: "20%", lg: "25%" }} />
                    </Link>
                </GridItem>
                <GridItem>
                    <VStack align={{ base: "center", md: "center", lg: "start" }} spacing={4} w={{ base: "100%", md: "90%", lg: "90%" }}>
                        <Text fontSize="1.2em" fontFamily="Quicksand" as="b">
                            Sobre mí
                        </Text>
                        <Text fontSize={[baseFontSize, mediumFontSize, largeFontSize]} fontFamily="Quicksand" textAlign="justify">
                            Soy Patricia, diseñadora gráfica convertida en desarrolladora fullstack. Mi camino es un entramado de creatividad y código, siempre balanceando la estética del frontend con
                            la lógica del backend y las bases de datos. Fuera del trabajo, me podés encontrar mirando documentales o jugando con mis gatos.
                        </Text>
                        <Text
                            fontSize={[baseFontSize, mediumFontSize, largeFontSize]}
                            fontFamily="Quicksand"
                            bgGradient="linear(to-br, #8F00FF, #6DFFDC)"
                            p={2}
                            borderRadius="lg"
                            textAlign="center"
                            as="b"
                        >
                            Dato curioso: ¡También soy pastelera y super fan de Star Trek! Y sí, sueño con las infinitas posibilidades que la tecnología nos puede llevar a explorar.
                        </Text>
                    </VStack>
                </GridItem>
            </Grid>
            <Stack
                direction={{ base: "column", md: "row", lg: "row" }}
                spacing={{ base: 4, md: 4, lg: 4 }}
                mt={{ base: "10%", md: "5%", lg: "5%" }}
                ml={{ base: "5%", md: "5%", lg: "5%" }}
                mb={{ base: "10%", md: "5%", lg: "5%" }}
                align={{ base: "center", md: "center", lg: "center" }}
                justify={{ base: "center", md: "space-between", lg: "space-between" }}
                w="90%"
            >
                <Box w={{ base: "100%", md: "50%", lg: "45%" }}>
                    <SkillChart />
                </Box>
                <VStack spacing={4} align={{ base: "center", md: "start" }} w={{ base: "100%", md: "50%", lg: "45%" }}>
                    <Text fontSize={[baseFontSize, mediumFontSize, largeFontSize]} fontFamily="Quicksand" as="b">
                        Tecnologías que manejo:
                    </Text>
                    <Image src={banner} w="100%" objectFit="cover" />
                </VStack>
            </Stack>
        </Box>
    );
};

export default About;
