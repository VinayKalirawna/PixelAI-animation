import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="nav">
            <div className="logo">
                <NavLink to="/" className="logo-link" onClick={closeMenu}>
                    <h1>PixelAI</h1>
                </NavLink>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
            </div>

            {/* Navigation Links */}
            <div className={`nav-links-container ${isMenuOpen ? "open" : ""}`}>
                <NavLink className="nav-links" to="/" onClick={closeMenu}>
                    Home
                </NavLink>
                <NavLink
                    className="nav-links"
                    to="/gallery"
                    onClick={closeMenu}
                >
                    Gallery
                </NavLink>
                <NavLink className="nav-links" to="/about" onClick={closeMenu}>
                    About
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;
