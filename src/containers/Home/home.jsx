import ContactsPreview from '../../components/Contacts-Preview/contacts-preview'
import ProjectsPreview from '../../components/Projects-Preview/projects-preview'
import Start from '../../components/Start/start'

export default function Home(){

    return (
        <div>
            <Start />
            <ProjectsPreview />
            <ContactsPreview  />
        </div>
    )
}