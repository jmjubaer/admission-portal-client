import { FaEnvelope, FaMapMarkerAlt, FaSchool, FaUser } from "react-icons/fa";
import useAuthContext from "../../Hooks/UseAuthContext";
import { useEffect, useState } from "react";

const Profiles = () => {
    const {user} = useAuthContext();
    const [userInfo,setUserInfo] = useState({});
    useEffect(()=> {
        fetch(`http://localhost:5000/user/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setUserInfo(data);
        })
    },[user])
    return (
        <div data-aos="zoom-in">
            <div className="text-center w-full md:w-4/5 lg:w-2/3 max-w-[600px] rounded-xl flex flex-col gap-4 p-5 md:p-10 mx-auto my-28 disc_effects_up">
                <div className="disc_effects_up mx-auto w-fit p-5 rounded-full">
                    <img className="w-64 mx-auto h-64 rounded-full object-cover" src={userInfo?.image} alt="" />
                </div>

                <div className="flex rounded-3xl gap-5 items-center p-3 px-5 my-5 disc_effects">
                    <FaUser className="text-3xl"/>
                    <div className="border-l-2 border-[#575fcf] text-left pl-5">
                        <h4 className="font-bold">Full Name:</h4>
                        <p className="text-xl">{userInfo?.name}</p>
                    </div>
                </div>

                <div className="flex rounded-3xl gap-5 items-center p-3 px-5 disc_effects my-5">
                    <div className="">
                        <FaEnvelope className="text-3xl"/>
                    </div>
                    <div className="border-l-2 border-[#575fcf] text-left pl-5 w-full">
                        <h4 className="font-bold">Email:</h4>
                        <div className="text-xl text-ellipsis overflow-hidden w-4/5 whitespace-nowrap">{userInfo?.email}</div>
                    </div>
                </div>

                <div className="flex rounded-3xl gap-5 items-center p-3 disc_effects px-5 my-5">
                    <FaMapMarkerAlt className="text-3xl"/>
                    <div className="border-l-2 border-[#575fcf] text-left pl-5">
                        <h4 className="font-bold">Address:</h4>
                        <p className="text-xl">{userInfo?.address}</p>
                    </div>
                </div>
                
                <div className="flex rounded-3xl gap-5 items-center p-3 disc_effects px-5 my-5">
                    <FaSchool className="text-3xl"/>
                    <div className="border-l-2 border-[#575fcf] text-left pl-5">
                        <h4 className="font-bold">Collage/university</h4>
                        <p className="text-xl">{userInfo?.collageName}</p>
                    </div>
                </div>
                <button className="disc_effects_up w-1/2 rounded-xl mx-auto active font-bold text-[#f53b57] text-lg py-3">Edit Profile</button>
            </div>
        </div>
    );
};

export default Profiles;