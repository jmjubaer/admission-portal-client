import { Outlet } from "react-router-dom";
import Navbar from "../pages/SheredPage/Navbar";

const Main = () => {
    return (
        <div className="bg-[#edf1f4] ">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;