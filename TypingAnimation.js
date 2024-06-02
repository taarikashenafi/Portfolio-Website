import React, { useEffect, useState } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(displayText + text.charAt(index));
                setIndex(index + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, text, displayText]);

    return <h1 className="typing-animation">{displayText}</h1>;
};

export default TypingAnimation;