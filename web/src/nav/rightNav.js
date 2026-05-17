import styled from 'styled-components';
import DarkModeButton from '../assets/dark-mode-svgrepo-com.svg';

// ─── STYLED COMPONENTS MOVED OUTSIDE ───
const RightNavContainer = styled.div`
    position: fixed;
    right: 20px;
    top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    z-index: 1000;
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
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    filter: ${props => props.$isDark ? 'invert(1)' : 'none'};
    transition: filter 0.5s ease;
`;

const NavList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
`;

const NavItem = styled.div`
    color: ${props => props.$isDark ? '#e3e3e3' : '#000'};
    font-size: 16px;
    font-weight: ${props => props.$isActive ? '600' : '400'};
    opacity: ${props => props.$isActive ? '1' : '0.6'};
    transition: all 0.5s ease;
    
    &::after {
        content: '';
        display: block;
        width: ${props => props.$isActive ? '100%' : '0%'};
        height: 2px;
        background-color: ${props => props.$isDark ? '#e3e3e3' : '#000'};
        transition: width 0.5s ease;
        margin-top: 2px;
    }
`;

// ─── CLEAN COMPONENT FUNCTION ───
export default function RightNav({ currentSection, toggleTheme, isDark }) {
    return (
        <RightNavContainer>
            <NightModeButton onClick={toggleTheme}>
                {/* Prefixed with $ to indicate a styled-component transient prop */}
                <Icon src={DarkModeButton} alt="Dark Mode Toggle" $isDark={isDark} />
            </NightModeButton>
        </RightNavContainer>
    );
}