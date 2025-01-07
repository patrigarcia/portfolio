import React from "react";
import { Text, Box, Image, useBreakpointValue, VStack, keyframes, Grid, GridItem } from "@chakra-ui/react";

import profileImage from "../../assets/Images/me.png";

const floatingAnimation = keyframes`
  0% { transform: translate(0, 0) }
  50% { transform: translate(-10px, -10px) }
  100% { transform: translate(0, 0) }
`;

const waveAnimation = keyframes`
  0% { background-position: 0% 50%; }
  25% { background-position: 50% 75%; }
  50% { background-position: 100% 70%; }
  75% { background-position: 50% 25%; }
  100% { background-position: 0% 80%; }
`;

const Home: React.FC = () => {
  const fontSize = useBreakpointValue({ base: "2.4em", md: "2em", lg: "3.2em" });
  const rolesFontSize = useBreakpointValue({ base: "1.2em", md: "1.6em", lg: "1.8em" });
  const fontFamily = "Ubuntu, sans-serif";

  return (
    <Box display="flex" flexDirection="column" height="100vh" width="100%" position="relative" bg="#0D1513" overflow="hidden">
      {/* Círculos de luz con efecto blur */}
      <Box
        position="absolute"
        top="20%"
        left="10%"
        width="900px"
        height="900px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(245,245,245,0.15) 0%, rgba(245,245,245,0.05) 50%, rgba(245,245,245,0) 70%)"
        filter="blur(60px)"
        animation={`${floatingAnimation} 8s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        bottom="20%"
        right="15%"
        width="750px"
        height="750px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(245,245,245,0.1) 0%, rgba(245,245,245,0.04) 50%, rgba(245,245,245,0) 70%)"
        filter="blur(60px)"
        animation={`${floatingAnimation} 10s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        top="60%"
        left="30%"
        width="600px"
        height="600px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(245,245,245,0.08) 0%, rgba(245,245,245,0.03) 50%, rgba(245,245,245,0) 70%)"
        filter="blur(60px)"
        animation={`${floatingAnimation} 12s ease-in-out infinite`}
      />

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} height="100%" width="100%" maxWidth="1400px" mx="auto" px={4} alignItems="center" position="relative" zIndex={1}>
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src={profileImage} alt="Me" boxSize={{ base: "240px", md: "240px", lg: "540px" }} objectFit="cover" />
        </GridItem>

        <GridItem>
          <VStack align="flex-start" spacing={4}>
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
