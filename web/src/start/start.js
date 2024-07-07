import styled from "styled-components";
import photo from '../assets/me_aged_9.jpg'
import Response from "./response";
import IconsPanel from "./iconpannel";

const Container = styled.div`
    display: flex;
    height: 85vh;
    flex-direction: column;
    background-color: #F8F8D3;
    overflow:hidden;
    @media (max-height: 500px) {
        overflow: auto;
    }
    @media (max-width: 768px) {
        overflow: auto;
        flex: 12;
    }
`;

const SplitLayout = styled.div`
    display: flex;
    flex: 1;
    width: 100%;   
    @media (max-width: 768px) {
        flex-direction: column;
    }
    height: 100%;
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
        border-right: 0px;
        gap: 5%;
    }
`;

const RightSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: left;
    padding-top: 6%;
    padding-left: 8%;
    overflow: auto;

    @media (max-width: 768px) {
        padding-left: 8%;
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
        max-width: 50%;
    }
`;

const IntroText = styled.div`
    font-size: 20px;
    width: 50%;
    word-wrap: break-word;
    padding-top: 20px;
`;

const ResumeButton = styled.div`
    background-color: #000000;
    color: #FFFFFF;
    border-radius: 20px;
    text-align: center;
    padding: 5px 10px;

    &:hover {
        background-color: #A0A095;
        color: #000000;
        cursor: pointer;
    }   
`;

const Block = styled.div`
    padding-bottom: 10%;
`;

const BigText = styled.div`
    font-size: 20px
`;

const SkillTextContainer = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

const SkillText = styled.div`
    background-color: #000000;
    color: #FFFFFF;
    border-radius: 20px;
    text-align: center;
    padding: 5px 10px;

    &:hover {
        background-color: #A0A095;
        color: #000000;
        cursor: pointer;
    }
`;

const skillList = ['Python', 'PyTorch', 'OpenCV', 'Yolo', 'Java', 'C', 'React', 'Expo', 'MongoDB', 'Node.js', 'JavaScript', 'TypeScript', 'CSS', 'Git', 'FL Studio', 'VSCode', 'Vim']

export default function Start(){
    return (
        <Container>
            <SplitLayout>
                <LeftSection>
                    
                        <CircularImage 
                            src={photo} 
                            alt="Me aged 9 (maybe, I don't actually remember)"
                        />
                        <IntroText>Hi, I'm Lijun Cai<br/>CS undergraduate @ UMass Amherst.</IntroText>
                        <ResumeButton>My Résumé</ResumeButton>
                        <IconsPanel />
                </LeftSection>
                <RightSection>
                    <Block>
                        <BigText>Where Am I?</BigText>
                        <Response words={['Amherst, MA', 'Yokohama, Japan', 'Shenzhen, China']} startTime={80}/>
                    </Block>
                    <Block>
                        <BigText>What Do I Do?</BigText>
                        <Response words={['Frontend Development', 'Computer Vision', 'Backend Development', 'And More...']} startTime={550}/>
                    </Block>
                    <Block>
                        <BigText>Hobbies?</BigText>
                        <Response words={['Soccer', 'Music Making', 'Coding', 'Football Manager', 'Traveling']} startTime={380}/>
                    </Block>
                    <Block>
                        <BigText>Skills</BigText>
                        <SkillTextContainer>
                            {skillList.map((skill) => {
                                return (
                                    <SkillText>{skill}</SkillText>
                                )
                            })}
                        </SkillTextContainer>
                    </Block>
                </RightSection>
            </SplitLayout>
        </Container>
    );
}