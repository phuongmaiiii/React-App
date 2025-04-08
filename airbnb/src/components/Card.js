import React from "react";
import logo from "../images/image1.png";
import star from "../images/Star.png";

function Card() {
    return(
        <div className="card">
            <img src={logo} alt="Card Image 1" className="card--image" />
            <div className="card--info">
                <img src={star} alt="Star" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p className="card--title">Life Lessons with Katie Zaferes</p>
            <p className="card--price"><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;