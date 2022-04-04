import React from "react";

import { images, date, data } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from "../../components/Menuitem/MenuItem";

const SpecialMenu = () => (
  <div id="Menu" className="app__Specialmenu-Container">
    <div className="app__Specialmenu-Content">
      <SubHeading title="Menu That Fits Your Palatte" />
      <h1>Today's Special</h1>
    </div>
    <div className="app__Specialmenu-subContent">
      <div className="WineBeer">
        <p className="app__WineBeer-p">Wine & Beer</p>
        <div className="wineBeer-map">
          {data.wines.map((wine, index) => {
            return (
              <div>
                <MenuItem
                  key={wine.title + index}
                  title={wine.title}
                  price={wine.price}
                  tag={wine.tags}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="app__special-img">
        <img src={images.menu} alt="" />
      </div>
      <div className="Cocktails">
        <p className="app__WineBeer-p">Cocktails</p>
        <div className="cocktail-map">
          {data.cocktails.map((cocktails, index) => {
            return (
              <div>
                <MenuItem
                  key={cocktails.title + index}
                  title={cocktails.title}
                  price={cocktails.price}
                  tag={cocktails.tags}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div className="app__special-btn">
      <button>View more</button>
    </div>
  </div>
);

export default SpecialMenu;
