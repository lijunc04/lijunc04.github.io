import styled from 'styled-components';
import DarkModeButton from '../assets/dark-mode-svgrepo-com.svg';

export default function RightNav({ currentSection, toggleTheme, isDark }) {
    const RightNavContainer = styled.div`
        position: fixed;
        right: 20px;
        top: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 20px;
        z-index: 1000;
        @media (max-width: 768px) {
            display: none;
        }
    `;

    const NightModeButton = styled.button`
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }
    `;

    const Icon = styled.img`
        width: 24px;
        height: 24px;
        filter: ${props => props.isDark ? 'invert(1)' : 'none'};
        transition: filter 0.3s ease;
    `;

    const NavList = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 12px;
    `;

    const NavItem = styled.div`
        color: ${isDark ? '#e3e3e3' : '#000'};
        font-size: 16px;
        font-weight: ${props => props.isActive ? '600' : '400'};
        opacity: ${props => props.isActive ? '1' : '0.6'};
        transition: all 0.3s ease;
        
        &::after {
            content: '';
            display: block;
            width: ${props => props.isActive ? '100%' : '0%'};
            height: 2px;
            background-color: ${isDark ? '#e3e3e3' : '#000'};
            transition: width 0.3s ease;
            margin-top: 2px;
        }
    `;

    const sections = ['home', 'experience', 'projects'];

    return (
        <RightNavContainer>
            <NightModeButton onClick={toggleTheme}>
                <Icon src={DarkModeButton} alt="Dark Mode Toggle" isDark={isDark} />
            </NightModeButton>
            {/* <NavList>
                {sections.map((section) => (
                    <NavItem 
                        key={section}
                        isActive={currentSection === section}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </NavItem>
                ))}
            </NavList> */}
        </RightNavContainer>
    );
}
