import styled from "styled-components"
import ExperienceList from "./experienceList";
import { forwardRef } from "react";

const Experiences = forwardRef((props, ref) => {
    const ExperienceContainer = styled.div`
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 50px;
    `;

    const ExperienceTitle = styled.div`
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 40px;

    `;
    return (
        <div ref={ref} id="experience">
            <ExperienceContainer>
                    <ExperienceTitle>Experiences</ExperienceTitle>
                    <ExperienceList isDark={props.isDark} />
            </ExperienceContainer>
        </div>
    )});
  
export default Experiences;


