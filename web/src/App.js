import { useRef, useState, useEffect, useCallback } from 'react'
import RightNav from './nav/rightNav';
import Start from './start/start';
import styled from 'styled-components';
import Experiences from './experiences/experiences';
import Projects from './projects/projects';
import Contacts from './contacts/contacts';



function App() {

  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);
  const [isDark, setIsDark] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

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
    const sectionMap = { 'start': 'home', 'experience': 'experience', 'projects': 'projects' };
    const htmlIds = Object.keys(sectionMap);
    let scrollTimeout;

    const checkCurrentSection = () => {
      // Check if we're at the very top of the page
      if (window.scrollY < 100) {
        setCurrentSection('home');
        return;
      }
      
      let currentSectionFound = false;
      for (const htmlId of htmlIds) {
        const element = document.getElementById(htmlId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
            const sectionName = sectionMap[htmlId];
            setCurrentSection(sectionName);
            currentSectionFound = true;
            break;
          }
        }
      }

      if (!currentSectionFound && document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
        setCurrentSection('projects');
      }
    };

    const handleScroll = throttle(() => {
      checkCurrentSection();
      
      // Clear existing timeout and set a new one to check position when scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        checkCurrentSection();
      }, 150);
    }, 100); // Throttle to 100ms

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []); // Remove currentSection from dependencies

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
    @media (max-width: 768px) {
      height: 100vh;
    }
  `;


  return (
    <PageContainer>
      <RightNav 
        currentSection={currentSection}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
      <Start 
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      {/* <Experiences 
        ref={experiencesRef}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      <Projects 
        ref={projectsRef}
        isDark={isDark}
        toggleTheme={toggleTheme}
      /> */}
    </PageContainer>
  );
}

export default App;
