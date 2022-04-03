import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";

import { images } from "../../constants";

const FindUs = () => {
  return (
    <div className="app__Findus-MainContainer">
      <div className="app__Findus-Container">
        <div className="app__findus-Content">
          <SubHeading title="Contact" />
          <h1>FInd Us</h1>
          <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className="opening">Opening</p>
          <div className="dateandtime">
            <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
            <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
          </div>
          <button>Vist us</button>
        </div>
        <div className="app__Findus-imgContainer">
          <img src={images.findus} alt="find us img" />
        </div>
      </div>
    </div>
  );
};

export default FindUs;
