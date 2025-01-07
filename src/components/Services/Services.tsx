import React from "react";
import { Box, Grid, GridItem, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

const Services: React.FC = () => {
  const fontSize = useBreakpointValue({ base: "1.8em", md: "2.2em", lg: "2.8em" });
  const fontFamily = "Ubuntu, sans-serif";

  return (
    <Box 
      minH="100vh" 
      w="100%" 
      bg="#0D1513"
      py={20}
      px={4}
      display="flex"
      alignItems="center"
    >
      <VStack spacing={16} maxW="1400px" mx="auto" w="100%">
        <Text 
          fontSize={fontSize} 
          fontFamily={fontFamily} 
          color="white" 
          alignSelf="flex-start"
          fontWeight="bold"
        >
          <Box
            as="span"
            bgGradient="linear(to-r, white, whiteAlpha.700)"
            bgClip="text"
          >
            Servicios
          </Box>
        </Text>
        
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={8}
          w="100%"
        >
          {[1, 2, 3, 4].map((index) => (
            <GridItem key={index}>
              <Box
                h="300px"
                bg="whiteAlpha.100"
                borderRadius="xl"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-5px)",
                  bg: "whiteAlpha.200",
                  boxShadow: "xl"
                }}
                cursor="pointer"
                position="relative"
                overflow="hidden"
              />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Services;
