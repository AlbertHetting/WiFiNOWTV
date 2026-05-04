import { Player } from "@lottiefiles/react-lottie-player";
import SaveVideoAni from "./Lottie/SaveVideoAniV2.json";
import "./home.css";
import { useRef } from "react"; // Dette er et en måde hvorpå man kan redraw staten (ligesom useState) men i stedet for at re-render hele siden er det kun elementet der opdateres

export default function Home() {
  const playerRef = useRef(null);

  const handlePlayerClick = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };

  return (
    <>
      <section className="HomeTopPadding">
        <div className="container">
          <div className="HomeThumbnail">
            <img src="./Images/BigTHMB.jpg" alt="" className="MainImage"/>
          </div>
          <div className="topLine">
            <h1>Weekly WiFi News</h1>
            <div
              className="lottie-container"
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
        </div>
      </section>
    </>
  );
}
