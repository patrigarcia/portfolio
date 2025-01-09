import React, { useState, useEffect, useRef } from "react";
import { Box, Container, VStack, FormControl, FormLabel, Input, Textarea, Button, Text, HStack, Link, Icon, useBreakpointValue } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Define environment variables with type safety
const { VITE_EMAILJS_USER_ID = "", VITE_EMAILJS_SERVICE_ID = "", VITE_EMAILJS_TEMPLATE_ID = "" } = import.meta.env;

const Contact: React.FC = () => {
  const fontSize = useBreakpointValue({ base: "2em", md: "2em", lg: "2em" });
  const descriptionFontSize = useBreakpointValue({ base: "1em", md: "1.1em", lg: "1.2em" });

  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  useEffect(() => {
    // Initialize EmailJS with your User ID from environment variables
    emailjs.init(VITE_EMAILJS_USER_ID);
  }, []);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current) {
      emailjs.sendForm(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, formRef.current).then(
        () => {
          console.log("SUCCESS!");
          alert("Mensaje enviado con éxito");
          setFormData({ nombre: "", correo: "", mensaje: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Error al enviar el mensaje");
        }
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Box bg="#f8f6ee" w="100vw" h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="800px" px={{ base: 4, md: 8 }}>
        <VStack spacing={12} align="stretch">
          {/* Sección de título y descripción */}
          <VStack spacing={4} align="start">
            <Text fontSize={fontSize} fontFamily="Ubuntu" color="#4A5568" fontWeight="bold">
              Contacto
            </Text>
            <Text fontSize={descriptionFontSize} color="#4A5568" lineHeight="1.8">
              ¿Tienes algún proyecto en mente? Me encantaría escuchar tus ideas y ver cómo podemos trabajar juntos. Contáctame a través del formulario o encuéntrame en mis redes sociales.
            </Text>
            <HStack spacing={4} pt={2}>
              <Link href="https://github.com/patrigarcia" isExternal>
                <Icon as={FaGithub} boxSize={6} color="#4A5568" transition="transform 0.2s" _hover={{ transform: "scale(1.1)", color: "#667afb" }} />
              </Link>
              <Link href="https://linkedin.com/in/patggarcia/" isExternal>
                <Icon as={FaLinkedin} boxSize={6} color="#4A5568" transition="transform 0.2s" _hover={{ transform: "scale(1.1)", color: "#667afb" }} />
              </Link>
            </HStack>
          </VStack>

          {/* Formulario de contacto */}
          <Box as="form" bg="white" p={{ base: 6, md: 8 }} borderRadius="xl" boxShadow="lg" border="1px solid" borderColor="gray.200" ref={formRef} onSubmit={handleFormSubmit}>
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel color="#4A5568">Nombre</FormLabel>
                <Input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Tu nombre"
                  bg="white"
                  border="1px solid"
                  borderColor="gray.200"
                  _hover={{ borderColor: "gray.300" }}
                  _focus={{ borderColor: "#667afb", boxShadow: "0 0 0 1px #667afb" }}
                  color="#4A5568"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="#4A5568">Email</FormLabel>
                <Input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleInputChange}
                  placeholder="tu@email.com"
                  bg="white"
                  border="1px solid"
                  borderColor="gray.200"
                  _hover={{ borderColor: "gray.300" }}
                  _focus={{ borderColor: "#667afb", boxShadow: "0 0 0 1px #667afb" }}
                  color="#4A5568"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="#4A5568">Mensaje</FormLabel>
                <Textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  placeholder="Tu mensaje"
                  rows={6}
                  bg="white"
                  border="1px solid"
                  borderColor="gray.200"
                  _hover={{ borderColor: "gray.300" }}
                  _focus={{ borderColor: "#667afb", boxShadow: "0 0 0 1px #667afb" }}
                  color="#4A5568"
                />
              </FormControl>

              <Button type="submit" bg="#667afb" color="white" size="lg" width="full" _hover={{ bg: "#4456cb" }} _active={{ bg: "#3445ba" }} fontFamily="Ubuntu" fontSize="1.1em" py={7}>
                Enviar mensaje
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
