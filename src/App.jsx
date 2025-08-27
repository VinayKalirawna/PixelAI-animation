import Nav from "./components/Nav.jsx";
import useLenis from "./hooks/UseLenis.jsx";
import MainRoutes from "./routes/MainRoutes.jsx";

const App = () => {
    useLenis();

    return (
        <div>
            <Nav />
            <MainRoutes />
        </div>
    );
};
export default App;
