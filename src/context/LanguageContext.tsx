import React, { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextType {
    isSpanish: boolean;
    setIsSpanish: (value: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [isSpanish, setIsSpanish] = useState(true);

    return <LanguageContext.Provider value={{ isSpanish, setIsSpanish }}>{children}</LanguageContext.Provider>;
};
