import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

const Chef = () => (
  <div className="app__Chef-Container">
    <div className="app__Chef-Content">
      <div className="app__Chef-imgContainer">
        <img src={images.chef} alt="a chef" />
      </div>
      <div className="app__Chef-DivContent">
        <SubHeading title="Chef's Word" />
        <h1>What We Believe In</h1>
        <div className="app__Chef-Content_img">
          <p className="app__Chef-p">
            <img src={images.quote} alt="quote" />
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .
            Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget
            Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam
            Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit
            Nunc.
          </p>
        </div>
        <h2>Kevin Luo</h2>
        <p className="app__chef-footerP">Chef & Founder</p>
        <div className="footerimg">
          <img src={images.sign} alt="signature" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
