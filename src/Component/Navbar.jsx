import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div>
        <span className="logo-icon">🌱</span>
        <span className="logo-text">CarbonCalc</span>
      </div>

      <ul className="navbar-links">
        <li>
          <a>
            <Link to="/home">Calculator</Link>
          </a>
        </li>
        <li>
          {/* this fgoes to offsets */}
          <a>
            <Link to="/why-carbon">Why Carbon?</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/projects">Projects</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/about">About</Link>
          </a>
        </li>
      </ul>

      <div className="navbar-actions">
        <Link className="signup-button" to="/login">
          Login
        </Link>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
