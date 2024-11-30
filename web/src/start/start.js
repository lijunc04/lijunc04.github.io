import styled from "styled-components";
import photo from '../assets/me_aged_9.jpg'
import Response from "./response";
import IconsPanel from "./iconpannel";
import Resume from '../assets/resume.pdf'
import NightMode from "../nav/nightMode";


export default function Start({ toggleTheme, isDark }){
    const Container = styled.div`
        display: flex;
        height: 90vh;
        flex-direction: column;
        background-color: ${isDark ? '#1a1b1e' : '#FFFFFF'};
        color: ${isDark ? '#e3e3e3' : '#000000'};
        overflow: hidden;
        
        @media (max-height: 500px) {
            overflow: auto;
        }
        
        @media (max-width: 768px) {
            height: auto;
            min-height: 100vh;
            overflow: auto;
            padding-bottom: 20px;
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
        gap: 5%;
        overflow: auto;
        justify-content: center;
        
        @media (max-width: 768px) {
            min-height: 70vh;
            padding: 40px 0;
            gap: 8%;
            justify-content: flex-start;
            border-right: 0px;
        }
    `;

    const RightSection = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        padding: 6% 8% 6% 4%;
        overflow: none;

        @media (max-width: 768px) {
            padding: 20px 8% 40px 8%;
            min-height: 60vh;
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
        box-shadow: -2px 8px 24px -3px #000000;

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
        padding-bottom: 10%;
        
        @media (max-width: 768px) {
            padding-bottom: 20px;
        }
    `;

    const BigText = styled.div`
        font-size: 20px;
        color: ${isDark ? '#ffffff' : '#000000'};
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
    const ResponseText = styled.div`
        line-height: 1.5;
        font-size: 16px;
        color: ${props => props.isDark ? '#e3e3e3' : '#000000'};
        opacity: 0.9;
        padding: 15px 0;
        
        @media (max-width: 768px) {
            font-size: 15px;
            padding: 10px 0;
        }
    `;
    const skillList = ['Python', 'PyTorch', 'OpenCV', 'Yolo', 'Java', 'C', 'React', 'Expo', 'MongoDB', 'Node.js', 'JavaScript', 'TypeScript', 'CSS', 'Git', 'Flask', 'Firebase', 'AWS Rekognition']

    return (
        <Container id="start">
            <SplitLayout>
                <LeftSection>
                    
                        <CircularImage 
                            src={photo} 
                            alt="Me aged 9 (maybe, I don't actually remember)"
                        />
                        <IntroText>Hi, I'm <b>Lijun Cai</b><br/>CS Sophomore @ UMass Amherst.</IntroText>
                        <ResumeButton onClick={()=>window.open(Resume,  '_blank')}>My Résumé</ResumeButton>
                        <IconsPanel                
                            toggleTheme={toggleTheme}
                            isDark={isDark} 
                        />
                </LeftSection>
                <RightSection>
                    <Block>
                        <BigText>Where Am I?</BigText>
                        <Response
                            isDark={isDark}
                            words={['Amherst, MA', 'Yokohama, Japan', 'Shenzhen, China']} 
                            startTime={80}
                        />
                    </Block>
                    <Block>
                        <BigText>My Interests?</BigText>
                        <ResponseText isDark={isDark}>
                            I am interested in deep learning, specifically computer vision (looking for research opportunities!), but I am also a fan of hackathons, web development, and data analytics in soccer.
                        </ResponseText>
                    </Block>
                    <Block>
                        <BigText>Hobbies?</BigText>
                        <Response 
                            toggleTheme={toggleTheme}
                            isDark={isDark}
                            words={['Soccer', 'Music Making', 'Coding', 'Football Manager', 'Traveling']} 
                            startTime={380}
                        />
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