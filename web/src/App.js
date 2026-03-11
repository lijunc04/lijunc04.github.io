import { useRef, useState, useEffect, useCallback } from 'react'
import RightNav from './nav/rightNav';
import Start from './start/start';
import styled from 'styled-components';
import Experiences from './experiences/experiences';
import Projects from './projects/projects';
import Contacts from './contacts/contacts';
import { createGlobalStyle } from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.$isDark ? '#1a1b1e' : '#f2f2f2'};
  color: ${props => props.$isDark ? '#e3e3e3' : '#000'};
  width: 100vw;
  height: 100vh;
  @media (max-width: 768px) {
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    height: auto;
  }
`;

// Also move GlobalStyle outside
const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.$isDark ? '#1a1b1e' : '#f2f2f2'};
    transition: background-color 0.5s ease;
    overflow-x: hidden;
    width: 100%;
  }
`;


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

useEffect(() => {
  const updateHeight = () => {
    // We get the height once when called
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  // 1. Set initial height on mount
  updateHeight();

  // 2. Only update when the device flips, NOT on scroll/resize
  window.addEventListener('orientationchange', () => {
    // Small timeout ensures the browser has finished rotating 
    // before we measure the new height
    setTimeout(updateHeight, 200);
  });

  return () => {
    window.removeEventListener('orientationchange', updateHeight);
  };
}, []);

  return (
    <>
    <GlobalStyle $isDark={isDark} />
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
    </>

  );
}

export default App;
