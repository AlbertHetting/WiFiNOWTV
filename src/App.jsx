import { Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./components/Nav";
import Latest from "./LatestVideos";
import Home from "./Home";
import Footer from "./components/Footer";
import VideoPage from "./Video";
import WeeklyNews from "./WeeklyNews";
import Vendor from "./Vendor";
import Telecom from "./Telecom";
import MasterClass from "./Masterclass";
import CreateProfile from "./CreateProfile";
import Profile from "./Profile";
import LogIn from "./LogIn";
import RequireAuth from "./components/RequireAuth";
import Saved from "./Saved";

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Latest" element={<Latest />} />
        <Route path="/Weekly" element={<WeeklyNews />} />
        <Route path="/Vendor" element={<Vendor />} />
        <Route path="/Telecom" element={<Telecom />} />
        <Route path="/Masterclass" element={<MasterClass />} />
        <Route path="/Create" element={<CreateProfile />} />
        <Route
          path="/Profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/LogIn" element={<LogIn />} />
        <Route
          path="/Saved"
          element={
            <RequireAuth>
              <Saved />
            </RequireAuth>
          }
        />
        <Route path="/video/:videoId" element={<VideoPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
