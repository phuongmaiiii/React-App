import React from "react";


function Card(props) {
    const imagePath = "/images/"; // Adjust the path as necessary
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    } else {
        badgeText = null;
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={imagePath + props.item.coverImg} alt={props.item.title} className="card--image" />
            <div className="card--info">
                <img src={imagePath + "Star.png"} alt="Star" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card;