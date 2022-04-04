import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useRef } from "react";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";

export const Gallery = () => {
  //  conditions and function  for the scroll arrrow
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "Left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  // putting the images into an array
  const GalleryImgs = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  return (
    <div className="app__gallery-Container">
      <div className="app__gallery-Content">
        <SubHeading title="Instagram" />
        <h1 className="headtext">Photo Gallery</h1>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <button>View More</button>
      </div>
      <div className="app__Gallary-imgs">
        <div className="app__gallery-imgContainer" ref={scrollRef}>
          {GalleryImgs.map((GalleryImg, index) => {
            return (
              <div
                className="gallery-img-card"
                key={`gallery_img-${index + 1}`}
              >
                <img src={GalleryImg} alt="gallery-images" />
              </div>
            );
          })}
        </div>
        <div className="app__gallery-Arrows">
          <span>
            <BsArrowLeftShort
              className="app__gallery-Arrowleft"
              onClick={() => {
                scroll("Left");
              }}
            />
          </span>

          <span>
            <BsArrowRightShort
              className="app__gallery-ArrowRight"
              onClick={() => {
                scroll("Right");
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
