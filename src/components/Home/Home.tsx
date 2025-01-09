import React from "react";
import { Box, Text, Grid, GridItem, VStack, useBreakpointValue, keyframes, Image } from "@chakra-ui/react";
import profileImage from "../../assets/Images/me.png";

// Definir la animación de flotación
const floatingAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

// Definir la animación de onda
const waveAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Home: React.FC = () => {
  const fontSize = useBreakpointValue({ base: "2.4em", md: "2em", lg: "3.2em" });
  const rolesFontSize = useBreakpointValue({ base: "1.2em", md: "1.6em", lg: "1.8em" });
  const fontFamily = "Ubuntu, sans-serif";

  return (
    <Box display="flex" flexDirection="column" height="100vh" w={{ base: "100%", md: "100%", lg: "100%" }} position="relative" bg="#050B15" overflow="hidden">
      {/* Círculos de luz con efecto blur */}
      <Box
        position="absolute"
        top="20%"
        left="10%"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(91, 216, 175, 0.2) 0%, rgba(102, 122, 251, 0.1) 100%)"
        filter="blur(60px)"
        zIndex={0}
        animation={`${floatingAnimation} 8s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        bottom="20%"
        right="10%"
        width="400px"
        height="400px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(102, 122, 251, 0.2) 0%, rgba(91, 216, 175, 0.1) 100%)"
        filter="blur(60px)"
        zIndex={0}
        animation={`${floatingAnimation} 12s ease-in-out infinite`}
      />

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} height="100%" width="100%" maxWidth="1400px" mx="auto" px={4} alignItems="center" position="relative" zIndex={1}>
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src={profileImage} alt="Me" boxSize={{ base: "280px", md: "350px", lg: "600px" }} objectFit="cover" mt={{ base: "100px", md: "0px", lg: "0px" }} />
        </GridItem>

        <GridItem>
          <VStack align="flex-start" spacing={0} mb={{ base: "100px", md: "0px", lg: "0px" }}>
            <Text
              as="span"
              fontSize={fontSize}
              fontFamily={fontFamily}
              fontWeight="bold"
              bgGradient="linear(to-r, #5bd8af, #667afb)"
              bgClip="text"
              backgroundSize="200% 200%"
              animation={`${waveAnimation} 4s ease infinite`}
            >
              Patricia
            </Text>
            <Text
              as="span"
              fontSize={fontSize}
              fontFamily={fontFamily}
              fontWeight="bold"
              bgGradient="linear(to-r, #5bd8af, #667afb)"
              bgClip="text"
              backgroundSize="200% 200%"
              animation={`${waveAnimation} 4s ease infinite`}
            >
              González García
            </Text>
            <Box minHeight="40px" display="flex" alignItems="center" mt={3}>
              <Text fontFamily={fontFamily} fontSize={rolesFontSize} color="white" fontWeight="light">
                Product Engineer | Software Developer
              </Text>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
