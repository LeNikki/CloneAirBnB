import React from "react";
import logo from "./assets/air_bnb_logo.png";
import collage from "./assets/collage.png"

function UpperSec(){
    return(
        <section>
            <nav className ="navbar">  <img src = {logo} className="logoPic" alt="logo"/> </nav>
           <div className = "collage">
            <img src = {collage} className="collagePic" alt="collage"/>
           </div>
           <div className="introduction">
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
           </div>
        </section>
    )
}
export default UpperSec;