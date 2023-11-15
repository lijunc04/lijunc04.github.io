import { Link } from 'react-router-dom'
import './nav.scss'

export default function Nav(){
    return(
        <nav className='navbar'>
            <ul>
                <li><Link  to="/">Home</Link></li>
                <li><Link  to="/">Contacts</Link></li>
            </ul>
        </nav>
    )
}