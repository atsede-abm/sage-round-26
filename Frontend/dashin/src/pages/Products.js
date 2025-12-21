import { Link } from "react-router-dom"


export default function Products(){
    return <div>

        <h1> Products Page</h1>
        <p> Fruits</p>
             <ul>
        <li><Link>Apple</Link></li>
        <li><Link>Banana</Link></li>
        <li><Link>Orange</Link></li>
        <li><Link>Mango</Link></li>
            </ul>
         <Link to="/about">About Page</Link>
        </div>
    
    }