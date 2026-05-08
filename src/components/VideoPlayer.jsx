import dummydata from "../data/dummydata.json";
import "./VideoPlayer.css";
import { useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import LoadingAni from "../Lottie/WiFiNOWLoading.json";

export default function VideoPlayer() {
  const currentVideo = dummydata[0]; // Temp data til testing

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(0.5); // starter på 50% volume
  const [previousVolume, setPreviousVolume] = useState(0.5);

  // Hukommelse af control status
  const [showControls, setShowControls] = useState(true);

  // Holder på timeout for controls
  const controlsTimeoutRef = useRef(null);

  // wire til video element (peger på video element)
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // start med at video er paused

  // Loading states, starter med true, buffering states ændres i video tagget
  const [isBuffering, setIsBuffering] = useState(true);

  const [isFullscreen, setisFullscreen] = useState(false); // Fullscreen state, starter som false (giver menig ift. man ikke starter i fullscreen)

  // Funktion der omdanner til minut og sekunder:
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "0:00"; // error fallback 00:00
    const minutes = Math.floor(timeInSeconds / 60); // minutes er det første der regnes ud, det er bare sekunder delt med 60
    const seconds = Math.floor(timeInSeconds % 60); // Derefter bruges % operator til at finde de resterende sekunder (sekunder delt med 60 giver et helt tal, det som er til overs er sekunder)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // else if function, er tallet mindre end 10? så skal der et 0 foran, hvis ikke skal ingentig foran
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime); //Bruges som state til at opdatere videons nuværende tid
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration); // hent videons fulde længde så den skal referes senere
  };

  // Function for Fullscreen
  const toggleFullScreen = () => {
    const playerContainer = document.querySelector(".CustomUI"); // Funktion laves til tjek af fullscreen (til at skifte ikoner ud og lade videoen gå i fullscreen) her sættes konstanten playerContainer til .CustomUI
    if (!document.fullscreenElement) {
      playerContainer.requestFullscreen(); //Fullscreen er false fra start som kan ses ovenfor derfor kan der requestes fullscreen og setisFullscreen proppen opdateres
      setisFullscreen(true);
    } else {
      document.exitFullscreen(); // Her gøres det modsatte!
      setisFullscreen(false);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true); // Start med showcontrols er true (brugeren skal kunne se dem by default)

    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current); // Hvis der var en tidligere timer der kørte genstartes den hvis brugern bevæger deres mus
    }

    controlsTimeoutRef.current = setTimeout(() => {
      // start timeren efter 5 sekunder
      setShowControls(false);
    }, 5000); // 5 sekunders timer
  };

  const togglePlay = () => {
    //Video pause and play funktion, videoref staten bruges her da den peger direkte ind på videoen. videoRef bruges til at pause og play
    if (isPlaying) {
      videoRef.current.pause();
      setShowControls(true);
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying); //Når der er klikket ændres staten til det modsatte af hvad den var før, derfor virker knappen.
  };

  const handleProgressClick = (e) => {
    // Event handler den er sat på progress bar nede i HTML

    const progressBar = e.currentTarget.getBoundingClientRect(); // Event lægges på hvad brugeren har klikket på

    const clickPosition = e.clientX - progressBar.left; // Matematik for at finde ud af hvor præcis brugeren har klikket. Der tages først et X koordinat og derefter trækkes der hvor langt progress baren er til vnnstre fra

    const clickPercentage = clickPosition / progressBar.width; // her udregnes en procent, ved at sige clickposition (findes fra linjen ovenfor) og deler den med progress barens fulde bredde

    const newTime = clickPercentage * duration; // Derefter tages duration (videos længde) og ganges med procenten for at finde der hvor brugeren har klikket!
    videoRef.current.currentTime = newTime; // Videoen sættes til newTime (der spoles frem eller tilbage)
    setCurrentTime(newTime); // Til sidst gemmes den nye tid i newTime staten
  };

  const toggleMute = () => {
    //Toggle mute funktion
    if (volume > 0) {
      setPreviousVolume(volume); // Her gemmes tidligere volume hvis brugern vælger at mute, hvis de så vælger at unmute hopper lyden tilbage til hvor den var før de mutede
      setVolume(0); // react memory sættes til 0
      videoRef.current.volume = 0; // Videoen stilles til 0 lyd
    } else {
      setVolume(previousVolume); // react memory sættes til previous volume
      videoRef.current.volume = previousVolume; // Her sættes video volume tilbage til previous volume
    }
  };

  const handleVolumeChange = (e) => {
    // Volume event laves
    const newVolume = parseFloat(e.target.value); // der laves en ny variabel med parseFloat (numerical value) der tjekkes hvad e.target (slideren) har af værdi og sættes til newVolume
    setVolume(newVolume); // react state gemmer volume
    videoRef.current.volume = newVolume; // Video sættes til newvolume
    if (newVolume > 0) {
      // gem kun newVolume hvis parseFloat (newVolume) er over 0, ellers skal previousVolume bruges
      setPreviousVolume(newVolume);
    }
  };

  return (
    <section>
      <div className="VideoOuterCon">
        <div className="CustomUI" onMouseMove={handleMouseMove}>
          {/* Video logik */}
          <video
            ref={videoRef}
            src={currentVideo.vimeoEmbedUrl}
            className="video-element"
            controls={false}
            onClick={togglePlay}
            /* Buffering states til loading animation */
            onWaiting={() =>
              setIsBuffering(true)
            }
            onPlaying={() =>
              setIsBuffering(false)
            }
            onCanPlay={() => setIsBuffering(false)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={
              handleLoadedMetadata
            }
          />

          {/* Lottie Loading animation spiller ved isBuffering = true */}
          {isBuffering && (
            <div className="loader-overlay">
              <Player
                src={LoadingAni}
                loop={true}
                autoplay={true}
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          )}

          <div
            className={`custom-controls-overlay ${showControls ? "" : "hidden"}`} // Show controls true eller false kommando, hvis true er der ingen ekstra class, hvis false addes der hidden og CSS klassen skjuler controls
          >
            <div className="progress-container" onClick={handleProgressClick} > {/* Handle progreess klick er forklaret ovenfor men her tages funktionen i brug!*/}
              <div
                className="progress-fill"
                
                style={{ width: `${(currentTime / duration) * 100}%` }} /* Dette er style der regner ud hvor langt i videoen man er i procent og bruger det som style width så progress baren afspejler hvor langt man er i videoen */
              >
                <div className="playhead-circle"></div>
              </div>
            </div>

            {/* UI controls nederst */}
            <div className="controls-bottom-row">
              {/* UI til venstre */}
              <div className="controls-left">
                <div className="background-play">
                  <button className="control-btn" onClick={togglePlay}> {/* toggle play er forklaret ovenfor, funktionen sørger for at knappen afspiller og pauser videoen ved klik */}
                    {isPlaying ? ( //Is playing er et is else statement, her ændres knapperne alt efter om videoen afspiller eller ej
                      <img src="./icons/Pause.svg" alt="Pause" className="UIIcon" />
                    ) : (
                      <img src="./icons/Play.svg" alt="Play" className="UIIcon" />
                    )}
                  </button>
                </div>
                <div className="time-display">
                  {formatTime(currentTime)} / {formatTime(duration)}  {/* her indsættes curenttime og duration ind som tekst i UI'en så brugeren kan se hvor langt de er */}
                </div>

                <div className="AudioControl">
                  <button className="control-btn" onClick={toggleMute}>
                    {/* If else statement ligesom play pause */}
                    {volume === 0 ? (
                      <img src="./icons/Mute.svg" alt="Muted" className="UIIcon"/>
                    ) : (
                      <img src="./icons/Audio.svg" alt="Audio" className="UIIcon"/>
                    )}
                  </button>

                  <input // Input for volume change her bruges handle volume change funktionen til at ændre i lydstyrke
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                    onChange={handleVolumeChange} 
                    className="volume-slider"
                  />
                </div>
              </div>

              {/* Højre UI */}
              <div className="controls-right">
                <div className="FullscreenDiv">
                  <button className="control-btn" onClick={toggleFullScreen}> {/* her bruges toggle fullscreen funktionen som er beskrevet ovenfor*/} 
                    {isFullscreen ? ( // If else statement ligesom PLay / pause og mute / unmute
                      <img src="./icons/ExitFull.svg" alt="Exit" className="UIIcon" />
                    ) : (
                      <img src="./icons/fullscreen.svg" alt="Full" className="UIIcon" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
