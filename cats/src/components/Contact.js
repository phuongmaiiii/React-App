import React from "react";

import phoneIcon from "../images/phone-icon.jpg";
import mailIcon from "../images/mail-icon.jpg";

function Contact(props) {
    return(
        <div className="contact-card">
            <img src={props.img} alt="Cat 1" className="contact--image" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneIcon} alt="phone-icon" className="phone--icon" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} alt="mail-icon" className="mail-icon" />
                <p>{props.mail}</p>
            </div>
        </div>
    )
}
export default Contact;