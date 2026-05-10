import "./video.css";
import { useRef } from "react";
import { NavLink, useParams } from "react-router";
import VideoPlayer from "./components/VideoPlayer";
import PureArrow from "./components/PureArrow";
import { Player } from "@lottiefiles/react-lottie-player";
import SaveVideoAni from "./Lottie/SaveVideoAniV2.json";
import ShareVideoAni from "./Lottie/ShareAniV2.json";
import dummydata from "./data/dummydata.json";
import CommentSection from "./components/CommentSection";

export default function VideoPage() {
  // Peger ind på videoPlayer componentet
  const playerRemoteRef = useRef(null);

  const playerRef = useRef(null);

  // Funktion til segmenter
  const handleSegmentClick = (timeInSeconds) => {
    if (playerRemoteRef.current) {
      // set video til time in seconds
      playerRemoteRef.current.seekTo(timeInSeconds);
    }
  };

  const handlePlayerClick = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };

  const playerRef2 = useRef(null);

  const handlePlayerClick2 = () => {
    if (playerRef2.current) {
      playerRef2.current.play();
    }
  };

  const { videoId } = useParams();

  const currentVideo2 = dummydata.find((video) => video.id === videoId);

  return (
    <section>
      <div className="container">
        <VideoPlayer ref={playerRemoteRef} />

        <div className="VideoInfo">
          <div className="VideoInfoLeft">
            <h1>{currentVideo2.title}</h1>

            <NavLink to={`/${currentVideo2.Tag}`}>
              <div className="CategoryArrow">
                <h4> {currentVideo2.category} </h4>
                <PureArrow />
              </div>
            </NavLink>
          </div>

          <div className="VideoInfoRight">
            <p>{}</p>
            <div
              className="OuterShareCon"
              onClick={handlePlayerClick2}
              style={{ cursor: "pointer" }}
            >
              <div className="LottieShare">
                <Player
                  src={ShareVideoAni}
                  ref={playerRef2}
                  loop={false}
                  autoplay={false}
                  keepLastFrame={false}
                  className="SharePlayer"
                />
              </div>
            </div>

            <div
              className="OuterSaveCon"
              onClick={handlePlayerClick}
              style={{ cursor: "pointer" }}
            >
              <div className="LottieSave">
                <Player
                  src={SaveVideoAni}
                  ref={playerRef}
                  loop={false}
                  autoplay={false}
                  keepLastFrame={true}
                  className="SavePlayer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="LowerVideoPage">
          <div className="LowerVideoLeft">
            <div className="Segments">
              <h3>Video Segments</h3>

              <div className="Timestamps">
                <div className="SegmentTemplate">
                  <button
                    onClick={() =>
                      handleSegmentClick(parseInt(currentVideo2.Segment1))
                    }
                    className="SeekButton"
                  >
                    {currentVideo2.Segment1NumberText}
                  </button>
                  <p className="SegmentTitle">{currentVideo2.Segment1text}</p>
                </div>

                <div className="SegmentTemplate">
                  <button
                    onClick={() =>
                      handleSegmentClick(parseInt(currentVideo2.Segment2))
                    }
                    className="SeekButton"
                  >
                    {currentVideo2.Segment2NumberText}
                  </button>
                  <p className="SegmentTitle">{currentVideo2.Segment2text}</p>
                </div>

                <div className="SegmentTemplate">
                  <button
                    onClick={() =>
                      handleSegmentClick(parseInt(currentVideo2.Segment3))
                    }
                    className="SeekButton"
                  >
                    {currentVideo2.Segment3NumberText}
                  </button>
                  <p className="SegmentTitle">{currentVideo2.Segment3text}</p>
                </div>

                <div className="SegmentTemplate">
                  <button
                    onClick={() =>
                      handleSegmentClick(parseInt(currentVideo2.Segment4))
                    }
                    className="SeekButton"
                  >
                    {currentVideo2.Segment4NumberText}
                  </button>
                  <p className="SegmentTitle">{currentVideo2.Segment4text}</p>
                </div>
              </div>
            </div>

            <div className="DownloadSlides">
              <a
                href={currentVideo2.PresentationURL}
                download
                className="DownloadText"
              >
                Download Slides
              </a>
            </div>
            <CommentSection />
          </div>
        </div>
      </div>
    </section>
  );
}
