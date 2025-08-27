import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Gallery from "../pages/Gallery.jsx";
import About from "../pages/About.jsx";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default MainRoutes;
