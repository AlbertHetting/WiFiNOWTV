import "./Saved.css";
import dummydata from "./data/dummydata.json";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { NavLink } from "react-router";
import VideoCard from "./components/VideoCard";

export default function Saved() {
  const [savedVideos, setSavedVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Fetch from Firebase when the page loads
  useEffect(() => {
    // This checks if the user is logged in
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          // Grab their specific profile document
          const userDocRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            // Extract the array of saved video IDs (e.g., ["vid_001", "vid_014"])
            const savedIds = docSnap.data().savedVideos || [];

            // Filter dummydata: Only keep videos whose ID is inside the savedIds array
            const myVideos = dummydata.filter((video) =>
              savedIds.includes(video.id),
            );
            setSavedVideos(myVideos);
          }
        } catch (error) {
          console.error("Error fetching saved videos:", error);
        }
      } else {
        // If they aren't logged in, empty the list
        setSavedVideos([]);
      }
      setLoading(false); // Stop the loading spinner
    });

    return () => unsubscribe(); // Cleanup listener when leaving the page
  }, []);

  // 3. Search Bar Logic (Filters the ALREADY saved videos)
  const filteredVideos = savedVideos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()),
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
            {loading ? ( // Conditional tekst til forskellige states!
              <p>Loading your saved videos...</p>
            ) : savedVideos.length === 0 ? (
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
