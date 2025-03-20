import React from "react";
import logo from "../images/me.jpg";
import email_icon from "../images/Button.png";

function Main() {
    return(
        <main>
            <div className="info">
                <img src={logo} alt="logo" className="logo"/>
                <h1>Thi Phuong Nguyen</h1>
                <p className="role">Frontend Developer</p>
                <p className="links">phuongmaiii.vercel.app</p>
                <a href="mailto:nguyenphuong20011126@gmail.com" className="email-button">
                    <img src={email_icon} alt="email" className="email-icon"/>
                </a>
            </div>
            <div className="about">
                <h2>About Me</h2>
                <p>Hi, I'm Phuong. I'm a frontend developer with a passion for web development. I'm currently learning React 
                    and I'm excited to build some cool projects with it. 
                    I am a sixth-semester computer science student at Aachen University of Applied Sciences, majoring in software engineering. 
                    I have solid knowledge of Java, C++, JavaScript and basic knowledge of Python. 
                    I also have experience with Linux, Docker, and creating dashboards with Grafana and Power BI. 
                    Working with databases, I have gained knowledge of MySQL and PostgreSQL. 
                    Through my studies and practical projects, I have also gained experience with agile development methods.
                </p>
            </div>
            <div className="interests">
                <h2>Interests</h2>
                <p>Fotographie. Reisen. Food expert</p>
            </div>
            <div className="sprache">
                <h2>Sprachen</h2>
                <p>Vietnamesisch. Deutsch. Englisch.</p>
            </div>
        </main>
    )
}

export default Main;