import { Image, Text, VStack, Flex, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Hi1 from "../../assets/Images/Portada/hi1.png";
import Hi2 from "../../assets/Images/Portada/hi2.png";
import Hi3 from "../../assets/Images/Portada/hi3.png";
import "../../App.scss";
const Home: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(Hi1);
    const handleMouseMove = (e: React.MouseEvent) => {
        const percentage = e.clientX / window.innerWidth;
        if (percentage < 0.33) {
            setCurrentImage(Hi3);
        } else if (percentage < 0.66) {
            setCurrentImage(Hi2);
        } else {
            setCurrentImage(Hi1);
        }
    };
    const fontSizeTitle = { base: "2.5em", md: "4em", lg: "5em" };
    const fontSizeSubtitle = { base: "1.6em", md: "2em", lg: "2.5em" };
    return (
        <>
            <Flex w="100%" h="100vh" alignItems="center" justifyContent="center" flexDirection="column" onMouseMove={handleMouseMove} p={{ base: "0", md: "4", lg: "8" }}>
                <Flex direction={{ base: "column", md: "row" }} w="90%" gap={{ base: 4, md: 8, lg: 8 }} alignItems="center" mt={{ base: -40, md: -300, lg: -150 }}>
                    <Box position="relative" w={{ base: "90%", md: "100%", lg: "40%" }} h="auto" overflow="hidden" ml={{ base: "10%", md: "5%", lg: "6%" }}>
                        <Image src={currentImage} alt="Background" w="100%" h="auto" objectFit="cover" />
                    </Box>
                    <VStack
                        alignItems={{ base: "flex-start", md: "center", lg: "flex-start" }}
                        spacing={{ base: 4, md: 6, lg: 8 }}
                        justifyContent="center"
                        w={{ base: "100%", md: "40%", lg: "60%" }}
                        ml={{ base: "20%", md: "5%", lg: "6%" }}
                    >
                        <Text fontSize={fontSizeTitle} fontFamily="Roddenberry">
                            I'M PATRICIA
                        </Text>
                        <Text fontSize={fontSizeSubtitle} fontFamily="Roddenberry">
                            FULLSTACK DEVELOPER
                        </Text>
                        <Text fontSize={fontSizeSubtitle} fontFamily="Roddenberry">
                            UX-UI & GRAPHIC DESIGNER
                        </Text>
                    </VStack>
                </Flex>
            </Flex>
        </>
    );
};
export default Home;
