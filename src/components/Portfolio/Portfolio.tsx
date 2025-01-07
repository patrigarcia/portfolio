import React, { useState, useEffect } from "react";
import { Box, Text, VStack, useBreakpointValue, Link, Image, Container, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import image1 from "../../assets/Images/1.webp";
import image2 from "../../assets/Images/2.webp";
import image3 from "../../assets/Images/3.webp";
import image4 from "../../assets/Images/4.webp";

const Portfolio: React.FC = () => {
  const fontSize = useBreakpointValue({ base: "1.8em", md: "2.2em", lg: "2.8em" });
  const descriptionFontSize = useBreakpointValue({ base: "1em", md: "1.1em", lg: "1.2em" });
  const fontFamily = "Ubuntu, sans-serif";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [image1, image2, image3, image4];
  
  const containerWidth = useBreakpointValue({ base: "300px", md: "800px", lg: "1000px" });
  const imageHeight = useBreakpointValue({ base: "187.5px", md: "500px", lg: "625px" });

  useEffect(() => {
    let interval: number | undefined;
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [isAutoPlaying, images.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box 
      minH="100vh" 
      w="100%" 
      bg="#0D1513"
      py={20}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <VStack spacing={16} w="100%">
          <VStack spacing={8} alignItems="flex-start" w="100%">
            <Text 
              fontSize={fontSize} 
              fontFamily={fontFamily} 
              color="white" 
              fontWeight="bold"
            >
              <Box
                as="span"
                bgGradient="linear(to-r, white, whiteAlpha.700)"
                bgClip="text"
              >
                Proyectos Destacados
              </Box>
            </Text>
            
            <Text
              fontSize={descriptionFontSize}
              fontFamily={fontFamily}
              color="whiteAlpha.900"
              lineHeight="1.8"
              maxW="800px"
            >
              Mi último trabajo fue la creación e implementación desde cero de la web para Igrowker y la plataforma XLAB, desarrollada para la misma empresa.
              El proceso que llevé a cabo ha sido de de investigación, diseño, prototipado, desarrollo y despliegue a producción de la plataforma.
              Desarrollada en React + Chakra UI para el frontend y NodeJs para el backend. Desplegada en AWS.
              <Link 
                href="https://www.igrowker.com" 
                isExternal 
                color="teal.200"
                _hover={{ color: "teal.100", textDecoration: "none" }}
                ml={1}
              >
                Visita el sitio en funcionamiento en www.igrowker.com
              </Link>
            </Text>
          </VStack>
          
          <Box
            position="relative"
            width={containerWidth}
            height={imageHeight}
            overflow="hidden"
          >
            <Box
              position="relative"
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {images.map((image, index) => {
                const isActive = index === currentIndex;
                const isPrev = (index === ((currentIndex - 1 + images.length) % images.length));
                const isNext = (index === ((currentIndex + 1) % images.length));
                
                let transform = "scale(0.8) translateX(100%) translateZ(-100px)";
                let zIndex = 0;
                let opacity = 0;

                if (isActive) {
                  transform = "scale(1) translateX(0) translateZ(0)";
                  zIndex = 3;
                  opacity = 1;
                } else if (isPrev) {
                  transform = "scale(0.85) translateX(-100%) translateZ(-50px)";
                  zIndex = 2;
                  opacity = 0.7;
                } else if (isNext) {
                  transform = "scale(0.85) translateX(100%) translateZ(-50px)";
                  zIndex = 1;
                  opacity = 0.7;
                }

                return (
                  <Box
                    key={index}
                    position="absolute"
                    width="100%"
                    height="100%"
                    transition="all 0.5s ease-in-out"
                    transform={transform}
                    zIndex={zIndex}
                    opacity={opacity}
                    filter={isActive ? "none" : "blur(2px)"}
                  >
                    <Image
                      src={image}
                      alt={`Project image ${index + 1}`}
                      width="100%"
                      height="100%"
                      objectFit="contain"
                      borderRadius="xl"
                    />
                  </Box>
                );
              })}
            </Box>

            <IconButton
              aria-label="Previous image"
              icon={<ChevronLeftIcon w={8} h={8} />}
              position="absolute"
              left="20px"
              top="50%"
              transform="translateY(-50%)"
              onClick={handlePrevious}
              bg="whiteAlpha.200"
              _hover={{ bg: "whiteAlpha.300" }}
              size="lg"
              zIndex={4}
              fontSize="2xl"
            />

            <IconButton
              aria-label="Next image"
              icon={<ChevronRightIcon w={8} h={8} />}
              position="absolute"
              right="20px"
              top="50%"
              transform="translateY(-50%)"
              onClick={handleNext}
              bg="whiteAlpha.200"
              _hover={{ bg: "whiteAlpha.300" }}
              size="lg"
              zIndex={4}
              fontSize="2xl"
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Portfolio;
