import styled from "styled-components"

const ContactContainer = styled.div`
    //background-color: #F8F8D3;
    background-color: #3d423e;
    height: 80vh;
    display: flex;
`;

const ContactTitle = styled.div`

`;


export default function Contacts(){
    return(
        <ContactContainer>
            <ContactTitle>Contact Me</ContactTitle>
        </ContactContainer>
    )
}