import { useState, useEffect, useCallback, memo } from 'react';
import styled from 'styled-components';


const StyledText = styled.span`
    font-size: 24px;
    font-weight: bold;
    border-right: 2px solid;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    color: ${props => props.isDark ? '#FFF' : '#000'};
    animation: typing 3s steps(40, end), blink-caret .75s step-end infinite;
    user-select: none;
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        60% { border-color: ${props => props.isDark ? 'white' : 'black'} }
    }
`;

const Response = memo(function Response({ words, startTime, isDark }) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [started, setStarted] = useState(false);

    const updateIndexes = useCallback(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse 
            ? Math.max(75, Math.random() * 100) 
            : subIndex === words[index].length 
                ? 1700 
                : Math.max(150, Math.random() * 200)
        );

        return () => clearTimeout(timeout);
    }, [subIndex, reverse, index, words]);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, startTime);

        return () => clearTimeout(startTimeout);
    }, [startTime]);

    useEffect(() => {
        if (!started) return;
        return updateIndexes();
    }, [started, updateIndexes]);

    return (
        <StyledText isDark={isDark}>
            {`${words[index].substring(0, subIndex)}${reverse ? " " : ""}`}
        </StyledText>
    );
});

export default Response;