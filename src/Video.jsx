import "./video.css";
import { useRef, useState } from "react";
import { NavLink } from "react-router";
import VideoPlayer from "./components/VideoPlayer";
import PureArrow from "./components/PureArrow";
import { Player } from "@lottiefiles/react-lottie-player";
import SaveVideoAni from "./Lottie/SaveVideoAniV2.json";
import ShareVideoAni from "./Lottie/ShareIconAnimation.json";

export default function VideoPage() {
  const playerRef = useRef(null);

  const handlePlayerClick = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };

  const playerRef2 = useRef(null);

  const handlePlayerClick2 = () => {
    if (playerRef2.current) {
      playerRef2.current.play();
    }
  };

  return (
    <section>
      <div className="container">
        <VideoPlayer />

        <div className="VideoInfo">
          <div className="VideoInfoLeft">
            <h1>Title Is usually longer</h1>

            <NavLink to="/Weekly">
              <div className="CategoryArrow">
                <h4> Category </h4>
                <PureArrow />
              </div>
            </NavLink>
          </div>

          <div className="VideoInfoRight">
            <p>DATE XX, 20XX</p>

            <div
              className="OuterShareCon"
              onClick={handlePlayerClick2}
              style={{ cursor: "pointer" }}
            >
              <div className="LottieShare">
                <Player
                  src={ShareVideoAni}
                  ref={playerRef2}
                  loop={false}
                  autoplay={false}
                  keepLastFrame={false}
                  className="SharePlayer"
                />
              </div>
            </div>

            <div
              className="OuterSaveCon"
              onClick={handlePlayerClick}
              style={{ cursor: "pointer" }}
            >
              <div className="LottieSave">
                <Player
                  src={SaveVideoAni}
                  ref={playerRef}
                  loop={false}
                  autoplay={false}
                  keepLastFrame={true}
                  className="SavePlayer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
