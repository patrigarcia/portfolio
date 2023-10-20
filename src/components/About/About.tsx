import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Image, Text, Box, VStack, useBreakpointValue } from "@chakra-ui/react";
import { useLanguage } from "../../context/LanguageContext";

const About: React.FC = () => {
    const planetSize = useBreakpointValue({ base: "20vh", md: "25vh", lg: "30vh" });
    const boxWidth = useBreakpointValue({ base: "90vw", md: "80vw", lg: "65vw" });
    const fontSizeText = useBreakpointValue({ base: "1em", md: "1.5em", lg: "1.5em" });
    const { isSpanish } = useLanguage();

    return (
        <>
            <ParallaxLayer offset={0.9} speed={1} factor={1}>
                <Image src="src/assets/Images/nebula2.svg" alt="nebula" opacity={0.9} w="120vw" h="120vh" objectFit="cover" pos="absolute" top={0} left={0} />
            </ParallaxLayer>
            <ParallaxLayer offset={0.8} speed={1} factor={0.9}>
                <Image src="src/assets/Images/earth.svg" alt="me" w={planetSize} objectFit="cover" mt="4%" ml="5%" />
            </ParallaxLayer>

            <ParallaxLayer>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="100vw" h="100vh" mt={{ base: "0%", md: "1%", lg: "1%" }}>
                    <Text as="b" fontFamily="Roddenberry" fontSize="2em" color="#E0E0E0" mb="2">
                        {isSpanish ? "Sobre Mí" : "About Me"}
                    </Text>
                    <Box bgColor="gray.700" p={4} borderRadius="2xl" boxShadow="5xl" w={boxWidth}>
                        <VStack spacing={4} align="start">
                            <Text fontFamily="Quicksand" fontSize={fontSizeText} color="#E0E0E0" as="b">
                                {isSpanish
                                    ? "👋🏼 ¡Hola! Comencé en el mundo del diseño gráfico, donde aprendí que detrás de cada diseño hay una historia y detrás de cada plataforma digital, hay un código interesante. Esta curiosidad me llevó a hacer un bootcamp intensivo y ahora me desempeño como desarrolladora fullstack manejando las siguientes tecnologías:"
                                    : "👋🏼 Hey there! I started off in the graphic design world, where I learned that behind every design there's a story, and behind every digital platform, there's some cool code. This curiosity led me on a journey through an intensive bootcamp, and now I'm rocking it as a fullstack developer handling the following technologies:"}
                                <Image src="src/assets/Images/banner.png" />
                            </Text>
                            <Text fontFamily="Quicksand" fontSize={fontSizeText} color="#E0E0E0" as="b">
                                {isSpanish
                                    ? "👩🏻‍💻 Ahora combino mis raíces artísticas con las habilidades tecnológicas que adquirí, haciendo frontend o backend, tambien tengo un buen conocimiento sobre bases de datos y esperiencia de usuario. Estudio Licenciatura en Tecnología de la Información online en la Universidad de Palermo (Argentina)."
                                    : "👩🏻‍💻 Now, I blend my artsy roots with the techy skills I've picked up, whether I'm diving into frontend or backend stuff. I've got a good grip on databases and I'm currently studying online Information Technology at Palermo University (Argentina)."}
                            </Text>
                            <Text fontFamily="Quicksand" fontSize={fontSizeText} color="#E0E0E0" as="b">
                                {isSpanish
                                    ? "🐈 Mientras busco mi primera experiencia profesional en desarrollo, sigo profundizando en las herramientas tecnológicas que aprendí. Y cuando no estoy programando o diseñando, probablemente me encuentres viendo un documental, viendo episodios de Star Trek, o simplemente relajándome con mis gatos."
                                    : "🐈 While I'm on the hunt for my first pro gig in development, I keep diving deeper into all tech things. And when I'm not coding or designing, you can probably find me binging on a documentary, geeking out on some Star Trek episodes, or just chilling with my cats."}
                            </Text>
                            <Text fontFamily="Quicksand" fontSize={fontSizeText} color="#E0E0E0" as="b">
                                {isSpanish
                                    ? "📲 Si quieres colaborar o sólo charlar sobre tecnología, diseño, o por qué el universo es tan increíble, ¡contáctame!"
                                    : "📲 If you're up for teaming up or just wanna chat about tech, design, or why the universe is just so darn awesome, hit me up!"}
                            </Text>
                        </VStack>
                    </Box>
                </Box>
            </ParallaxLayer>
        </>
    );
};

export default About;
