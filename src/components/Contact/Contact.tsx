import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Image, HStack, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button, Center, Box, Grid, Link, GridItem, Icon, Text, Divider, useBreakpointValue } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { FaFileDownload, FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const Contacto: React.FC = () => {
    const tamañoPlaneta = useBreakpointValue({ base: "45vh", md: "65vh", lg: "70vh" });
    const { isSpanish } = useLanguage();

    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        mensaje: "",
    });

    useEffect(() => {
        emailjs.init("bvDBvu4Pi9I0-T3E6");
    }, []);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailjs.init("bvDBvu4Pi9I0-T3E6");
        emailjs.sendForm("service_gyrtooi", "template_pr60cyd", event.currentTarget).then(
            function () {
                console.log("SUCCESS!");
                alert(isSpanish ? "Mensaje enviado con éxito" : "Message sent successfully");
                setFormData({ nombre: "", correo: "", mensaje: "" });
            },
            function (error) {
                console.log("FAILED...", error);
                alert(isSpanish ? "Error al enviar el mensaje" : "Failed to send message");
            }
        );
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            <ParallaxLayer offset={1} speed={0.5} factor={1}>
                <Image src="src/assets/Images/nebula4.svg" alt="estrellas" opacity={0.9} w="100vw" h="100vh" objectFit="cover" pos="absolute" top={0} left={0} />
            </ParallaxLayer>

            <ParallaxLayer>
                <Image src="src/assets/Images/violeta.svg" alt="yo" w={tamañoPlaneta} objectFit="cover" ml="-12%" />
            </ParallaxLayer>

            <ParallaxLayer>
                <Center w="100vw" h="100vh">
                    <Box bgColor="gray.700" p={8} borderRadius="xl" w={{ base: "80%", md: "60%", lg: "30%" }}>
                        <Grid templateColumns={{ base: "1fr", md: "repeat(1, 2fr)" }} gap={6}>
                            <GridItem>
                                <form id="contact-form" onSubmit={handleFormSubmit}>
                                    <VStack spacing={4}>
                                        <Input type="hidden" name="contact_number" value={(Math.random() * 100000) | 0}></Input>
                                        <Heading fontFamily="Roddenberry">{isSpanish ? "Contacto" : "Contact"}</Heading>
                                        <FormControl id="nombre">
                                            <FormLabel>{isSpanish ? "Nombre" : "Name"}</FormLabel>
                                            <Input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} />
                                        </FormControl>
                                        <FormControl id="correo">
                                            <FormLabel>{isSpanish ? "Correo Electrónico" : "Email"}</FormLabel>
                                            <Input type="mail" name="correo" value={formData.correo} onChange={handleInputChange} />
                                        </FormControl>
                                        <FormControl id="mensaje">
                                            <FormLabel>{isSpanish ? "Mensaje" : "Message"}</FormLabel>
                                            <Textarea name="mensaje" value={formData.mensaje} onChange={handleInputChange} />
                                        </FormControl>
                                        <Button colorScheme="blue" type="submit" w="100%" mt="5%">
                                            {isSpanish ? "Enviar" : "Send"}
                                        </Button>
                                    </VStack>
                                </form>

                                <Divider mt="10%" />
                            </GridItem>

                            <GridItem>
                                <HStack alignItems="center" justifyContent="space-evenly" mt="2%">
                                    <Link href="https://www.linkedin.com/in/patggarcia/" isExternal>
                                        <Icon as={FaLinkedin} boxSize={8} />
                                    </Link>

                                    <Link href="https://github.com/patrigarcia" isExternal>
                                        <Icon as={FaGithub} boxSize={8} />
                                    </Link>

                                    <Link href="src/assets/Pdf/CV.pdf" download>
                                        <Icon as={FaFileDownload} boxSize={8} />
                                    </Link>
                                </HStack>
                                <Text ml={{ base: "75%", md: "75%", lg: "75%" }}>{isSpanish ? "CV" : "Resume"}</Text>
                            </GridItem>
                        </Grid>
                    </Box>
                </Center>
            </ParallaxLayer>
        </>
    );
};

export default Contacto;