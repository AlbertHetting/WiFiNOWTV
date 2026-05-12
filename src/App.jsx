import { Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./components/Nav";
import Latest from "./LatestVideos";
import Home from "./Home";
import Footer from "./components/Footer";
import VideoPage from "./Video";
import WeeklyNews from "./WeeklyNews";

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Latest" element={<Latest />} />
        <Route path="/Weekly" element={<WeeklyNews />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
