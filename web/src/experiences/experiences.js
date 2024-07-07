import styled from "styled-components"
import ExperienceList from "./experienceList";
import { forwardRef } from "react";

const ExperienceContainer = styled.div`
    //background-color: #F8F8D3;
    background-color: #3d423e;
    height:80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow:hidden;
    @media (max-height: 500px) {
        overflow: auto;
    }
`;

const ExperienceTitle = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    color: #FFFFFF;
    font-size: 40px;

`;

const Experiences = forwardRef((props, ref) => (
    <div ref={ref}>
      <ExperienceContainer>
            <ExperienceTitle>Experiences</ExperienceTitle>
            <ExperienceList />
        </ExperienceContainer>
    </div>
  ));
  
export default Experiences;


