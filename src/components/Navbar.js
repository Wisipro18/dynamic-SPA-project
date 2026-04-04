import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import ConfettiLogo from "./ConfettiLogo";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <nav className="navbar">
      <ConfettiLogo /> {/* click to show confetti */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button className="toggle-button" onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>
    </nav>
  );
};

export default Navbar;