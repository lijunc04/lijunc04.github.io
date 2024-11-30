import styled from 'styled-components';
import NightMode from './nightMode';


export default function Nav({ onNavSelect, experiencesRef, projectsRef, contactsRef, toggleTheme, isDark }){
    const NavContainer = styled.div`
        position: relative;
        margin: 5px;
        height: 3vh;
        display: flex;
        background-color: ${isDark ? '#1a1b1e' :'#FFF'};
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        @media (max-width: 768px) {
            display: none;  
        }
    `;

    const NavItem = styled.div`
        color: ${isDark ? '#e3e3e3' : '#000'};
        margin: 0 10px;
        position: relative;
        cursor: pointer;
        font-size: 22px;

        &::after {
            content: '';
            position: absolute;
            width: 0%;
            height: 2px;
            bottom: -5px;
            left: 50%;
            background-color: ${isDark ? '#e3e3e3' : '#000'};
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }

        &:hover::after {
            width: 100%;
        }
    `;

    const NavItems = styled.div` 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        gap: 30%;
    `;



    return (
        <NavContainer>
            <NavItems>
                <NavItem onClick={() => onNavSelect(experiencesRef)}>Experiences</NavItem>
                <NavItem onClick={() => onNavSelect(projectsRef)}>Projects</NavItem>
                <NavItem onClick={() => onNavSelect(contactsRef)}>Contacts</NavItem>
            </NavItems>
            <NightMode toggleTheme={toggleTheme} isDark={isDark} />
        </NavContainer>
    )
}