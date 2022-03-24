import React from "react";
import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem", color: "white", fontSize: "1.5rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon_Img" />
  </div>
);

export default SubHeading;
