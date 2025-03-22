import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import Dashboard from "./Dashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
