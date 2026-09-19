import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <div>
            {/* <NavBar /> */}
            <div><NavBar /></div>
            <div><Outlet /></div>
            <div><Footer /></div>
        </div>
    );
};

export default MainLayout;