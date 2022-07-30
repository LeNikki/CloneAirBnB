import React from "react";
//import Zafra from "./assets/zafra.png";
import Star from "./assets/star.png"

function Main (props){
    let badgeText
    if (props.openSpots===0){
        badgeText ="SOLD OUT"
    } else if (props.location === "Online"){
        badgeText="ONLINE"
    }
    
    return(
        <div className="main-section">
            {badgeText && <div className="badge">{badgeText}</div>}
                <img src={props.coverImg} className="profile-pic" alt="profile"/>
                <div className="rating"> 
                    <img src={Star} className="star-pic" alt="star"/> 
                    <span className="rate">{props.stats.rating}</span>
                    <span className="rating-num">({props.stats.reviewCount}) • </span>
                    <span className="rating-place">{props.location}</span>
                </div>
                <p className="label">{props.title}</p>
                <p className="price-tag">From $ {props.price} <p className="per-person">/ person</p></p>
    
           
      
           
        </div>
    )
}

export default Main; 