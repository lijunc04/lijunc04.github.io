import styled from "styled-components";
import { forwardRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactContainer = styled.div`
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`;

const ContactTitle = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 40px;
    color: ${props => props.isDark ? '#e1e1e1' : '#333'};
`;

const ContactOptionsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;
    flex-wrap: wrap;
    padding: 0 20px;

    @media (max-width: 768px) {
        gap: 20px;
    }
`;

const ContactOption = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: ${props => props.isDark ? '#e1e1e1' : '#333'};
    transition: transform 0.3s ease;
    padding: 20px;
    border-radius: 12px;
    background: ${props => props.isDark ? 
        'rgba(30, 30, 30, 0.7)' : 
        'rgba(255, 255, 255, 0.1)'
    };
    backdrop-filter: blur(10px);
    border: 1px solid ${props => props.isDark ? 
        'rgba(255, 255, 255, 0.1)' : 
        'rgba(255, 255, 255, 0.2)'
    };

    &:hover {
        transform: translateY(-5px);
        background: ${props => props.isDark ? 
            'rgba(40, 40, 40, 0.8)' : 
            'rgba(255, 255, 255, 0.15)'
        };
    }
`;

const IconWrapper = styled.div`
    font-size: 32px;
    margin-bottom: 10px;
`;

const ContactLabel = styled.span`
    font-size: 16px;
    text-align: center;
`;

const Contacts = forwardRef((props, ref) => {
    const contactOptions = [
        {
            icon: <FaGithub />,
            label: "GitHub",
            url: "https://github.com/lijunc04"
        },
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/lijun-cai-b3b5b7250/"
        },
        {
            icon: <FaEnvelope />,
            label: "Email",
            url: "mailto:lijuncai@umass.edu"
        }
    ];

    return (
        <div ref={ref}>
            <ContactContainer id='contact'>
                <ContactTitle isDark={props.isDark}>Contact Me</ContactTitle>
                <ContactOptionsContainer>
                    {contactOptions.map((option, index) => (
                        <ContactOption 
                            key={index} 
                            href={option.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            isDark={props.isDark}
                        >
                            <IconWrapper>{option.icon}</IconWrapper>
                            <ContactLabel>{option.label}</ContactLabel>
                        </ContactOption>
                    ))}
                </ContactOptionsContainer>
            </ContactContainer>
        </div>
    );
});

export default Contacts;