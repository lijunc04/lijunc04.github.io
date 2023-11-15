import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <>
            <p>Page Not Exist</p>
            <Link to = '/'>Home</Link>
        </>
    )
}