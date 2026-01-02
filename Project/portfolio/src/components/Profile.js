import React from 'react';
import Photo from "../assets/Photo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub,faTiktok,faWhatsapp } from '@fortawesome/free-brands-svg-icons';



import '../home.css'
 function Profile() {
    return(
        <div className='card-Profile' id='profile'>
            <div className='profile'>
            <img
            className='profile-img'
            src={Photo}
           alt='Atsede Profile'
          
            />
             </div>
             <div className='profile-p'>

            <h2> Hi, I'm Atsede </h2>
            <h4>I'm website Developer</h4>
            <p>
                I am a beginner Web developer focused on building responsive <br/>
                and user-friendly websites. I am continuously learning modern web <br/>
                technologies and enjoy turning ideas into interactive web experiences.
            </p>
            <button className="btn-c"> Contact me </button>
            <div className='icon'>
                <FontAwesomeIcon icon={faLinkedin} className="social-icon"/>
                 <FontAwesomeIcon icon={faGithub} className="social-icon" />
                 <FontAwesomeIcon icon={faTiktok} className="social-icon" />
                 <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
            </div>
        </div>
        </div>
    );
}  
export default Profile;
