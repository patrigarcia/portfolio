import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Hi1 from "../../assets/Images/Portada/hi1.png";

import "../../App.scss";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";

const Home: React.FC = () => {
    return (
        <>
            <ColorModeSwitch />
            <HStack w="90%">
                <Image src={Hi1} w="50%" mt="30%" ml="10%" opacity={0.8} />
                <Text>I'm Patricia</Text>

                <VStack>
                    <Text fontFamily="Roddenberry">FULLSTACK DEVELOPER</Text>
                    <Text>UX-UI & GRAPHIC DESIGNER</Text>
                </VStack>
            </HStack>
        </>
    );
};

export default Home;
