import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import Logo from "../../assets/gericht.png";

function Navbar() {
  return (
    <nav className="app__navbar">
      <div className="app__navbar_logo">
        <img src={Logo} alt="App-logo" />
      </div>
      <ul className="app__navbar_links">
        <li className="p__opensans">
          <a href="#Home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#About">About</a>
        </li>
        <li className="p__opensans">
          <a href="#Menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#Awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="login-register">
        <p>Log in / Register </p>
        <span>|</span>
        <p> Book Table</p>
      </div>
    </nav>
  );
}

export default Navbar;
