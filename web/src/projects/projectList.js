import styled from "styled-components";
import { projectData } from "./projectData";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const ProjectListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 5%;
    flex: 10;
    width: 70%;  
`;

const ProjectContainer = styled.div`
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
        box-shadow: 0 8px 32px ${props => props.isDark ? 
            'rgba(0, 0, 0, 0.3)' : 
            'rgba(0, 0, 0, 0.1)'
        };

        &:before {
            width: 8px;
            background: ${props => props.isDark ? '#a5a6d4' : '#8687af'};
        }
    }
`;

const ProjectDetails = styled.div`
    flex: 1;
    padding-right: 10px;
    padding-left: 5%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const ProjectTitle = styled.h2`
    margin: 0;
    color: ${props => props.isDark ? '#e1e1e1' : '#333'};
`;

const ProjectSubtitle = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${props => props.isDark ? '#b1b1b1' : '#444'};
    line-height: 1.4;
`;

const ProjectImage = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin-right: 5%;
`;

const LinksContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

const LinkIcon = styled.a`
    color: ${props => props.isDark ? '#b1b1b1' : '#555'};
    font-size: 20px;
    transition: color 0.3s ease;
    
    &:hover {
        color: ${props => props.isDark ? '#e1e1e1' : '#333'};
    }
`;

const PlaceholderContainer = styled(ProjectContainer)`
    justify-content: center;
    opacity: 0.7;
    font-style: italic;
    color: ${props => props.isDark ? '#b1b1b1' : '#555'};
    
    &:hover {
        transform: none;
        cursor: default;
    }
`;

const ProjectDescription = styled.span`
    font-size: 14px;
    color: ${props => props.isDark ? '#b1b1b1' : '#666'};
    font-style: italic;
    margin-left: 15px;
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
`;

const SkillTag = styled.div`
    background-color: ${props => props.isDark ? '#2d2f34' : '#000000'};
    color: ${props => props.isDark ? '#e3e3e3' : '#FFFFFF'};
    border-radius: 20px;
    text-align: center;
    padding: 3px 8px;
    font-size: 12px;

    &:hover {
        background-color: ${props => props.isDark ? '#404249' : '#A0A095'};
        color: ${props => props.isDark ? '#ffffff' : '#000000'};
        cursor: pointer;
    }
`;

const Project = ({ project, isDark }) => (
    <ProjectContainer isDark={isDark}>
        <ProjectDetails>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ProjectTitle isDark={isDark}>{project.title}</ProjectTitle>
                <ProjectDescription isDark={isDark}>{project.description}</ProjectDescription>
            </div>
            <ProjectSubtitle isDark={isDark}>{project.position}</ProjectSubtitle>
            <ProjectSubtitle isDark={isDark}>{project.period}</ProjectSubtitle>
            {project.award && 
                <ProjectSubtitle isDark={isDark}>{project.award}</ProjectSubtitle>
            }
            {project.skills && 
                <SkillsContainer>
                    {project.skills.map((skill, index) => (
                        <SkillTag key={index} isDark={isDark}>
                            {skill}
                        </SkillTag>
                    ))}
                </SkillsContainer>
            }
            {project.links && 
                <LinksContainer>
                    {project.links.map((link, index) => (
                        <LinkIcon 
                            key={index} 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            isDark={isDark}
                        >
                            {link.includes('github') ? <FaGithub /> : <BiLinkExternal />}
                        </LinkIcon>
                    ))}
                </LinksContainer>
            }
        </ProjectDetails>
        <ProjectImage src={project.image} alt="Project" />
    </ProjectContainer>
);

export default function ProjectList({ isDark }){
    return (
        <ProjectListContainer>
            {projectData.map((project, index) => (
                <Project key={index} project={project} isDark={isDark} />
            ))}
            <PlaceholderContainer isDark={isDark}>
                More to come...
            </PlaceholderContainer>
        </ProjectListContainer>
    );
}