import styled from 'styled-components';

const NavContainer = styled.div`
    height: 9vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3d423e;
    padding: 10px 20px;
    @media (max-width: 768px) {
        display: none;  
    }
`;

const NavItem = styled.div`
    color: white;
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
        background-color: white;
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

export default function Nav({ onNavSelect, experiencesRef, projectsRef, contactsRef }){
    return (
        <NavContainer>
            <NavItems>
                <NavItem onClick={() => onNavSelect(experiencesRef)}>Experiences</NavItem>
                <NavItem onClick={() => onNavSelect(projectsRef)}>Projects</NavItem>
                <NavItem onClick={() => onNavSelect(contactsRef)}>Contacts</NavItem>
            </NavItems>
        </NavContainer>
    )
}