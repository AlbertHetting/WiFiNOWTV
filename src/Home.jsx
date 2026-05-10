import { Player } from "@lottiefiles/react-lottie-player";
import SaveVideoAni from "./Lottie/SaveVideoAniV2.json";
import "./home.css";
import { useRef } from "react"; // Dette er et en måde hvorpå man kan redraw staten (ligesom useState) men i stedet for at re-render hele siden er det kun elementet der opdateres
import PureArrow from "./components/PureArrow";
import { NavLink } from "react-router";
import VideoCard from "./components/VideoCard";
import dummydata from "./data/dummydata.json";

export default function Home() {
  const playerRef = useRef(null);

  const handlePlayerClick = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };

  const latestWeeklyVideos = dummydata
    .filter((video) => video.Tag === "Weekly") // 1. Only grab Weekly videos
    .sort(
      (a, b) => parseInt(b["release-number"]) - parseInt(a["release-number"]),
    ) // 2. Sort Highest to Lowest
    .slice(0, 4); // 3. Keep exactly 4

  return (
    <>
      <section className="HomeTopPadding">
        <div className="container">
          <div className="LargeThumbDiv">
            <NavLink to="/video/vid_001">
              <div className="HomeThumbnail">
                <img src="./Images/BigTHMB.jpg" alt="" className="MainImage" />
              </div>
            </NavLink>
            <div className="topLine">
              <NavLink to="/video/vid_001">
                <h1>Weekly WiFi News</h1>
              </NavLink>
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
        </div>
        <div className="LowerfrontCon">
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
                  {/* 4. THE MAP FUNCTION */}
                  {latestWeeklyVideos.map((video) => (
                    <VideoCard
                      key={
                        video.id
                      } /* React requires a unique key for every mapped item! */
                      id={video.id}
                      title={video.title}
                      date={video.date}
                      thumbnailSrc={video.thumbnail}
                    />
                  ))}
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
                    thumbnailSrc="./Thumbnails/SpeakersDayOne-09.jpg"
                  />
                  <VideoCard
                    title="Slashing component cost"
                    date="April 14, 2026"
                    thumbnailSrc="./Thumbnails/SpeakersDayTwo-45.jpg"
                  />
                  <VideoCard
                    title="Giving your customers what they want"
                    date="April 14, 2026"
                    thumbnailSrc="./Thumbnails/SpeakersDayOne-12.jpg"
                  />
                  <VideoCard
                    title="Creating market openings"
                    date="April 14, 2026"
                    thumbnailSrc="./Thumbnails/SpeakersDayTwo-19.jpg"
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

              <div className="Vendor">
                <NavLink to="/Vendor">
                  <div className="CategoryArrow">
                    <h4>Vendor</h4>
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
        </div>
      </section>
    </>
  );
}
