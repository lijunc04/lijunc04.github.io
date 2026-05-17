import styled, { keyframes, css } from "styled-components";
import photo from '../assets/me_aged_9.jpg'
import Response from "./response";
import IconsPanel from "./iconpannel"; // Updated below
import { useEffect, useState } from "react";

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

const themeTransition = 'all 0.5s ease';

const Container = styled.div`
    display: flex;
    min-height: 100%;
    background-color: transparent;
    color: ${props => props.$isDark ? '#e3e3e3' : '#000000'};
    transition: ${themeTransition};

    @media (max-height: 500px) {
        overflow-y: auto;
        display: block;
    }
    @media (max-width: 768px) {
        min-height: 100%;
        overflow: visible;
    }
`;

const SplitLayout = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4%;
    justify-content: center;
    @media (max-width: 768px) {
        min-height: 100dvh;
        padding: 40px 0;
        gap: 20px;
        justify-content: center;
        border-right: 0px;
    }
    @media (max-height: 500px) and (orientation: landscape) {
        min-height: auto;
        padding: 50px 0;
    }
`;

const RightSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 6% 10% 6% 4%;

    @media (max-width: 768px) {
        padding: 0 8% 40px 8%;
        justify-content: flex-start;
        gap: 20px;
    }
`;

const CircularImage = styled.img`
    width: 50%;
    max-width: 200px;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: -2px 8px 12px -3px #000000;
    ${props => props.$shouldAnimate && css`animation: ${fadeIn} 0.6s ease-in;`}

    @media (max-width: 768px) {
        margin-bottom: 20px;
        max-width: 150px;
        width: 40%;
    }
`;

const IntroText = styled.div`
    color: ${props => props.$isDark ? '#e3e3e3' : '#000000'};
    font-size: 20px;
    width: 50%;
    word-wrap: break-word;
    padding-top: 20px;
    text-align: center;
    line-height: 1.5;
    white-space: nowrap;
    transition: ${themeTransition};

    a {
        color: ${props => props.$isDark ? '#8ab4ff' : '#1a0dab'};
        transition: ${themeTransition};
        text-decoration: none;
        font-weight: 600;
    }
    a:hover {
        text-decoration: underline;
    }
`;

const Block = styled.div`
    padding-bottom: 5%;
    font-weight: bold;

    @media (max-width: 768px) {
        padding-bottom: 20px;
    }
`;

const BigText = styled.div`
    font-size: clamp(1.25rem, 1rem + 1vw, 1.5rem);
    color: ${props => props.$isDark ? '#ffffff' : '#000000'};
    transition: ${themeTransition};
`;

const InlineRow = styled.div`
    display: flex;
    flex-direction: column;
`;

const SkillTextContainer = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

const SkillText = styled.div`
    background-color: ${props => props.$isDark ? '#2d2f34' : '#000000'};
    font-weight: normal;
    color: ${props => props.$isDark ? '#e3e3e3' : '#FFFFFF'};
    border-radius: 20px;
    text-align: center;
    padding: 5px 10px;
    user-select: none;
    transition: ${themeTransition};

    &:hover {
        background-color: ${props => props.$isDark ? '#404249' : '#A0A095'};
        color: ${props => props.$isDark ? '#ffffff' : '#000000'};
    }
`;

const ResponseContainer = styled.div`
    height: 20px;
    width: 90%;
    align-items: center;
    text-align: center;
    margin-top: 10px;
`;

const ResponseText = styled.div`
    font-size: clamp(0.95rem, 0.85rem + 0.4dvw, 1.1rem);
    line-height: 1.5;
    font-weight: normal;
    color: ${props => props.$isDark ? '#e3e3e3' : '#000000'};
    opacity: 0.95;
    padding: 15px 0 0 10px;
    cursor: pointer;
    transition: ${themeTransition};
    a {
        color: ${props => props.$isDark ? '#8ab4ff' : '#1a0dab'};
        text-decoration: none;
        font-weight: 600;
        transition: ${themeTransition};
    }
    a:hover {
        text-decoration: underline;
    }
    @media (max-width: 768px) {
        font-size: 15px;
        padding: 10px 0;
    }
`;

