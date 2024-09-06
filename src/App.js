import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Projects } from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/L3" element={<h1>L3</h1>} />
        <Route path="/L4" element={<h1>L4</h1>} />
      </Routes>
    </div>
  );
}

export default App;
