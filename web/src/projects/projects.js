import styled from "styled-components"
import ProjectList from "./projectList";
import { forwardRef } from "react";

const ProjectContainer = styled.div`
    background-color: #F8F8D3;
    height:80vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow:hidden;
    @media (max-height: 500px) {
        overflow: auto;
    }
`;

const ProjectTitle = styled.div`
    flex: 1;
`;

const RightPanel = styled.div`
    flex: 5;
    width: 100%;
`;


const Projects = forwardRef((props, ref) => (
    <div ref={ref}>
        <ProjectContainer>
            <ProjectTitle>Projects</ProjectTitle>
            <RightPanel>
                <ProjectList />
            </RightPanel>
        </ProjectContainer>
    </div>
  ));
  
export default Projects;
