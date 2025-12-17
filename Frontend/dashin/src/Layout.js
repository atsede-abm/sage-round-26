import { Link,outlet } from "react-router-dom"


export default function Layout(){
    return <div>
       <ul>
        <li><Link to="/"> Home page</Link></li>
        <li><Link to="/About"> About page</Link></li>
        <li><Link to="/Products"> Products page</Link></li>
      </ul>
    <outlet/>
        <h2>This is footer from layout</h2>
    </div>}