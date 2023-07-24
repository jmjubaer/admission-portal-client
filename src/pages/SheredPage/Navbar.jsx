import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars,FaTimes } from 'react-icons/fa';
import useAuthContext from "../../Hooks/UseAuthContext";
import { ImExit } from "react-icons/im";
import Logo from "../../components/Logo";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [control, setControl] = useState(false);
    const {user,logOut} = useAuthContext();
    return (
        <div className="fixed top-0 z-30 left-0 bg-[#edf1f4] w-full border-b">
            <nav className='flex lg:grid lg:grid-cols-5 justify-between items-center jm_container py-2 '>
                <div className='lg:col-span-2'>
                    <Logo></Logo>
                </div>

                <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                    <ul className='flex flex-col lg:flex-row gap-3 lg:gap-x-7'>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-e" : "" }>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-blue-e" : "" } to="/collages">Collages</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-blue-e" : "" } to="/admission">Admission</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-blue-e" : "" } to="/myCollage">My Collage</NavLink></li>
                    </ul>

                    {user ? (
                    <div className="relative">
                        <button onClick={() => setControl(!control)}>
                            <img
                                className="w-14 h-14 rounded-full object-cover border-2"
                                src={user?.photoURL}
                                alt="Profile Image"
                            />
                        </button>
                        <div className={`bg-white fixed top-[75px] right-5 w-60 p-3 rounded-xl shadow-xl border z-50 ${
                                control ? "block" : "hidden"
                            }`}
                        >
                            <ul>
                                <li>
                                    <Link to={"/profile"} onClick={() => setControl(false)} className="flex items-center gap-5">
                                        <img className="w-11 h-11 rounded-full object-cover border-2" src={user?.photoURL} alt="Profile Image" />
                                        <span className="text-xl font-medium">
                                            {user?.displayName}
                                        </span>
                                    </Link>
                                </li>
                                <li className="mt-4">
                                    <button onClick={logOut} className="flex gap-4 text-xl font-medium items-center" >
                                        <div className="bg-[#ddd] w-11 h-11 rounded-full flex items-center justify-center ">
                                            <ImExit className="text-2xl" />
                                        </div>
                                        <span>Log Out</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <Link to={"/login"}>
                        <button className='disc_effects mt-10 lg:mt-0 btn px-8'>login</button>
                    </Link>
                )}
                </div>
                <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <FaTimes/> : <FaBars/>}</button>
            </nav>
        </div>
    );
};

export default Navbar;
