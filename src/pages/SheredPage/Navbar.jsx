import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars,FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="fixed top-0 left-0 bg-[#edf1f4] w-full">
            <nav className='flex lg:grid lg:grid-cols-5 justify-between items-center jm_container py-2 '>
                <div className='text-4xl lg:col-span-2 text-[#0fbcf9] jm-shadow'><Link to="/"> <span className='logo_font text-5xl text-[#575fcf]'>
                    A</span>dmission <span className='logo_font text-5xl text-[#575fcf]'>P</span>ortal</Link></div>

                <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                    <ul className='flex flex-col lg:flex-row gap-3 lg:gap-x-7'>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-e" : "" }>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-blue-e" : "" } to="/collages">Collages</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-blue-e" : "" } to="/admission">Admission</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-blue-e" : "" } to="/myCollage">My Collage</NavLink></li>
                    </ul>
                    <button className='disc_effects_up mt-10 lg:mt-0 btn'>login</button>
                </div>
                <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <FaTimes/> : <FaBars/>}</button>
            </nav>
        </div>
    );
};

export default Navbar;
