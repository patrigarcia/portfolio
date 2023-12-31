import React, { useState, useEffect } from "react";
import { FormControl, FormLabel, Input, Textarea, Button, Box, Link, Icon, Divider, VStack, Heading, HStack, Image, useColorMode, Text } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import pdf from "../../assets/Pdf/CV.pdf";
import cv from "../../assets/Images/cv.png";
import cvn from "../../assets/Images/cv_n.png";
import "../../App.scss";

const Contact: React.FC = () => {
    const { isSpanish } = useLanguage();
    const { colorMode } = useColorMode();

    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        mensaje: "",
    });

    useEffect(() => {
        emailjs.init("your-emailjs-user-id");
    }, []);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailjs.sendForm("your-service-id", "your-template-id", event.currentTarget).then(
            (result) => {
                console.log(result.text);
                alert(isSpanish ? "Mensaje enviado con éxito" : "Message sent successfully");
                setFormData({ nombre: "", correo: "", mensaje: "" });
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const cvImage = colorMode === "light" ? cvn : cv;

    return (
        <Box p={4} borderRadius="xl" w={{ base: "100%", md: "70%", lg: "50%" }} mx="auto">
            <VStack spacing={6}>
                <Heading fontFamily="Quicksand" fontSize="1.5em">
                    Contacto
                </Heading>
                <Text w="90%" textAlign="center">
                    Escribime para saber cómo puedo contribuir a tu proyecto o por cualquier otra duda!
                </Text>
                <form id="contact-form" onSubmit={handleFormSubmit} style={{ width: "90%", margin: "0 auto" }}>
                    <FormControl id="nombre" mb="10%">
                        <FormLabel fontSize="1em">Nombre</FormLabel>
                        <Input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} />
                    </FormControl>
                    <FormControl id="correo" mb="10%">
                        <FormLabel fontSize="1em">Email</FormLabel>
                        <Input type="mail" name="correo" value={formData.correo} onChange={handleInputChange} />
                    </FormControl>
                    <FormControl id="mensaje" mb="10%">
                        <FormLabel fontSize="1em">Mensaje</FormLabel>
                        <Textarea name="mensaje" value={formData.mensaje} onChange={handleInputChange} />
                    </FormControl>
                    <Button colorScheme="blue" type="submit" w="100%">
                        Enviar
                    </Button>
                </form>

                <Divider mt={6} />
                <HStack spacing={12} mt={6} alignItems="start">
                    <Link href="https://www.linkedin.com/in/your-linkedin/" isExternal>
                        <Icon as={FaLinkedin} boxSize={8} />
                    </Link>
                    <Link href="https://github.com/your-github" isExternal>
                        <Icon as={FaGithub} boxSize={8} />
                    </Link>
                    <Link href={pdf} download>
                        <Image src={cvImage} w="25px" />
                    </Link>
                </HStack>
            </VStack>
        </Box>
    );
};

export default Contact;
