import { Player } from "@lottiefiles/react-lottie-player";
import SaveVideoAni from "./Lottie/SaveVideoAniV2.json";
import "./home.css";
import { useRef, useState } from "react"; 
import PureArrow from "./components/PureArrow";
import { NavLink } from "react-router";
import VideoCard from "./components/VideoCard";
import dummydata from "./data/dummydata.json";
import { auth, db } from "/firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = dummydata.filter(
    (
      video, //filter funktion ligeosm med tag, denne gang bruges search qurey
    ) => video.title.toLowerCase().includes(searchQuery.toLowerCase()), //To lower case på både video og search sikrer at der ikke opstår fejl på grund af lower/upper case
  );

  const playerRef = useRef(null); // useRef bruges som en holder (ligesom useState) men i modsat useState skaber den ikke et re-render når en funktion skal køre, i stedet skal den gøre det muligt at "pass" for eksemple play og pause uden at hele komponentet skal genindlæses

  // Async funktion så den kan snakke med firebase uden at stoppe hele siden
  const handleSaveClick = async (e) => {
    // Stop refresh og stop navlink hvis der skulle være overlap
    e.preventDefault();
    e.stopPropagation();

    // Afspil lottie
    if (playerRef.current) {
      playerRef.current.play();
    }

    // Tjek hvem current user er
    const currentUser = auth.currentUser;

    if (!currentUser) {
      alert("You must be logged in to save videos!");
      return; // er personen logget ind? man skal være logget ind for at gemme videoer
    }

    try {
      // Find brugerens ID og hent deres dokumnet, derefter indsættes video ID'et i databasen
      const userDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(userDocRef, {
        savedVideos: arrayUnion("vid_001"), // Send videoen ind i databasen
      });
      console.log(`Successfully saved video: ${"vid_001"}`);
    } catch (error) {
      console.error("Error saving video: ", error);
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
                onClick={handleSaveClick}
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
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.currentTarget.value)}
                ></input>
                <button type="submit">
                  <img src="./icons/Search.svg" alt="" />
                </button>
              </div>

              {searchQuery ? ( //Conditional rendering fra react (if else statement) hvis der er en search query så vis search video con ellers vis video category con
                <div className="SearchVideoCon">
                  <h2 className="SearchTextHeader">
                    Results for: "{searchQuery}"
                  </h2>
                  <div className="VideoGridFront">
                    {filteredVideos.map((video) => (
                      <VideoCard
                        key={
                          video.id
                        } /* Unikt ID for mapped items (skal react altid bruge!)  */
                        id={video.id}
                        title={video.title}
                        date={video.date}
                        thumbnailSrc={video.thumbnail}
                      />
                    ))}

                    {/* Hvis der er ingen videoer så sig no videos found */}
                    {filteredVideos.length === 0 && <p>No videos found.</p>}
                  </div>
                </div>
              ) : (
                <section className="VideoCategoryCon">
                  <div className="WeeklyNews">
                    <NavLink to="/Weekly">
                      <div className="CategoryArrow">
                        <h4>Weekly News</h4>
                        <PureArrow />
                      </div>
                    </NavLink>
                    <div className="VideoRow">
                      {/*  Mpa function */}
                      {latestWeeklyVideos.map((video) => (
                        <VideoCard
                          key={
                            video.id
                          } /* Unikt ID for mapped items (skal react altid bruge!)  */
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
                          } /* Unikt ID for mapped items (skal react altid bruge!) */
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
                          } /* Unikt ID for mapped items (skal react altid bruge!)  */
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
                          } /* Unikt ID for mapped items (skal react altid bruge!) */
                          id={video.id}
                          title={video.title}
                          date={video.date}
                          thumbnailSrc={video.thumbnail}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
