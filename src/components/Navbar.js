import React, { useState } from "react";
import logo from "../images/logo.png";
import { Button } from "react-bootstrap";
import { FiAlignJustify } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
function Navbar() {
  const [scroll, setScroll] = useState(false);
  useState(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY !== 0) {
        setScroll(true);

      } else {
        setScroll(false);
      }
    });
  }, [scroll]);
  return (
    <nav className={`${scroll ? "fixed-nav nav" : "nav"}`}>
      <div className='nav-container'>
        <img src={logo} alt='Tier Money' className='logo' />
        <div>
          <ul className='nav-links'>
            <li className='nav-link'>
              personal <FaChevronDown />
            </li>
            <li className='nav-link'>
              business <FaChevronDown />
            </li>
            <li className='nav-link'>
              about us <FaChevronDown />
            </li>
            <li className='nav-link'>
              help <FaChevronDown />
            </li>
          </ul>
          <div className='nav-btns'>
            <Button variant='outline-primary' className='signin-btn'>
              Sign In
            </Button>
            <Button variant='primary' className='signup-btn'>
              Open an Account
            </Button>
          </div>
          <FiAlignJustify className='toggle-btn' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
