import styled from "styled-components";
import { ExperiencesData } from "./experienceData";

export default function ExperienceList({isDark}){
    const ExperienceListContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 5%;
        flex: 10;
        width: 70%;  
    `;

    const ExperienceContainer = styled.div`
        display: flex;
        align-items: center;
        padding: 20px;
        margin-bottom: 20px;
        background: ${props => props.isDark ? 
            'rgba(30, 30, 30, 0.7)' : 
            'rgba(255, 255, 255, 0.1)'
        };
        backdrop-filter: blur(10px);
        border: 1px solid ${props => props.isDark ? 
            'rgba(255, 255, 255, 0.1)' : 
            'rgba(0, 0, 0, 0.2)'
        };
        border-radius: 12px;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        user-select:none;
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: ${props => props.isDark ? '#8687af' : '#64658b'};
            transition: all 0.3s ease;
        }

        &:hover {
            transform: translateX(5px);
            background: ${props => props.isDark ? 
                'rgba(40, 40, 40, 0.8)' : 
                'rgba(255, 255, 255, 0.15)'
            };
            box-shadow: 0 4px 10px ${props => props.isDark ? 
                'rgba(0, 0, 0, 0.3)' : 
                'rgba(0, 0, 0, 0.1)'
            };

            &:before {
                width: 8px;
                background: ${props => props.isDark ? '#a5a6d4' : '#8687af'};
            }
        }
    `;

    const ExperienceDetails = styled.div`
        flex: 1;
        padding-right: 10px;
        padding-left: 5%;
    `;

    const ExperienceTitle = styled.h2`
        margin: 0;
        color: ${props => props.isDark ? '#e1e1e1' : '#333'};
    `;

    const ExperienceSubtitle = styled.p`
        margin: 1px;
        font-size: 14px;
        color: ${props => props.isDark ? '#b1b1b1' : '#444'};
    `;

    const ExperienceDescription = styled.p`
        font-size: 12px;
        color: ${props => props.isDark ? '#919191' : '#555'};
    `;

    const ExperienceImage = styled.img`
        width: 70px;
        height: 70px;
        object-fit: cover;
        margin-right: 5%;
    `;

    const Experience = ({ experience, isDark }) => (
        <ExperienceContainer isDark={isDark}>
        <ExperienceDetails>
            <ExperienceTitle isDark={isDark}>{experience.title}</ExperienceTitle>
            <ExperienceSubtitle isDark={isDark}>{experience.position}</ExperienceSubtitle>
            <ExperienceSubtitle isDark={isDark}>{experience.period}</ExperienceSubtitle>
            {   experience.award ?
                    <ExperienceSubtitle isDark={isDark}>{experience.award}</ExperienceSubtitle>
                :
                <></>
            }
        </ExperienceDetails>
        <ExperienceImage src={experience.image} alt="Experience" />
        </ExperienceContainer>
    );

    const PlaceholderContainer = styled(ExperienceContainer)`
        justify-content: center;
        opacity: 0.7;
        font-style: italic;
        color: ${props => props.isDark ? '#b1b1b1' : '#555'};
        
        &:hover {
            transform: none;
            cursor: default;
        }
    `;

    return (
        <>
        <ExperienceListContainer>
            {ExperiencesData.map((experience, index) => (
                <Experience key={index} experience={experience} isDark={isDark} />
            ))}
            <PlaceholderContainer isDark={isDark}>
                More to come...
            </PlaceholderContainer>
        </ExperienceListContainer>
        </>
    );

}