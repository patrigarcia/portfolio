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

    const fontSizeTitle = { base: "2.5em", md: "2em", lg: "3.2em" };
    const fontSizeSubtitle = { base: "1.6em", md: "1.6em", lg: "2.2em" };

    return (
        <>
            <Flex w="100%" h="100vh" alignItems="center" justifyContent="center" flexDirection="column" mt="-30%" ml="-5%" onMouseMove={handleMouseMove}>
                <Flex direction={{ base: "column", md: "row" }} w="90%" gap={8}>
                    <Box position="relative" w={{ base: "70%", md: "40%" }} h={{ base: "100%", md: "auto" }} ml={{ base: "20%", md: "10%" }} overflow="hidden" mb={{ base: "4", md: "0" }}>
                        <Image src={currentImage} alt="Background" w="100%" h="100%" objectFit="cover" />
                    </Box>

                    <VStack alignItems="flex-start" spacing={4} h={{ base: "50%", md: "auto" }} ml={{ base: "20%", md: "10%" }} justifyContent="center">
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
