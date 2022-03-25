import React from "react";

const MenuItem = ({ title, price, tag }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-header">
      <div className="app__menuitem-name">
        <p className="app__menuitem-p">{title}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="app__menuitem-p">{price}</p>
      </div>
    </div>
    <div className="app__menuitem-tag">
      <p className="app__menuitem-tags">{tag}</p>
    </div>
  </div>
);

export default MenuItem;
