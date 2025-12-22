
import {Link, useNavigate} from 'react-router-dom'

export default function Home(){
    const Navigate=useNavigate()
    return <div>

        <h1> Home page </h1>
        <button onClick={()=>{
            Navigate('/about')
        }}> About page</button>
        <Link to='/about'> About page</Link>


    </div>
}