import React from "react";
import logo from "../images/image.png";


function Navbar() {
    return(
        <nav className="navbar">
            <img src={logo} alt="React-Logo" className="logo" />
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}
export default Navbar;
