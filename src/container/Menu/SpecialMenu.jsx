import React from "react";

import { images, date } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";

const SpecialMenu = () => (
  <div className="app__Specialmenu-Container">
    <div className="app__Specialmenu-Content">
      <SubHeading title="Menu That Fits Your Palatte" />
      <h1>Today's Special</h1>
    </div>
    <div className="app__Specialmenu-subContent">
      <div className="WineBeer"></div>
      <div className="app__special-img"></div>
      <div className="Cocktails"></div>
    </div>
  </div>
);

export default SpecialMenu;
