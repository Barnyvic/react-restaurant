import React from "react";
import { images } from "../../constants";

const AboutUs = () => (
  <div id="About" className="app__About-Container">
    <div className="Container Containerimg">
      <div className="app__Aboutus_content">
        <h1 className="app__About-h1">About US</h1>
        <img src={images.spoon} alt="About-us spoon" />
        <p className="app__About-p">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
          Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec
          Aliquet Eu Proin Mauris Et.
        </p>
        <button className="app_About-btn">Know more</button>
      </div>
      <div className="app__Aboutus-img">
        <img src={images.knife} alt="About-us Knife" />
      </div>
      <div className="app__Aboutus_content">
        <h1 className="app__About-h1">Our History</h1>
        <img className="History" src={images.spoon} alt="About-us spoon" />
        <p className="app__About-p">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
          Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec
          Aliquet Eu Proin Mauris Et.
        </p>
        <button className="app_About-btn">Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
