import { useState, useEffect, useCallback, memo } from 'react';
import styled from 'styled-components';


const StyledText = styled.span`
    font-size: 17px;
    font-weight: normal;
    border-right: 2px solid;
    max-height: 17px;
    display: inline-flex;
    line-height:1.2;


    color: ${props => props.isDark ? '#FFF' : '#000'};
    user-select: none;

    @keyframes blink-caret {
        from, to { border-color: transparent }
        60% { border-color: ${props => props.isDark ? 'white' : 'black'} }
    }

    animation: blink-caret 1.2s step-end infinite;
`;

const Response = memo(function Response({ words, startTime, isDark }) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [started, setStarted] = useState(false);

    const updateIndexes = useCallback(() => {
        if (subIndex > words[index].length && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            var old_index = index;
            var new_index = Math.floor(Math.random() * 10 / 2);
            while (new_index === old_index){
                new_index = Math.floor(Math.random() * 10 / 2)
            }
            setIndex(new_index);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => {
                var cur_idx = prev + (reverse ? -1 : 1)
                var cur_char = words[index][cur_idx]
                while (!/[a-z0-9 ]/i.test(cur_char)){
                    cur_idx = cur_idx + (reverse ? - 1 : 1)
                    cur_char = words[index][cur_idx]
                }
                return cur_idx
            });
        }, reverse ? 50
            : (subIndex === words[index].length 
                ? 1500
                : Math.max(100, Math.random() * 100))
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
            {`${words[index].substring(0, subIndex)}`}
        </StyledText>
    );
});

export default Response;