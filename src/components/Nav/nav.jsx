import './nav.scss'
import { FaList } from "react-icons/fa";

export default function Nav(){
    const navComponents = ['HOME', 'ABOUT ME', 'PROJECTS', 'HOBBIES', 'CONTACTS'];

    return(
        <nav className='navbar'>
            <ul>
                {navComponents.map((item,index)=>(
                    <li className='navbar items' key={index}>
                        <a href={`/${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <button className='navbar menu-button'>
                <FaList className='' />
            </button>
        </nav>
    )
}