import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";

const App: React.FC = () => {
    return (
        <>
            <About />
            <Home />
            <Work />
            <Contact />
        </>
    );
};

export default App;
