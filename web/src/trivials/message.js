import styled, { keyframes } from "styled-components";
const fadeInOut = keyframes`
    0% { bottom: -50px; opacity: 0; }
    10% { bottom: 50px; opacity: 1; }
    90% { bottom: 50px; opacity: 1; }
    100% { bottom: -50px; opacity: 0; }
`;


const ToastContainer = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 80px;
    background-color: #323232;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    animation: ${fadeInOut} 2.5s ease;
    z-index: 1000;
    text-align: center;
    user-select: none;
`;

function Message({ message, show }) {
    if (!show) return null;

    return (
        <ToastContainer>
        {message}
        </ToastContainer>
    );
}

export default Message;