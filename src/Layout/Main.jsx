import { Outlet } from "react-router-dom";
import Navbar from "../pages/SheredPage/Navbar";

const Main = () => {
    return (
        <div className="bg-[#edf1f4] overflow-auto min-h-[100vh]">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;