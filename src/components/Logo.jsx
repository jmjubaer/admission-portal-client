import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="text-3xl sm:text-4xl text-[#0fbcf9] jm-shadow inline">
            <Link to="/">
                <span className="logo_font text-4xl sm:text-5xl text-[#575fcf]"> A</span>
                dmission 
                <span className="logo_font text-4xl sm:text-5xl text-[#575fcf] ml-1"> P</span>
                ortal
            </Link>
        </div>
    );
};

export default Logo;
