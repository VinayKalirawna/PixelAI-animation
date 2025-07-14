import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Gallery from "../pages/Gallery.jsx";
import Collections from "../pages/Collections.jsx";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/collections" element={<Collections />} />
        </Routes>
    );
};

export default MainRoutes;
