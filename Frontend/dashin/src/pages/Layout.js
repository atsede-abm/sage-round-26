import { Link,Outlet } from "react-router-dom"


export default function Layout(){
    return <div>
    
        <Link to="/"> Home page</Link>
        <Link to="/About"> About page</Link>
        <Link to="/Products"> Products page</Link>
          
       <Outlet />
        <h2>This is footer from layout</h2>
    </div>
    
  }