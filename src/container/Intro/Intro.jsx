import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const Intro = () => {
  const vidRef = React.useRef();
  const [palyVideo, setpalyVideo] = React.useState(false);

  const handleVideo = () => {
    setpalyVideo((prePlayVideo) => !prePlayVideo);

    if (palyVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__Video">
      <video
        ref={vidRef}
        muted
        type="video/mp4"
        loop
        controls={false}
        src={meal}
      ></video>
      <div className="app__Video-overlay text_aline">
        <div className="app__Video-circl text_alin" onClick={handleVideo}>
          {palyVideo ? (
            <BsPauseFill color="#fff" fontSize={70} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={70} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
