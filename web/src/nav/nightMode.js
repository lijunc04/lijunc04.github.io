import styled from 'styled-components';
import DarkModeButton from '../assets/dark-mode-svgrepo-com.svg';

const NightModeButton = styled.button`
    position: absolute;
    right: 30px;
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

export default function NightMode({ toggleTheme, isDark }) {
    return (
        <NightModeButton onClick={toggleTheme}>
            <Icon src={DarkModeButton} alt="Dark Mode Toggle" isDark={isDark} />
        </NightModeButton>
    );
}
