import React from "react";
import { Box, Container, VStack, FormControl, FormLabel, Input, Textarea, Button, Text, HStack, Link, Icon, useBreakpointValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  const fontSize = useBreakpointValue({ base: "2em", md: "2em", lg: "2em" });
  const descriptionFontSize = useBreakpointValue({ base: "1em", md: "1.1em", lg: "1.2em" });

  return (
    <Box minH="100vh" w="100%" bg="white" py={20} display="flex" alignItems="center" justifyContent="center">
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
              <Link href="https://linkedin.com/in/patricia-gonzalez-garcia" isExternal>
                <Icon as={FaLinkedin} boxSize={6} color="#4A5568" transition="transform 0.2s" _hover={{ transform: "scale(1.1)", color: "#667afb" }} />
              </Link>
            </HStack>
          </VStack>

          {/* Formulario de contacto */}
          <Box as="form" bg="white" p={{ base: 6, md: 8 }} borderRadius="xl" boxShadow="lg" border="1px solid" borderColor="gray.200">
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel color="#4A5568">Nombre</FormLabel>
                <Input
                  type="text"
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
