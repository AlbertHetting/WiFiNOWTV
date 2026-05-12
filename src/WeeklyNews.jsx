import dummydata from "./data/dummydata.json";
import VideoCardLarge from "./components/VideoCardLarge";
import "./WeeklyNews.css";
import { useState } from "react";
import VideoCard from "./components/VideoCard";

export default function WeeklyNews() {
  const VideoInfo = dummydata
    .filter((video) => video.Tag === "Weekly")
    .slice(0, 2); // Tag kun 2 videoer

  const [searchQuery, setSearchQuery] = useState("");

  const latestWeeklyVideosCat = dummydata
    .filter((video) => video.Tag === "Weekly") // tag kun weekly
    .sort(
      (a, b) => parseInt(b["release-number"]) - parseInt(a["release-number"]),
    ) // Sortering fra højeste til laveste (dato)
    .slice(2, 20); // skip first 2 video, derefter tag op til nummer 20 video

  const filteredVideos = dummydata.filter((video) => video.Tag === "Weekly"); //Kun weekly videos søges igennem!
  (
    video, //filter funktion ligeosm med tag, denne gang bruges search qurey
  ) => video.title.toLowerCase().includes(searchQuery.toLowerCase()); //To lower case på både video og search sikrer at der ikke opstår fejl på grund af lower/upper case

  return (
    <section>
      <div className="container">
        <div className="UpperCategoryContainer">
          <h1>Weekly News</h1>
          <div className="FeaturedVideos">
            {VideoInfo.map((video) => (
              <VideoCardLarge
                key={
                  video.id
                } /* React requires a unique key for every mapped item! */
                id={video.id}
                title={video.title}
                date={video.date}
                thumbnailSrc={`${video.thumbnail}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="LowerCategoryContainer">
        <div className="container">
          <div className="StackingCategory">
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

            <div className="FilterButtons">
              <h3>Sort videos:</h3>
              <div className="SortVideos">
                <div className="FilterBox">
                  <p>Newest</p>
                </div>

                <div className="FilterBox2">
                  <p>Oldest</p>
                </div>

                <div className="FilterBox2">
                  <p>Short Videos</p>
                </div>

                <div className="FilterBox2">
                  <p>Long videos</p>
                </div>

                <div className="FilterBox2">
                  <p>Popular</p>
                </div>
              </div>
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
                <div className="WeeklyNewsCat">
                  <div className="VideoGridFront">
                    {/*  Mpa function */}
                    {latestWeeklyVideosCat.map((video) => (
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
              </section>
            )}
          </div>

          <div className="LoadMore">
            <div className="LoadMoreBox">
              <p>Load more videos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
