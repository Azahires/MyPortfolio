import "reset-css";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Home";
import Work from "@pages/Work/Work";
import Project from "@pages/Project/Project";
import About from "@pages/About/About";
import Contact from "@pages/Contact/Contact";
import Style from "./style";

function App() {
  return (
    <Style>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work:id" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Style>
  );
}

export default App;
