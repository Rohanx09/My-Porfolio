import { Link } from "react-router-dom";
import"./AboutContent.css";
import React1 from "../assets/MERN Stack wallpaper.jpg";
import React2 from "../assets/lautaro-andreani-xkBaqlcqeb4-unsplash.jpg";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I</h1>
            <p>I am a react front-end developer . I create responsive secure websites for my clinets</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1}
                    className="img"
                    alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2}
                    className="img"
                    alt="true"/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
