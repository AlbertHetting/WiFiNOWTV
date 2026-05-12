import { useRef } from "react";
import SaveVideoAni from "../Lottie/SaveVideoAniV2.json";
import { Player } from "@lottiefiles/react-lottie-player";
import "./VideoCardlarge.css";
import { NavLink } from "react-router";

const VideoCardLarge = ({ id, title, date, thumbnailSrc }) => {
  const playerRef = useRef(null);

  const handlePlayerClick = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };

  return (
    <div className="VideoCard">
      <NavLink to={`/video/${id}`} className="video-card-link">
        <div className="ThumbnailSmall">
          <img src={thumbnailSrc} alt="" className="SmallThumbnailImage" />
        </div>
      </NavLink>

      <div className="VideoCardUpperText">
        <NavLink to={`/video/${id}`} className="video-card-link">
          <h3>{title}</h3>
        </NavLink>
        <div
          className="ThumbnailLottie"
          onClick={handlePlayerClick}
          style={{ cursor: "pointer" }}
        >
          <Player
            src={SaveVideoAni}
            ref={playerRef}
            loop={false}
            autoplay={false}
            keepLastFrame={true}
          />
        </div>
      </div>

      <p>{date}</p>
    </div>
  );
};

export default VideoCardLarge;
