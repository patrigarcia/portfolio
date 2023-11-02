import React from "react";
import { Box, Circle, Flex, Text, VStack } from "@chakra-ui/react";

const About: React.FC = () => {
    return (
        <Flex direction="row" align="flex-start" justify="center" width="100%" p={4}>
            <VStack align="end" spacing={8} flex="1" pr={2}>
                <Text>
                    ¡Hola! Soy una desarrolladora fullstack con raíces en diseño gráfico y UX/UI. Me encanta trabajar en el frontend y siento que cada día aprendo algo nuevo en este emocionante mundo
                    del desarrollo.
                </Text>
                <Text>Aunque recientemente completé un bootcamp, me manejo en el backend y tengo buen conocimiento en bases de datos, tanto relacionales como no relacionales.</Text>
            </VStack>

            <VStack align="center" spacing={8}>
                <Circle size="8px" bg="blue.500" />
                <Box width="2px" height="100px" bg="gray.300" />
                <Circle size="8px" bg="blue.500" />
                <Box width="2px" height="60px" bg="gray.300" />
                <Circle size="8px" bg="blue.500" />
            </VStack>

            <VStack align="start" spacing={8} flex="1" pl={2}>
                <Text>Cuando no estoy sumergida en código, me relajo viendo documentales, disfrutando episodios de "Star Trek".</Text>
                <Text>Me gusta jugar con mis gatos y compartir momentos con mi marido. Me considero junior, pero con una gran pasión y entusiasmo por crecer y aportar en cada proyecto.</Text>
            </VStack>
        </Flex>
    );
};

export default About;
