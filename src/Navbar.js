import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed to account for any fixed header
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Experience
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
           Skills
          </Link>
        </li>
        
        <li className="navbar-item">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
