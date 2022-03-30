import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images, data } from "../../constants";

const Laurels = () => (
  <div className="app__Laurels-Container">
    <div className="app__Laurels-Container-Content">
      <div className="app__Laurels-content">
        <SubHeading title="Awards & Recognition" />
        <h1>Our Laurels</h1>
        <div className="gridContainer">
          {data.awards.map((award) => {
            return (
              <div className="awardsCard">
                <img src={award.imgUrl} alt="" />
                <div className="awardContent">
                  <h5>{award.title}</h5>
                  <p>{award.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="app__Laurels-img">
        <img src={images.laurels} alt="" />
      </div>
    </div>
  </div>
);

export default Laurels;
