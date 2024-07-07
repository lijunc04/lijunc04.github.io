import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
    font-size: 24px;
    font-weight: bold;
    border-right: 2px solid;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    animation: typing 3s steps(40, end), blink-caret .75s step-end infinite;
    user-select: none;
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        60% { border-color: black }
    }
`;

function Response(props) {
    const words = props.words;
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [started, setStarted] = useState(false);


    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
            return;
        }
    
        const starttimeout = setTimeout(() => {
            if(started === false){
                setStarted(true)
            }
        }, props.startTime)

        const carettimeout = setTimeout(() => {
            if(started){
                setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
            }
        }, reverse ? Math.max(75, parseInt(Math.random()*100)) : subIndex === words[index].length ? 1700 : Math.max(150, parseInt(Math.random() * 200)));

        return () => {
            clearTimeout(carettimeout); 
            clearTimeout(starttimeout);
        };
    }, [subIndex, index, reverse, words, started, props.startTime]);



    return (
        <StyledText>{`${words[index].substring(0, subIndex)}${reverse ? " " : ""}`}</StyledText>
    );
}

export default Response;