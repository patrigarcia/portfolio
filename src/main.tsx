import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider>
            <ColorModeScript initialColorMode="dark" />
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </ChakraProvider>
    </React.StrictMode>
);
