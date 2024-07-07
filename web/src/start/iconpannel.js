import styled from 'styled-components';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Message from "../trivials/message";
import { useState } from 'react';


// Icons container
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around; // This will distribute space equally between icons
  align-items: center;
  padding: 10px;
  width: 50%;
`;

// Individual Icon styled component
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
function IconsPanel() {
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
                    color='#000000'
                />
            </Icon> 
            <Icon 
                href="https://www.linkedin.com/in/lijun-cai-766468268/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin 
                    size={'70%'} 
                    color='#000000'
                />
            </Icon> 
            <Icon 
                href="https://instagram.com/lijun_cai_"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagramSquare 
                    size={'70%'} 
                    color='#000000'
                />
            </Icon> 
            <Icon 
                onClick={() => {
                    navigator.clipboard.writeText('lijuncai@umass.edu')
                    setShowMessage(true)
                    setTimeout(() => {
                        setShowMessage(false);
                    }, 2500);
                }}
            >
                <MdEmail 
                    size={'70%'} 
                    color='#000000'
                />
            </Icon>
            <Message message='Email Address Copied!' show={showMessage}/>
        </IconsContainer>
    );
}

export default IconsPanel;