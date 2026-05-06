import { Player } from "@lottiefiles/react-lottie-player";
import SaveVideoAni from "./Lottie/SaveVideoAniV2.json";
import "./home.css";
import { useRef } from "react"; // Dette er et en måde hvorpå man kan redraw staten (ligesom useState) men i stedet for at re-render hele siden er det kun elementet der opdateres
import PureArrow from "./components/PureArrow";
import { NavLink } from "react-router";
import VideoCard from "./components/VideoCard";

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
            <img src="./Images/BigTHMB.jpg" alt="" className="MainImage" />
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
          <div className="UnderText">
            <h3>
              Open WiFi Announces collaboration with Plume bringing WiFi 8 to
              enterprise markets
            </h3>
          </div>

          <div className="UnderDate">
            <p>August 17, 2026</p>
          </div>
        </div>
        <section className="LowerFrontPage">
          <div className="container">
            <div className="SearchBar">
              <input type="text" placeholder="Search"></input>
              <button type="submit">
                <img src="./icons/Search.svg" alt="" />
              </button>
            </div>

            <div className="WeeklyNews">
              <NavLink to="/Weekly">
                <div className="CategoryArrow">
                  <h4>Weekly News</h4>
                  <PureArrow />
                </div>
              </NavLink>
              <div className="VideoRow">
                <VideoCard
                  title="Weekly WiFi News"
                  date="April 14, 2026"
                  thumbnailSrc="./Thumbnails/SpeakersDayTwo-36.jpg"
                />
                <VideoCard
                  title="Weekly WiFi News"
                  date="April 14, 2026"
                  thumbnailSrc="./Thumbnails/SpeakersDayTwo-22.jpg"
                />
                <VideoCard
                  title="Weekly WiFi News"
                  date="April 14, 2026"
                  thumbnailSrc="./Thumbnails/SpeakersDayOne-51.jpg"
                />
                <VideoCard
                  title="Weekly WiFi News"
                  date="April 14, 2026"
                  thumbnailSrc="./Thumbnails/SpeakersDayTwo-45.jpg"
                />
              </div>
            </div>

            <div className="MasterClass">
              <NavLink to="/Masterclass">
                <div className="CategoryArrow">
                  <h4>Masterclass</h4>
                  <PureArrow />
                </div>
              </NavLink>
              <div className="VideoRow">
                <VideoCard
                  title="Masterclass: Refining the scope of IEEE802"
                  date="April 14, 2026"
                  thumbnailSrc="./Thumbnails/SpeakersDayTwo-36.jpg"
                />
                <VideoCard
                  title="Weekly WiFi News"
                  date="April 14, 2026"
                  thumbnailSrc="./Thumbnails/SpeakersDayTwo-22.jpg"
                />
                <VideoCard
                  title="Weekly WiFi News"
                  date="April 14, 2026"
                  thumbnailSrc="./Thumbnails/SpeakersDayOne-51.jpg"
                />
                <VideoCard
                  title="Weekly WiFi News"
                  date="April 14, 2026"
                  thumbnailSrc="./Thumbnails/SpeakersDayTwo-45.jpg"
                />
              </div>
            </div>

            <div className="MasterClass">
              <NavLink to="/Telecom">
                <div className="CategoryArrow">
                  <h4>Telecom</h4>
                  <PureArrow />
                </div>
              </NavLink>
              <div className="VideoRow">
                <VideoCard
                  title="Masterclass: Refining the scope of IEEE802"
                  date="April 14, 2026"
                  thumbnailSrc="./Thumbnails/SpeakersDayTwo-36.jpg"
                />
                <VideoCard
                  title="Weekly WiFi News"
                  date="April 14, 2026"
                  thumbnailSrc="./Thumbnails/SpeakersDayTwo-22.jpg"
                />
                <VideoCard
                  title="Weekly WiFi News"
                  date="April 14, 2026"
                  thumbnailSrc="./Thumbnails/SpeakersDayOne-51.jpg"
                />
                <VideoCard
                  title="Weekly WiFi News"
                  date="April 14, 2026"
                  thumbnailSrc="./Thumbnails/SpeakersDayTwo-45.jpg"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
