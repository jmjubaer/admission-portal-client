import { Outlet } from "react-router-dom";
import Navbar from "../pages/SheredPage/Navbar";
import Footer from "../pages/SheredPage/Footer";

const Main = () => {
    return (
        <div className="bg-[#edf1f4] overflow-auto min-h-[100vh]">
            <Navbar/>
            <div className="min-h-[90vh]">
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;