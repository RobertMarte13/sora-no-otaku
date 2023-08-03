import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Anime from "./components/episode/Anime";
import VideoCaps from "./components/episode/VideoCaps";
import NavBar from "./components/menu/NavBar";

function App() {
  return (
    <main className="main">
      <header className="header-menu">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:name" element={<Anime />} />
        <Route path="/capitulo/:idVideo" element={<VideoCaps />} />
      </Routes>
    </main>
  );
}

export default App;
