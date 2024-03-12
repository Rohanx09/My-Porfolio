import"./WorkCard.css";
import React from 'react'
import WorkCard from "./WorkCard";
import WorkCartData from"./WorkCartData";
// passing workcard in work and workcartdata using map method
const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">PROJECTS</h1>
        <div className="project-container">
            {WorkCartData.map((val , ind ) =>{
                return(
                    <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    ></WorkCard>
                )
            })}
                </div>
            </div>
        
  )
}

export default Work
