import { useNavigate, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from "./../../assets/animation_notfound.json"
const NotFound = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    }
    return (
        <div className= 'text-center p- flex flex-col items-center justify-center h-screen'>
            <Lottie animationData={animation} loop={true} className='w-1/3'/>
            <p className='text-2xl md:text-4xl  mt-4'>{error?.error?.message}</p>
            <button className='mt-8 px-5 py-3 bg-[#ff6899] text-white text-2xl rounded-md' onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default NotFound;