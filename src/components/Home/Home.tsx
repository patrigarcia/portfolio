import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Text, Flex, Box, Image, useBreakpointValue, VStack } from "@chakra-ui/react";
import Typing from "../Typing/Typing";

const Home: React.FC = () => {
    const fontSize = useBreakpointValue({ base: "2.4em", md: "2em", lg: "3.2em" });
    const fontFamily = "Ubuntu, sans-serif";
    const flexDirection = useBreakpointValue<"column" | "row">({ base: "column", md: "row" }); // Cambia la dirección en función del tamaño de la pantalla
    const textAlign = useBreakpointValue<"center" | "start">({ base: "start", md: "start" }); // Ajusta la alineación del texto

    return (
        <>
            <ParallaxLayer offset={0} speed={1.5} factor={1}>
                <Image
                    src="/assets/Images/nebula4.svg"
                    alt="background"
                    position="absolute"
                    top={20}
                    left={{ base: "0", md: "10vw", lg: "10vw" }}
                    w={{ base: "100vw", md: "80vw", lg: "80vw" }}
                    height="80vh"
                    opacity="0.4"
                    objectFit="cover"
                />
            </ParallaxLayer>

            <ParallaxLayer
                offset={0}
                speed={1}
                factor={0.2}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    height: "85vh",
                    width: "100vw",
                    position: "relative",
                }}
            >
                <Flex mt="10vh" direction={flexDirection} alignItems="center" ml={{ base: "0", md: "0", lg: "22%" }}>
                    <Image
                        src="/assets/Images/me.png"
                        alt="Me"
                        boxSize={{ base: "200px", md: "200px", lg: "450px" }}
                        objectFit="cover"
                        mb={{ base: 4, md: 0 }} 
                    />
                    <VStack align="flex-start" spacing={0} ml={{ base: 20, md: 4 }} textAlign={textAlign}>
                        <Text as="b" fontSize={fontSize} fontFamily={fontFamily}>
                            Patricia
                        </Text>
                        <Text as="b" fontSize={fontSize} fontFamily={fontFamily}>
                            González  García
                        </Text>
                        <Box minHeight="40px" display="flex" alignItems="start" justifyContent="start" mt={3}>
                            <Text fontFamily={fontFamily} fontSize={{ base: "1.2em", md: "3em", lg: "2.2em" }} textAlign="start">
                                <Typing />
                            </Text>
                        </Box>
                    </VStack>
                </Flex>
            </ParallaxLayer>
        </>
    );
};

export default Home;
