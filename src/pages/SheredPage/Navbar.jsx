import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars,FaTimes } from 'react-icons/fa';
/*
Requirements
*1. must be Tailwind
 2. paste this code in index.css 

.jm_nav{
    @apply block lg:flex justify-between lg:col-span-3 items-center absolute lg:static lg:w-auto top-0 left-0 overflow-hidden h-screen lg:h-auto duration-500 bg-[#fff] lg:bg-[transparent] lg:p-0 z-50
  }
  3. use react icons or if you want to use any icons replaced the bar icon and times icon in line of 33.
*/



const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className='flex lg:grid lg:grid-cols-5 justify-between items-center'>
                <h1 className='text-4xl lg:col-span-2 jm-shadow'><Link to="/"><span className='font-serif text-5xl text-blue-e '>J</span>m <span className='font-serif text-5xl text-blue-e'>J</span>ob <span className='font-serif text-5xl text-blue-e'>P</span>ortal</Link></h1>

                <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                    <ul className='flex flex-col lg:flex-row gap-3 lg:gap-x-7'>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-e" : "" }>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-blue-e" : "" } to="/statistics">Statistics</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-blue-e" : "" } to="/applied">Applied Jobs</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-blue-e" : "" } to="/blogs">Blog</NavLink></li>
                    </ul>
                    <button className='btn-primary mt-10 lg:mt-0'>Star Applying</button>
                </div>
                <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <FaTimes/> : <FaBars/>}</button>
            </nav>
        </div>
    );
};

export default Navbar;
