import React from "react";
import { Image, Box, Grid, GridItem } from "@chakra-ui/react";
import me from "../../assets/Images/patri.svg";

import { Link } from "react-router-dom";

const About: React.FC = () => {
    return (
        <Box p={4} width="100%">
            <Grid templateColumns={{ md: "30% 70%", lg: "30% 70%" }} gap={4} display={{ base: "block", md: "grid", lg: "grid" }}>
                <GridItem>
                    <Link to="/">
                        <Image src={me} borderRadius="full" w={{ base: "40%", md: "80%", lg: "60%" }} objectFit="cover" ml={{ base: "30%", md: "20%", lg: "25%" }} />
                    </Link>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default About;
