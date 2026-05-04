import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import NavBar from "./components/Nav";

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </main>
  );
}

export default App;
