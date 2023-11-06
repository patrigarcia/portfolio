import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack ml="8%">
            <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
            {colorMode === "dark" ? <FaSun /> : <FaMoon />}
        </HStack>
    );
};

export default ColorModeSwitch;
