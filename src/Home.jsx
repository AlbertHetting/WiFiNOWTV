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
    .filter((video) => video.Tag === "Weekly") // tag kun weekly
    .sort(
      (a, b) => parseInt(b["release-number"]) - parseInt(a["release-number"]),
    ) // Sortering fra højeste til laveste (dato)
    .slice(0, 4); // Tag kun 4 videoer

  const latestMasterVideos = dummydata
    .filter((video) => video.Tag === "Masterclass") // Tga kun Masterclass
    .sort(
      (a, b) => parseInt(b["release-number"]) - parseInt(a["release-number"]),
    )
    .slice(0, 4);

  const latestTelecomVideos = dummydata
    .filter((video) => video.Tag === "Telecom") // Tag kun Telecom
    .sort(
      (a, b) => parseInt(b["release-number"]) - parseInt(a["release-number"]),
    )
    .slice(0, 4);

  const latestVendorVideos = dummydata
    .filter((video) => video.Tag === "Vendor") // Tag kun Vendor
    .sort(
      (a, b) => parseInt(b["release-number"]) - parseInt(a["release-number"]),
    )
    .slice(0, 4);

  return (
    <>
      <section className="HomeTopPadding">
        <div className="container">
          <div className="LargeThumbDiv">
            <NavLink to="/video/vid_001">
              <div className="HomeThumbnail">
                <img
                  src="./Images/BigTHMBV3.jpg"
                  alt=""
                  fetchPriority="high"
                  className="MainImage"
                />
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
                  {latestMasterVideos.map((video) => (
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
                <NavLink to="/Telecom">
                  <div className="CategoryArrow">
                    <h4>Telecom</h4>
                    <PureArrow />
                  </div>
                </NavLink>
                <div className="VideoRow">
                  {latestTelecomVideos.map((video) => (
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

              <div className="Vendor">
                <NavLink to="/Vendor">
                  <div className="CategoryArrow">
                    <h4>Vendor</h4>
                    <PureArrow />
                  </div>
                </NavLink>
                <div className="VideoRow">
                  {latestVendorVideos.map((video) => (
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
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
