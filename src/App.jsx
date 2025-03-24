import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard.jsx";
import Signup from "./Signup.jsx";
import Home from "./Home.jsx";
function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
