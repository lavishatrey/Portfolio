import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = (props) => {
    const { active } = props;
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <React.Fragment>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="nav-background">
                        <ul className="nav-list">
                            <li className={active === "home" ? "nav-item active" : "nav-item"}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={active === "about" ? "nav-item active" : "nav-item"}>
                                <Link to="/about">About</Link>
                            </li>
                            <li className={active === "projects" ? "nav-item active" : "nav-item"}>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li className={active === "contact" ? "nav-item active" : "nav-item"}>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="dark-mode-wrapper">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="dark-mode-toggle"
                            >
                                {darkMode ? "🌙" : "☀️"}
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default NavBar;
