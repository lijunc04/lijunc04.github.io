import styled from "styled-components"
import ProjectList from "./projectList";
import { forwardRef } from "react";

const Projects = forwardRef(({ toggleTheme, isDark }, ref) => {
    const ProjectContainer = styled.div`
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 50px;
        overflow: hidden;
        @media (max-height: 500px) {
            overflow: auto;
        }
    `;

    const ProjectTitle = styled.div`
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 40px;
        color: ${props => props.isDark ? '#e1e1e1' : '#333'};
    `;

    return (
        <div ref={ref} id="projects">
            <ProjectContainer>
                <ProjectTitle isDark={isDark}>Projects</ProjectTitle>
                <ProjectList isDark={isDark} />
            </ProjectContainer>
        </div>
    );
});

export default Projects;