let hasImageAnimated = false;

const skillList = [
    'Python', 'PyTorch', 'OpenCV', 'Yolo', 'Java', 'C', 'React', 'Expo',
    'MongoDB', 'Node.js', 'JavaScript', 'TypeScript', 'CSS', 'Git', 'Flask',
    'Firebase', 'AWS Rekognition', 'Mujoco', 'Gymnasium'
];

export default function Start({ toggleTheme, isDark }) {
    const [shouldAnimate, setShouldAnimate] = useState(() => {
        if (!hasImageAnimated) {
            hasImageAnimated = true;
            return true;
        }
        return false;
    });

    useEffect(() => {
        if (shouldAnimate) {
            const timer = setTimeout(() => setShouldAnimate(false), 600);
            return () => clearTimeout(timer);
        }
    }, [shouldAnimate]);

    return (
        <Container id="start" $isDark={isDark}>
            <SplitLayout>
                <LeftSection>
                    <CircularImage
                        src={photo}
                        alt="Me aged 9 (maybe, I don't actually remember)"
                        $shouldAnimate={shouldAnimate}
                    />
                    <IntroText $isDark={isDark}>
                        Hi, I'm <b>Lijun Cai 蔡礼骏 :)</b><br />
                        CS @ <a href="https://www.cics.umass.edu/" rel="noreferrer">UMass Amherst</a>.
                    </IntroText>
                    {/* Revamped clean link row component */}
                    <IconsPanel isDark={isDark} />
                </LeftSection>

                <RightSection>
                    <Block>
                        <BigText $isDark={isDark}>About Me</BigText>
                        <ResponseText $isDark={isDark}>
                            Welcome! 👋<br/><br/>

                            I am an upcoming MPhil CSE student at the <a href='https://www.cuhk.edu.hk' rel='noreferrer'>Chinese University of Hong Kong</a> starting Fall 2026, advised by Prof.{' '}
                            <a href="https://www.wyliu.com" rel="noreferrer">Weiyang Liu</a>. I will also be joining the {' '}
                            <a href="https://spherelab.ai/" rel="noreferrer">Sphere Lab</a> after visiting.<br/><br/>
                            
                            I completed my Bachelor of Science degree in computer science at <a href="https://www.cics.umass.edu" rel="noreferrer">CICS</a>{' '} of the <a href="https://www.umass.edu/" rel="noreferrer">University of Massachusetts Amherst</a> in May 2026. 
                            Previously I briefly visited the{' '}
                            <a href="https://www.vogue.cs.titech.ac.jp/" rel="noreferrer">Koike Lab</a>{' '}
                            at the Institute of Science Tokyo advised by Prof. Yichen Peng.
                            <br /><br />

                            I am interested in research topics such as<br />
                            1. Representation learning and its applications for interesting real world problems.<br />
                            2. Algorithms for training &amp; post-training large deep learning models.
                        </ResponseText>
                    </Block>

                    <Block>
                        <InlineRow>
                            <BigText $isDark={isDark}>Hobbies?</BigText>
                            <ResponseContainer>
                                <Response
                                    toggleTheme={toggleTheme}
                                    isDark={isDark}
                                    words={['Soccer  ⚽️', 'Music Making  🎵', 'Football Manager  🕹️', 'Traveling  🌏', 'Skiing  ⛷️', 'Bayern Munich 🔴⚪️']}
                                    startTime={240}
                                />
                            </ResponseContainer>
                        </InlineRow>
                    </Block>

                    <Block>
                        <BigText $isDark={isDark}>Skills</BigText>
                        <SkillTextContainer>
                            {skillList.map((skill, index) => (
                                <SkillText key={index} $isDark={isDark}>
                                    {skill}
                                </SkillText>
                            ))}
                        </SkillTextContainer>
                    </Block>
                </RightSection>
            </SplitLayout>
        </Container>
    );
}