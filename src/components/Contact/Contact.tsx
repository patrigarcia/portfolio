import React, { useState, useEffect } from "react";
import { HStack, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button, Center, Box, Grid, Link, GridItem, Icon, Divider} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import "../../App.scss";

const Contact: React.FC = () => {
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
        <Center w="100%" h="100vh">
            <Box bgColor="white" p={8} borderRadius="xl" w={{ base: "80%", md: "60%", lg: "30%" }} boxShadow="lg">
                <Grid templateColumns={{ base: "1fr", md: "repeat(1, 2fr)" }} gap={6}>
                    <GridItem>
                        <form id="contact-form" onSubmit={handleFormSubmit}>
                            <VStack spacing={4}>
                                <Input type="hidden" name="contact_number" value={(Math.random() * 100000) | 0}></Input>
                                <Heading fontFamily="Ubuntu" color="#4A5568">{isSpanish ? "Contacto" : "Contact"}</Heading>
                                <FormControl id="nombre">
                                    <FormLabel fontFamily="Ubuntu" color="#4A5568">{isSpanish ? "Nombre" : "Name"}</FormLabel>
                                    <Input 
                                        type="text" 
                                        name="nombre" 
                                        value={formData.nombre} 
                                        onChange={handleInputChange}
                                        borderColor="#CBD5E0"
                                        _hover={{ borderColor: "#B794F4" }}
                                    />
                                </FormControl>
                                <FormControl id="correo">
                                    <FormLabel fontFamily="Ubuntu" color="#4A5568">{isSpanish ? "Correo Electrónico" : "Email"}</FormLabel>
                                    <Input 
                                        type="mail" 
                                        name="correo" 
                                        value={formData.correo} 
                                        onChange={handleInputChange}
                                        borderColor="#CBD5E0"
                                        _hover={{ borderColor: "#B794F4" }}
                                    />
                                </FormControl>
                                <FormControl id="mensaje">
                                    <FormLabel fontFamily="Ubuntu" color="#4A5568">{isSpanish ? "Mensaje" : "Message"}</FormLabel>
                                    <Textarea 
                                        name="mensaje" 
                                        value={formData.mensaje} 
                                        onChange={handleInputChange}
                                        borderColor="#CBD5E0"
                                        _hover={{ borderColor: "#B794F4" }}
                                    />
                                </FormControl>
                                <Button colorScheme="purple" type="submit" w="100%" mt="5%" fontFamily="Ubuntu">
                                    {isSpanish ? "Enviar" : "Send"}
                                </Button>
                            </VStack>
                        </form>

                        <Divider mt="10%" />
                    </GridItem>

                    <GridItem>
                        <HStack alignItems="center" justifyContent="space-evenly" mt="2%">
                            <Link href="https://www.linkedin.com/in/patggarcia/" isExternal>
                                <Icon as={FaLinkedin} boxSize={8} color="#4A5568" _hover={{ color: "#B794F4" }} />
                            </Link>

                            <Link href="https://github.com/patrigarcia" isExternal>
                                <Icon as={FaGithub} boxSize={8} color="#4A5568" _hover={{ color: "#B794F4" }} />
                            </Link>
                        </HStack>
                    </GridItem>
                </Grid>
            </Box>
        </Center>
    );
};

export default Contact;
