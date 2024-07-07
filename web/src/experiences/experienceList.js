import styled from "styled-components";
import { ExperiencesData } from "./experienceData";

const ExperienceListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 15%;
    flex: 10;
    width: 70%;  
`;

const ExperienceContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom-width: 2px;
    opacity: 80%;
    color: white;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #b6b898;  
    border-radius: 20px;
    box-shadow: 2px 2px 2px 0px #000000;
    &:hover {
        box-shadow: 2px 2px 18px 0px #000000;
        cursor: pointer;
        opacity: 90%;

    }
`;

const ExperienceDetails = styled.div`
    flex: 1;
    padding-right: 10px;
    padding-left: 5%;
`;

const ExperienceTitle = styled.h2`
    margin: 0;
    color: #333;  // Dark gray
`;

const ExperienceSubtitle = styled.p`
    margin: 1px;
    font-size: 14px;
    color: #444;  // Medium gray
`;

const ExperienceDescription = styled.p`
    font-size: 12px;
    color: #555;  // Slightly lighter gray
`;

const ExperienceImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 6px;  // Slightly rounded corners
    object-fit: cover;
    margin-right: 5%;
`;

const Experience = ({ experience }) => (
    <ExperienceContainer>
      <ExperienceDetails>
        <ExperienceTitle>{experience.title}</ExperienceTitle>
        <ExperienceSubtitle>{experience.position}</ExperienceSubtitle>
        <ExperienceSubtitle>{experience.period}</ExperienceSubtitle>
        {   experience.award ?
                <ExperienceSubtitle>{experience.award}</ExperienceSubtitle>
            :
            <></>
        }
        <ExperienceDescription>{experience.short_description}</ExperienceDescription>
      </ExperienceDetails>
      <ExperienceImage src={experience.image} alt="Experience" />
    </ExperienceContainer>
);

const EndText = styled.div`
    margin: auto;
    padding: 10px 20px;
    text-align: center;
    flex: 1;
    border-radius: 20px;
    background-color: #b6b898;
    width: 50%;
    box-shadow: 2px 2px 2px 0px #000000;
    opacity: 80%;
    white-space:nowrap;
    &:hover {
        box-shadow: 2px 2px 23px 0px #000000;
        cursor: pointer;
    }
`;


export default function ExperienceList(){
    return (
        <>
        <ExperienceListContainer>
            {ExperiencesData.map((experience, index) => (
                <Experience key={index} experience={experience} />
            ))}
            <EndText>Still more to come... :)</EndText>
        </ExperienceListContainer>
        </>
    );

}