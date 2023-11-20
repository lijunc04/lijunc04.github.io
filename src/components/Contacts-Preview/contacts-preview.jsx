import './contacts-preview.scss'
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

export default function ContactsPreview(){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/contacts'; 
        navigate(path);
    }
    const [copiedMessageState, setCopiedMessageState] = useState([false,false]);


    return(
        <div className='contact-preview'>
            <div className='contact-preview left-panel'>
                <h1>Contacts</h1>
                <button onClick={routeChange}>Leave me a message</button>
            </div>
            <ul className='contact-preview contact-icons-list'>
                <li className='contact-preview contact-icons-list contact-item'>
                    <FaLinkedin />
                    <a href='https://www.linkedin.com/in/lijun-cai-766468268/' target='_blank'>LinkedIn</a>
                </li>
                <li className='contact-preview contact-icons-list contact-item'>
                    <FaGithub />
                    <a href='https://www.github.com/lijunc04' target='_blank'>Github</a>
                </li>
                <li className='contact-preview contact-icons-list contact-item'>
                    <MdEmail />
                    <CopyToClipboard text='lijun.cai@gmail.com'>
                        <p onClick={()=>setCopiedMessageState([true,false])}>lijun.cai@gmail.com</p>
                    </CopyToClipboard>
                    {copiedMessageState[0] && 
                        <div>
                            <p >Copied!<a onClick={()=>setCopiedMessageState([false,false])}>x</a></p>
                            
                        </div>
                    }
                </li>
                <li className='contact-preview contact-icons-list contact-item'>
                    <FaPhoneAlt />
                    <CopyToClipboard text='4134661314'>
                        <p onClick={()=>setCopiedMessageState([false,true])}>(+1)413-466-1314</p>
                    </CopyToClipboard>
                    {copiedMessageState[1] && 
                        <div>
                            <p>Copied!<a onClick={()=>setCopiedMessageState([false,false])}>x</a></p>
                            
                        </div>
                    }
                </li>
            </ul>
        </div>
    )
}