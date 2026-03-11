import styled, { keyframes, css } from "styled-components";
import photo from '../assets/me_aged_9.jpg'
import Response from "./response";
import IconsPanel from "./iconpannel";
import Resume from '../assets/resume.pdf'
import { useEffect, useState } from "react";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

let hasImageAnimated = false;

export default function Start({ toggleTheme, isDark }){
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (!hasImageAnimated) {
            setShouldAnimate(true);
            hasImageAnimated = true;
        }
    }, []);
    const Container = styled.div`
        display: flex;
        min-height: 100vh;
        background-color: ${isDark ? '#1a1b1e' : '#FFFFFF'};
        color: ${isDark ? '#e3e3e3' : '#000000'};
        
        @media (max-height: 500px) {
            overflow: auto;
        }
        
        @media (max-width: 768px) {
            height: auto;
            min-height: 100dvh;
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
            min-height:100vh;
            padding: 40px 0;
            gap: 8%;
            justify-content: center;
            border-right: 0px;
            gap: 20px;
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
        ${props => props.shouldAnimate && css`animation: ${fadeIn} 0.6s ease-in;`}

        @media (max-width: 768px) {
            margin-bottom: 20px;
            max-width: 150px;
            width: 40%;
        }
    `;

    const IntroText = styled.div`
        color: ${isDark ? '#e3e3e3' : '#000000'};
        font-size: 20px;
        width: 50%;
        word-wrap: break-word;
        padding-top: 20px;
        text-align: Center;
        line-height: 1.5;
        white-space: nowrap;

        a {
            color: ${props => props.isDark ? '#8ab4ff' : '#1a0dab'};
            text-decoration: none;
            font-weight: 600;
        }

        a:hover {
            text-decoration: underline;
        }
    `;

    const ResumeButton = styled.div`
        background-color: ${isDark ? '#2d2f34' : '#000'};
        color: ${isDark ? '#e3e3e3' : '#FFFFFF'};
        border-radius: 20px;
        text-align: center;
        padding: 5px 10px;

        &:hover {
            background-color: ${isDark ? '#404249' : '#A0A095'};
            color: ${isDark ? '#ffffff' : '#000000'};
            cursor: pointer;
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
        font-size: 20px;
        color: ${isDark ? '#ffffff' : '#000000'};
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
        background-color: ${isDark ? '#2d2f34' : '#000000'};
        font-weight: normal;
        color: ${isDark ? '#e3e3e3' : '#FFFFFF'};
        border-radius: 20px;
        text-align: center;
        padding: 5px 10px;
        user-select:none;
        &:hover {
            background-color: ${isDark ? '#404249' : '#A0A095'};
            color: ${isDark ? '#ffffff' : '#000000'};
        }
    `;

    const ResponseContainer = styled.div`
        height: 20px;
        width: 90%;
        align-items:ceter;
        text-align: center;
        margin-top: 10px;
    `
    const ResponseText = styled.div`
        line-height: 1.5;
        font-size: 16px;
        font-weight: normal;
        color: ${props => props.isDark ? '#e3e3e3' : '#000000'};
        opacity: 0.95;
        padding: 15px 0 0 10px;
        cursor: pointer;

        a {
            color: ${props => props.isDark ? '#8ab4ff' : '#1a0dab'};
            text-decoration: none;
            font-weight: 600;
        }

        a:hover {
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            font-size: 15px;
            padding: 10px 0;
        }
    `;
    const skillList = ['Python', 'PyTorch', 'OpenCV', 'Yolo', 'Java', 'C', 'React', 'Expo', 'MongoDB', 'Node.js', 'JavaScript', 'TypeScript', 'CSS', 'Git', 'Flask', 'Firebase', 'AWS Rekognition', 'Mujoco', 'Gymnasium']

    return (
        <Container id="start">
            <SplitLayout>
                <LeftSection>
                    
                        <CircularImage 
                            src={photo} 
                            alt="Me aged 9 (maybe, I don't actually remember)"
                            shouldAnimate={shouldAnimate}
                        />
                        <IntroText isDark={isDark}>Hi, I'm <b>Lijun Cai 蔡礼骏</b><br/>CS @ <a href="https://www.cics.umass.edu/" target="_blank" rel="noreferrer">UMass Amherst</a>.</IntroText>
                        <ResumeButton onClick={()=>window.open(Resume,  '_blank')}>My Résumé</ResumeButton>
                        <IconsPanel                
                            toggleTheme={toggleTheme}
                            isDark={isDark} 
                        />
                </LeftSection>
                <RightSection>
                    <Block>
                        <BigText>About Me</BigText>
                        <ResponseText isDark={isDark}>
                            I am a computer science undergraduate student at <a href="https://www.cics.umass.edu/" target="_blank" rel="noreferrer">CICS</a> of the University of Massachusetts Amherst, graduating in <b>May 2026</b>. I am also a visiting student at the <a href="https://spherelab.ai/"target="_blank" rel="noreferrer"> Sphere Lab</a> of Chinese University of Hong Kong advised by Assistant Prof. <a href="https://www.wyliu.com" target="_blank" rel="noreferrer">Weiyang Liu</a>. Previously I breifly visited the <a href="https://www.vogue.cs.titech.ac.jp/" rel="noreferrer"
                            target="_blank">Koike Lab</a> at the Institute of Science Tokyo advised by Assistant Prof. Yichen Peng. 
                            <br />
                            <br />
                            I am intested in research focusing on <br/>1. Representation learning <br/>2. Principle algorithms for large deep learning model training & post-training.  
                        </ResponseText>
                    </Block>
                    <Block>
                        <InlineRow>
                            <BigText>Hobbies?</BigText>
                            <ResponseContainer>
                                <Response 
                                    toggleTheme={toggleTheme}
                                    isDark={isDark}
                                    words={['Soccer  ⚽️', 'Music Making  🎵', 'Football Manager  🕹️', 'Traveling  🌏', 'Skiing  ⛷️']} 
                                    startTime={240}
                                />
                            </ResponseContainer>
                        </InlineRow>
                    </Block>
                    <Block>
                        <BigText>Skills</BigText>
                        <SkillTextContainer>
                            {skillList.map((skill, index) => (
                                <SkillText key={index}>
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