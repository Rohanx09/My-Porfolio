import "./Heroimg2.css";
import React from 'react';

const Heroimg2 = ({head , text }) => {
  return (
    <div className="hero-img"> {/*here i will import background imag efrom url even though i can do it from previous method*/}
        <div className="heading">
            <h1>{head}</h1>{/*here i will be passing props */}
            <p> {text}</p>
        </div>
      
    </div>
  )
};

export default Heroimg2
