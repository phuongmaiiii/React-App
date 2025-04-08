import React from "react";
import cat1 from "../images/cat1.jpg";
import cat2 from "../images/cat2.jpg";
import cat3 from "../images/cat3.jpg";
import cat4 from "../images/cat4.jpg";
import phoneIcon from "../images/phone-icon.jpg";
import mailIcon from "../images/mail-icon.jpg";

function Contact() {
    return(
        <div className="contacts">
             <div className="contact-card">
                <img src={cat1} alt="Cat 1" className="contact--image" />
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img src={phoneIcon} alt="phone-icon" className="phone--icon" />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src={mailIcon} alt="mail-icon" className="mail-icon" />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>
            <div className="contact-card">
                <img src={cat2} alt="Cat 2" className="contact--image" />
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img src={phoneIcon} alt="phone-icon" className="phone--icon" />
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img src={mailIcon} alt="mail-icon" className="mail-icon" />
                    <p>fluff@me.com</p>
                </div>
            </div>
            <div className="contact-card">
                <img src={cat3} alt="Cat 3" className="contact--image"/>
                <h3>Felix</h3>
                <div className="info-group">
                    <img src={phoneIcon} alt="phone-icon" className="phone--icon" />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src={mailIcon} alt="mail-icon" className="mail-icon" />
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src={cat4} alt="Cat 4" className="contact--image"/>
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img src={phoneIcon} alt="phone-icon" className="phone--icon" />
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img src={mailIcon} alt="mail-icon" className="mail-icon" />
                    <p>pumpkin@scrimba.com</p>
                </div>
            </div>
            
        </div>
    )
}
export default Contact;