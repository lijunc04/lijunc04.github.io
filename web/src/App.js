import { useRef, useState, useEffect, useCallback } from 'react'
import Nav from './nav/nav';
import Start from './start/start';
import styled from 'styled-components';
import Experiences from './experiences/experiences';
import Projects from './projects/projects';
import Contacts from './contacts/contacts';
import SectionTracker from './components/SectionTracker';



function App() {

  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [currentSection, setCurrentSection] = useState('start');

  // Throttle the scroll handler
  const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  useEffect(() => {
    const handleScroll = throttle(() => {
      const sections = ['start', 'experience', 'projects', 'contact'];
      let currentSectionFound = false;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
            if (currentSection !== section) {
              setCurrentSection(section);
            }
            currentSectionFound = true;
            break;
          }
        }
      }


      if (!currentSectionFound && document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
        setCurrentSection('contact');
      }
    }, 100); // Throttle to 100ms

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]); // Add currentSection as dependency

  // Memoize toggleTheme to prevent unnecessary re-renders
  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  // Move styled component outside component
  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${isDark ? '#1a1b1e' : '#FFFFFF'};
    color: ${isDark ? '#e3e3e3' : '#000'};
    width: 100vw;
    user-select:none;
    @media (max-width: 768px) {
      height: 600vh;
    }
  `;


  return (
    <PageContainer>
      <Nav 
        onNavSelect={(section) => {
          section.current.scrollIntoView({ behavior: 'smooth' }); 
        }}
        experiencesRef={experiencesRef}
        projectsRef={projectsRef}
        contactsRef={contactsRef}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
      <Start
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      <Experiences 
        ref={experiencesRef}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      <Projects 
        ref={projectsRef}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      <Contacts 
        ref={contactsRef}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      <SectionTracker 
        currentSection={currentSection}
        isDark={isDark}
      />
    </PageContainer>
  );
}

export default App;
