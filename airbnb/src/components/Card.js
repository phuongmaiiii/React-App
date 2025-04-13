import React from "react";

import star from "../images/Star.png";

function Card(props) {
    return(
        <div className="card">
            <img src={props.img} alt="Card Image 1" className="card--image" />
            <div className="card--info">
                <img src={star} alt="Star" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;