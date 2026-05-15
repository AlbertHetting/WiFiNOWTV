import "./Saved.css";
import dummydata from "./data/dummydata.json";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { NavLink } from "react-router";
import VideoCard from "./components/VideoCard";

export default function Saved() {
  const [savedVideos, setSavedVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Efter page load skal firebase hentes ned
  useEffect(() => {
    // Tjek om brugeren er logget ind:
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid); // Tag deres specifikke userID
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            const savedIds = docSnap.data().savedVideos || []; // Hent arrayet af gemte videoer

            const myVideos = dummydata.filter(
              (video) => savedIds.includes(video.id), // Filter dummydata: hent kun videoer som kan findes i savedIDs
            );
            setSavedVideos(myVideos); //constant laves
          }
        } catch (error) {
          console.error("Error fetching saved videos:", error);
        }
      } else {
        setSavedVideos([]); // Hvis brugeren ikke er logget ind er listen tom
      }
    });

    return () => unsubscribe(); // Prevent et memoryleak (et crash af siden efter man forlader siden)
  }, []);

  const filteredVideos = savedVideos.filter(
    (
      video, // Søgefunktion for gemte videoer ie. savedVideos.filter
    ) => video.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section>
      <div className="container">
        <div className="SavedHeader">
          <h1>Saved Videos</h1>
        </div>
      </div>

      <div className="SavedVideosCon">
        <div className="container">
          <div className="SavedSearch">
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
          </div>

          <div className="MapSaved">
            {savedVideos.length === 0 ? (
              <p>You haven't saved any videos yet!</p>
            ) : filteredVideos.length === 0 ? (
              <p>No saved videos match your search.</p>
            ) : (
              // Hvis der er gemte videoer:
              <div className="VideoGridSaved">
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
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
