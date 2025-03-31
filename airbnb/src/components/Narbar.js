import React from "react";
import logo from "../images/airbnb.png";

function Navbar() {
    return (
        <nav className="navbar"> 
           <img src={logo} alt="React-Logo" className="logo" />
        </nav>
    );
}

export default Navbar;