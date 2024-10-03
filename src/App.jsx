import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery.jsx";
import Layout from "./components/Layout/layout.jsx";
import Painting from "./components/Painting/Painting.jsx";
import Slideshow from "./components/Slideshow/Slidshow.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout/>}>
        <Route path="/" index element={<Gallery />} /> {/* Default route */}
        <Route path="Gallery" element={<Gallery />}/>
        <Route path="Slideshow" element={<Slideshow/>}/>
        <Route path="Painting/:id" element={<Painting />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
