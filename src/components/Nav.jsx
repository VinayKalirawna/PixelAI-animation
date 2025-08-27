import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav">
            <div className="logo">
                <h1 className="logo">PixelAI</h1>
            </div>

            <div className="nav-links-container">
                <NavLink className="nav-links" to="/">
                    Home
                </NavLink>
                <NavLink className="nav-links" to="/gallery">
                    Gallery
                </NavLink>
                <NavLink className="nav-links" to="/about">
                    About
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;
