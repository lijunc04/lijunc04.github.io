import styled from 'styled-components';
import Resume from '../assets/resume.pdf';

const themeTransition = 'color 0.5s ease';

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
  font-size: 16px;
  color: ${props => props.$isDark ? '#888' : '#666'};
  transition: ${themeTransition};
  user-select: none;
`;

const TextLink = styled.a`
  color: ${props => props.$isDark ? '#8ab4ff' : '#1a0dab'};
  text-decoration: none;
  font-weight: 500;
  transition: ${themeTransition};

  &:hover {
    text-decoration: underline;
  }
`;

function IconsPanel({ isDark }) {
    return (
        <LinksContainer $isDark={isDark}>
            <TextLink 
                href="https://github.com/lijunc04" 
                target="_blank" 
                rel="noopener noreferrer"
                $isDark={isDark}
            >
                GitHub
            </TextLink>
            <span><b>/</b></span>
            <TextLink 
                href="https://www.linkedin.com/in/lijuncai/" 
                target="_blank" 
                rel="noopener noreferrer"
                $isDark={isDark}
            >
                LinkedIn
            </TextLink>
            <span><b>/</b></span>
            <TextLink 
                href={Resume} 
                target="_blank" 
                rel="noopener noreferrer"
                $isDark={isDark}
            >
                Résumé
            </TextLink>
            <span><b>/</b></span>
            <TextLink 
                href="mailto:lijun.cai04@gmail.com"
                $isDark={isDark}
            >
                Email
            </TextLink>
        </LinksContainer>
    );
}

export default IconsPanel;