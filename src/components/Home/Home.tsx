import React, { useState, useEffect } from "react";
import { Text, VStack, Image, Box, Button, Link as Enlace } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import image2 from "../../assets/Images/2.svg";
import pdf from "../../assets/Pdf/CV.pdf";
import "./Home.sass";

const Home: React.FC = () => {
    const fontSizeTitle: { [key: string]: string } = { base: "2.5em", md: "4em", lg: "4em" };
    const fontSizeSubtitle: { [key: string]: string } = { base: "1.6em", md: "2em", lg: "2em" };

    const [textShadow, setTextShadow] = useState<string>("");

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const { left, top, width, height } = document.documentElement.getBoundingClientRect();
            const deltaX = ((clientX - left - width / 2) * 3) / width;
            const deltaY = ((clientY - top - height / 2) * 3) / height;

            const shadow1 = `${deltaX * 10}px ${deltaY * 10}px 10px rgba(143, 0, 255, 0.5)`;
            const shadow2 = `${-deltaX * 10}px ${-deltaY * 10}px 10px rgba(109, 255, 220, 0.5)`;
            setTextShadow(`${shadow1}, ${shadow2}`);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <VStack alignItems="center" spacing={{ base: 4, md: 6, lg: 2 }} justifyContent="center" w="100%" m="0 auto" mt="5%">
                <Link to="/">
                    <Image src={image2} borderRadius="full" boxSize={{ base: "150px", md: "250px", lg: "200px" }} objectFit="cover" m={{ base: "auto", md: "auto", lg: "auto" }} />
                </Link>
                <Text className="glow-text" style={{ textShadow: textShadow }} fontSize={fontSizeTitle} fontFamily="Roddenberry">
                    PATRICIA GONZÁLEZ GARCÍA
                </Text>

                <Text className="gradient-text" fontSize={fontSizeSubtitle} fontFamily="Roddenberry">
                    FRONTEND DEVELOPER
                </Text>

                <Text fontSize={fontSizeSubtitle} fontFamily="Roddenberry">
                    BFF | Designer
                </Text>
                <Box mt="5%" fontFamily="Quicksand">
                    <Enlace href={pdf} download>
                        <Button>Descargar CV</Button>
                    </Enlace>
                </Box>
            </VStack>
        </>
    );
};

export default Home;
