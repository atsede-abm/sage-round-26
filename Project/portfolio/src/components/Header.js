import React from "react";
// import'./@fortawesom/fontawesom-free/css/all.min.css';
import'../home.css'

export default function Header(){
    
    return (<div>
        <div className="Hero"> 
         <div className="header">
            <div className="logo">
            <h2>Portfolio A.</h2>
                </div>    
     <div className="header-linkfirst">
         <a className="header-link" href="#profile">Home</a>   
         <a className="header-link" href="#skill">Skills</a> 
         <a className="header-link" href="#projects">Projects</a>  
         <a className="header-link" href="#contact">Contact</a>  
          
         
        </div>
        </div>
        </div>
        </div>
        )
    }
   