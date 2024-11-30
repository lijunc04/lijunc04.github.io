import styled from 'styled-components';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Message from "../trivials/message";
import { useState } from 'react';

const email1 = 'lijun'

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around; // This will distribute space equally between icons
  align-items: center;
  padding: 10px;
  width: 50%;
`;

const Icon = styled.a`
  width: 50px; // Adjust size as necessary
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%; // Makes it circular, remove if not needed
  text-decoration: none; // Removes underline from links

  &:hover {
    background-color: #bbb; // Slightly darker on hover
    cursor: pointer;
  }
`;

const email2 = 'cai@umass.edu'
function IconsPanel({ toggleTheme, isDark }) {
    const [showMessage, setShowMessage] = useState(false);
    return (
        <IconsContainer>
            <Icon 
                href="https://github.com/lijunc04"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithubSquare 
                    size={'70%'} 
                    color={isDark ? '#FFF' : '#000'}
                />
            </Icon> 
            <Icon 
                href="https://www.linkedin.com/in/lijun-cai-766468268/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin 
                    size={'70%'} 
                    color={isDark ? '#FFF' : '#000'}
                />
            </Icon> 
            <Icon 
                onClick={() => {
                    navigator.clipboard.writeText(email1 + email2)
                    setShowMessage(true)
                    setTimeout(() => {
                        setShowMessage(false);
                    }, 2500);
                }}
            >
                <MdEmail 
                    size={'70%'} 
                    color={isDark ? '#FFF' : '#000'}
                />
            </Icon>
            <Message message='Email Address Copied!' show={showMessage}/>
        </IconsContainer>
    );
}

export default IconsPanel;