import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Logo from "../../assets/gericht.png";
import { useState } from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

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
      <div className="app__navbar-smallscreen">
        {toggleMenu ? (
          <MdOutlineRestaurantMenu
            className="Bars Bar"
            onClick={handleToggle}
          />
        ) : (
          <GiHamburgerMenu className="Bars " onClick={handleToggle} />
        )}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay ">
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#awards">Awards</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
