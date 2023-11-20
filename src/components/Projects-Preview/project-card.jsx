import './projects-preview.scss'

export default function ProjectCard(props){

    return (
        <div className="project-card">
            <p>{props.name}</p>
            <p>{props.date.toString()}</p>
            <p>{props.description}</p>
        </div>
    )
}