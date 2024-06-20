import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navigation ${isOpen ? "open" : ""}`}>
      <div className="toggle" onClick={toggleMenu}>
        <HiOutlineMenuAlt2 />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#Login" className="scrollto">
              <span className="icon">
                <i className="fas fa-candy-cane"></i>
              </span>
              <span className="title">Login</span>
            </a>
          </li>
          <li>
            <a href="#dashboard" className="scrollto">
              <span className="icon">
                <i className="fas fa-store"></i>
              </span>
              <span className="title">Mes Tâches</span>
            </a>
          </li>
          <li>
            <a href="mon-compte.html" className="scrollto">
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
              <span className="title">Mon Compte</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
