import styled from 'styled-components';

const TrackerContainer = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1000;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.active ? (props.isDark ? '#ffffff' : '#000000') : (props.isDark ? '#404249' : '#A0A095')};
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }
`;

const SectionName = styled.span`
    position: absolute;
    right: 20px;
    font-size: 12px;
    opacity: ${props => props.show ? 1 : 0};
    transition: opacity 0.3s ease;
    color: ${props => props.isDark ? '#ffffff' : '#000000'};
`;

export default function SectionTracker({ currentSection, isDark }) {
    const sections = ['Start', 'Experience', 'Projects', 'Contact'];
    
    const scrollToSection = (section) => {
        document.getElementById(section.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <TrackerContainer>
            {sections.map((section) => (
                <div key={section} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <SectionName 
                        show={currentSection === section.toLowerCase()} 
                        isDark={isDark}
                    >
                        {section}
                    </SectionName>
                    <Dot 
                        active={currentSection === section.toLowerCase()}
                        isDark={isDark}
                        onClick={() => scrollToSection(section)}
                    />
                </div>
            ))}
        </TrackerContainer>
    );
} 