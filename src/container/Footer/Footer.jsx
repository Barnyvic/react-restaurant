import React from "react";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import Newsletter from "../../components/Footer/Newsletter";
import SubHeading from "../../components/SubHeading/SubHeading";

const Footer = () => {
  return (
    <div className="app__Footer-MainContainer">
      <Newsletter />
      <div className="footerGridContainer">
        <div className="ContactUs">
          <h4>Contact Us</h4>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-555-1230</p>
        </div>
        <div className="geret">
          <img className="footerlogo" src={images.gericht} alt="footer logo" />
          <p>
            "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
            Others."
          </p>
          <SubHeading />
          <FiFacebook className="socials" /> <FiTwitter className="socials" />
          <FiInstagram className="socials" />
        </div>
        <div className="workingHours">
          <h4>Working Hours</h4>
          <p>Monday-Friday: 08:00 Am - 12:00 Am</p>
          <p>Saturday-Sunday: 07:00 Am - 11:00 Pm</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
