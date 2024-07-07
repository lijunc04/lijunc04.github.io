import { useRef } from 'react'
import Nav from './nav/nav';
import Start from './start/start';
import styled from 'styled-components';
import Experiences from './experiences/experiences';
import Projects from './projects/projects';
import Contacts from './contacts/contacts';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  background-color: #F8F8D3;
  width: 100vw;
  @media (max-width: 768px) {
    height: 600vh;
}
`;

function App() {
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);
  return (
    <PageContainer style={{backgroundColor: '#F8F8D3'}}>
      <Nav 
        onNavSelect={(section) => {
          section.current.scrollIntoView({ behavior: 'smooth' }); 
        }}
        experiencesRef={experiencesRef}
        projectsRef={projectsRef}
        contactsRef={contactsRef}
      />
      <Start/>
      <Experiences ref={experiencesRef}/>
      <Projects ref={projectsRef}/>
      <Contacts ref={contactsRef}/>
    </PageContainer>
  );
}

export default App;
