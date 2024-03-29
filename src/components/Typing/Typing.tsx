import React, { useEffect, useState } from "react";

const Typing: React.FC = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const phrases = ["Software Developer", "Product Designer", "UX/UI Designer"];

    useEffect(() => {
        const currentPhrase = phrases[index % phrases.length];
        const updateSpeed = isDeleting ? 75 : 150;

        const updateText = () => {
            setText(currentPhrase.substring(0, isDeleting ? text.length - 1 : text.length + 1));
        };

        const timeoutId = setTimeout(updateText, updateSpeed);

        if (!isDeleting && text === currentPhrase) {
            setTimeout(() => setIsDeleting(true), 500);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setIndex(index + 1);
        }

        return () => clearTimeout(timeoutId);
    }, [text, isDeleting, index, phrases]);

    return <div style={{ minHeight: "1em" }}>{text || "\u00A0"}</div>;
};

export default Typing;
