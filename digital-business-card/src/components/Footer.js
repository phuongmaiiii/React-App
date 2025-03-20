import React from "react";
import fb_icon from "../images/fb-icon.png";
import instagram_icon from "../images/instagram-icon.png";
import linkedin_icon from "../images/linkedin-icon.png";
import github_icon from "../images/github-icon.png";
function Footer() {
    return(
        <footer>
            <a href="https://www.facebook.com/profile.php?id=100011771997243">
                <img src={fb_icon} alt="facebook" className="fb-icon"/>
            </a>
            <a href="https://www.instagram.com/phuongmaiiii_/">
                <img src={instagram_icon} alt="instagram" className="instagram-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/thi-phuong-nguyen-6b2a1b347/">
                <img src={linkedin_icon} alt="linkedin" className="linkedin-icon"/>
            </a>
            <a href="https://github.com/phuongmaiiii">
                <img src={github_icon} alt="github" className="github-icon"/>
            </a>
        </footer>
    )
}

export default Footer;