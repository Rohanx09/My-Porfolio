import { FaFacebook, FaHome , FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./Footer.css";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location"><FaHome size={20}
                style={{ color : "#fff" , marginRight : "2rem"}}/>
                <div><p>
                    BE 55 Hari Nagar Delhi 110064.
                </p><p>
                    India , New Delhi
                </p>
                    </div>
                </div>
                <div className="phone">
                    <h4>< FaPhone size={20} style={{color : "#fff" , marginRight : "2rem" }}/> 123456 </h4>
                </div>
                <div className="email">
                    <h4>< FaMailBulk size={20} style={{color : "#fff" , marginRight : "2rem" }}/>rohan.rks.kumar@gmail.com </h4>
                </div>
            </div>

            <div className="right">
            <h4>About Me </h4>
            <p>This is Rohan Kumar . An Engineer from Delhi Technological University (DCE).
                And a MERN stack Developer . I enjoy challenges and coding and more over new idea and projets and working over them 
            </p>
            <div className="social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> {/* If you intend to open an external link in a new tab, it's vital not just to use target="_blank" , but also to include rel="noopener noreferrer" . This ensures both your website and your users remain secure.*/}
            <FaFacebook
                    size={30}
                    style={{color:"#fff", marginRight : "1rem"}}
                    /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">        
            <FaLinkedin
                    size={30}
                    style={{color:"#fff", marginRight : "1rem"}}/>
                    </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">               
            <FaInstagram
                    size={30}
                    style={{color:"#fff", marginRight : "1rem"}}/>
                    </a>
                    </div>                 
        </div>
      </div>
    </div>
  )
}

export default Footer
