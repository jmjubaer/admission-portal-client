import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF } from "react-icons/fa";
import Logo from "../../components/Logo";

const Footer = () => {
    return (
        <div className="bg-[#485460] bg-opacity-50 text-white pt-10">
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10 py-5 border-b-2 border-[#0fbcf9] jm_container">
                <div className="sm:col-span-2">
                    <Logo></Logo>
                    <p className="my-5">Discover endless possibilities for your future at our prestigious institution. We are committed to providing a world-class educational experience that empowers students to reach their full potential.</p>
                    <ul className="flex gap-2">
                        <li><a href="https://web.facebook.com/jm.jubaerm" className="bg-slate-600 p-2 inline-block text-white rounded-full"><FaFacebookF/></a></li>
                        <li><a href="https://twitter.com/MDJUBAERM" className="bg-slate-600 p-2 inline-block text-white rounded-full"><FaTwitter/></a></li>
                        <li><a href="https://www.instagram.com/jmjubaer16247/" className="bg-slate-600 p-2 inline-block text-white rounded-full"><FaInstagram/></a></li>
                        <li><a href="https://www.linkedin.com/in/jmjubaer/" className="bg-slate-600 p-2 inline-block text-white rounded-full"><FaLinkedin/></a></li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className="hover:text-amber-600 block my-2"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/collages"
                                className="hover:text-amber-600 block my-2"
                            >
                                Collages
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/admission"
                                className="hover:text-amber-600 block my-2"
                            >
                                Admission
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/myCollage"
                                className="hover:text-amber-600 block my-2"
                            >
                                My Collage
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                        <h3 className="text-2xl font-bold mb-4 text-[]">Contact info</h3>
                        <ul>
                            <li>
                                <a className="hover:text-amber-600 my-4 block" href="#" >
                                    <FaPhoneAlt className="inline mr-2 text-blue-600 text-xl" />
                                    878 989 0000
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-amber-600 my-4 block"
                                    href="#"
                                >
                                    <FaEnvelope className="inline mr-2 text-blue-400 text-xl" />{" "}
                                    jmjubaer@gmail.com
                                </a>
                            </li>
                            <li className="hover:text-amber-600 my-4 flex ">
                                <div className="">
                                        <FaMapMarkerAlt className="inline mr-2 text-blue-600 text-xl" />
                                </div>
                                <span> 4500 Mercantile plaza, Suite 300, Fort Worth, TX, 76137, USA</span>
            
                            </li>
                        </ul>
                    </div>
            </div>
            <p className="text-center py-5">
                © 2023. Admission Portal . All rights reserved.{" "}
            </p>
        </div>
    );
};

export default Footer;
