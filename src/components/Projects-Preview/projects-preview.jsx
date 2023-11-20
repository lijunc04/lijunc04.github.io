import { useState } from "react";
import ProjectCard from "./project-card";
import './projects-preview.scss'


export default function ProjectsPreview(){

    const [projects, setProjects] = useState([
        {
            'name': "LendIt",
            'date': new Date(2023,11,12),
            'description': "LendIt is a Web-App",
            'skills': ["javascript", "react", "scss", "html", "mongodb", "auth0"],
            'image': 'lendit.jpg'
        },
        {
            'name': "Personal Website",
            'date': new Date(2023, 11, 20),
            'description': "This is the personal website I created",
            'skills': ["javascript", "react", "scss", "html"],
            'image': ""
        }
    ]);
    return(
        <div className="projects-preview">
            <h1 className="projects-preview title">Projects</h1>
            <div className="projects-preview projects-container">
                {projects.map((project)=>(
                    <ProjectCard name={project.name} date={project.date} description={project.description} skills={project.skills} image={project.image} />
                ))}
            </div>
        </div>
    )
}