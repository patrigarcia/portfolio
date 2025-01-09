import React, { useState, useEffect } from "react";
import { Box, Text, VStack, useBreakpointValue, Link, Image, Container, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import image1 from "../../assets/Images/1.webp";
import image2 from "../../assets/Images/2.webp";
import image3 from "../../assets/Images/3.webp";
import image4 from "../../assets/Images/4.webp";

const Portfolio: React.FC = () => {
  const fontSize = useBreakpointValue({ base: "1.8em", md: "2em", lg: "2em" });
  const descriptionFontSize = useBreakpointValue({ base: "1em", md: "1.1em", lg: "1.2em" });
  const fontFamily = "Ubuntu, sans-serif";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [image1, image2, image3, image4];

  // Aumentando el tamaño en mobile un 30%
  const containerWidth = useBreakpointValue({ base: "273px", md: "560px", lg: "700px" });
  const imageHeight = useBreakpointValue({ base: "170.625px", md: "350px", lg: "437.5px" });

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
    <Box minH="100vh" w="100%" bg="rgba(5, 11, 21, 0.95)" backdropFilter="blur(8px)" py={20} display="flex" alignItems="center" justifyContent="center">
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <VStack spacing={16} w="100%">
          <VStack spacing={8} alignItems="flex-start" w="100%">
            <Text fontSize={fontSize} fontFamily={fontFamily} color="white" fontWeight="bold">
              <Box as="span" bgGradient="linear(to-r, white, whiteAlpha.700)" bgClip="text">
                Último proyecto
              </Box>
            </Text>

            <Text fontSize={descriptionFontSize} fontFamily={fontFamily} color="whiteAlpha.900" lineHeight="1.8" maxW="800px">
              Mi último trabajo fue la creación e implementación desde cero de la web para Igrowker y la plataforma XLAB, desarrollada para la misma empresa. El proceso que llevé a cabo ha sido el de
              investigación, diseño, prototipado, desarrollo y despliegue a producción de la plataforma. Desarrollada en React + Chakra UI para el frontend y NodeJs para el backend. Desplegada en AWS.
              <Link href="https://www.igrowker.com" isExternal color="teal.200" _hover={{ color: "teal.100", textDecoration: "none" }} ml={1}>
                Puedes visitar el sitio en igrowker.com
              </Link>
            </Text>
          </VStack>

          <Box position="relative" width={containerWidth} height={imageHeight} overflow="visible">
            <Box
              position="relative"
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                "@media screen and (max-width: 480px)": {
                  ".image-container": {
                    position: "relative !important",
                    transform: "none !important",
                    opacity: "0 !important",
                    width: "100% !important",
                    height: "100% !important",
                    transition: "opacity 0.3s ease !important",
                    display: "none !important",
                    "&.active": {
                      opacity: "1 !important",
                      display: "block !important",
                    },
                  },
                },
              }}
            >
              {images.map((image, index) => {
                const isActive = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + images.length) % images.length;
                const isNext = index === (currentIndex + 1) % images.length;

                let transform = "scale(0.6) translateX(150%) translateZ(-200px)";
                let zIndex = 0;
                let opacity = 0;

                if (isActive) {
                  transform = "scale(1) translateX(0) translateZ(0)";
                  zIndex = 3;
                  opacity = 1;
                } else if (isPrev) {
                  transform = "scale(0.7) translateX(-120%) translateZ(-150px)";
                  zIndex = 2;
                  opacity = 0.7;
                } else if (isNext) {
                  transform = "scale(0.7) translateX(120%) translateZ(-150px)";
                  zIndex = 1;
                  opacity = 0.7;
                }

                return (
                  <Box
                    key={index}
                    className={`image-container ${isActive ? "active" : ""}`}
                    position="absolute"
                    width="100%"
                    height="100%"
                    transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                    transform={transform}
                    zIndex={zIndex}
                    opacity={opacity}
                    filter={isActive ? "none" : "blur(3px)"}
                  >
                    <Image src={image} alt={`Project image ${index + 1}`} width="100%" height="100%" objectFit="contain" borderRadius="xl" />
                  </Box>
                );
              })}
            </Box>

            <IconButton
              aria-label="Previous image"
              icon={<ChevronLeftIcon w={8} h={8} />}
              position="absolute"
              left={{ base: "10px", md: "-60px" }}
              top="50%"
              transform="translateY(-50%)"
              onClick={handlePrevious}
              bg="rgba(255, 255, 255, 0.15)"
              _hover={{ bg: "rgba(255, 255, 255, 0.25)" }}
              size="lg"
              zIndex={10}
              fontSize="2xl"
              boxShadow="0 0 15px rgba(0, 0, 0, 0.3)"
              borderRadius="full"
              color="white"
              w={{ base: "40px", md: "50px" }}
              h={{ base: "40px", md: "50px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            />

            <IconButton
              aria-label="Next image"
              icon={<ChevronRightIcon w={8} h={8} />}
              position="absolute"
              right={{ base: "10px", md: "-60px" }}
              top="50%"
              transform="translateY(-50%)"
              onClick={handleNext}
              bg="rgba(255, 255, 255, 0.15)"
              _hover={{ bg: "rgba(255, 255, 255, 0.25)" }}
              size="lg"
              zIndex={10}
              fontSize="2xl"
              boxShadow="0 0 15px rgba(0, 0, 0, 0.3)"
              borderRadius="full"
              color="white"
              w={{ base: "40px", md: "50px" }}
              h={{ base: "40px", md: "50px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            />

            {/* Indicadores de página para móvil */}
            <Box display={{ base: "flex", md: "none" }} position="absolute" bottom="-30px" left="50%" transform="translateX(-50%)" zIndex={10}>
              {images.map((_, index) => (
                <Box key={index} w="8px" h="8px" mx="2px" borderRadius="full" bg={currentIndex === index ? "white" : "whiteAlpha.400"} transition="all 0.2s" />
              ))}
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Portfolio;
