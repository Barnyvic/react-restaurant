import React from "react";

import SubHeading from "../../components/SubHeading/SubHeading";

const Newsletter = () => {
  return (
    <div id="Contact" className="app__Newsletter-MainContainer">
      <div className="app__Newsletter-COntainer">
        <div className="app__NewsletterBorder">
          <SubHeading title="Newsletter" />
          <h1>Subscribe To Our Newsletter</h1>
          <p>And Never Miss Latest Updates!</p>
          <div className="input-btn">
            <input type="email" placeholder="Enter your Mail" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
