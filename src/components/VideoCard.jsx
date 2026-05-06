import { useRef } from "react";
import SaveVideoAni from "../Lottie/SaveVideoAniV2.json";
import { Player } from "@lottiefiles/react-lottie-player";
import "./VideoCard.css";

const VideoCard = ({ title, date, thumbnailSrc }) => {
  const playerRef = useRef(null);

  const handlePlayerClick = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };

  return (
    <div className="VideoCard">
      <div className="ThumbnailSmall">
        <img src={thumbnailSrc} alt="" className="SmallThumbnailImage" />
      </div>

      <div className="VideoCardUpperText">
        <h3>{title}</h3>
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

export default VideoCard;
