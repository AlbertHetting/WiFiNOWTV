import { useRef } from "react";
import SaveVideoAni from "../Lottie/SaveVideoAniV2.json";
import { Player } from "@lottiefiles/react-lottie-player";
import "./VideoCardLarge.css";
import { NavLink } from "react-router";
import { auth, db } from "/firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const VideoCardLarge = ({ id, title, date, thumbnailSrc }) => {
  const playerRef = useRef(null);

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
        savedVideos: arrayUnion(id), // Send videoen ind i databasen
      });
      console.log(`Successfully saved video: ${id}`);
    } catch (error) {
      console.error("Error saving video: ", error);
    }
  };

  return (
    <div className="VideoCardLarge">
      <NavLink to={`/video/${id}`} className="video-card-link">
        <div className="ThumbnailSmallLarge">
          <img src={thumbnailSrc} alt="" className="SmallThumbnailImage" />
        </div>
      </NavLink>

      <div className="VideoCardUpperTextLarge">
        <NavLink to={`/video/${id}`} className="video-card-link">
          <h3>{title}</h3>
        </NavLink>
        <div
          className="ThumbnailLottieLarge"
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

      <p>{date}</p>
    </div>
  );
};

export default VideoCardLarge;
