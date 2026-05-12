import dummydata from "./data/dummydata.json";
import VideoCardLarge from "./components/VideoCardLarge";
import "./WeeklyNews.css";

export default function WeeklyNews() {
  const VideoInfo = dummydata.slice(0, 2); // Tag kun 2 videoer

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
    </section>
  );
}
