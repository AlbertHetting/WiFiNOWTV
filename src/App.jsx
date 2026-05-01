import { Routes, Route, Navigate } from "react-router";
import "./App.css";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </main>
  );
}

export default App;
