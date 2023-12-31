/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuthContext from '../Hooks/UseAuthContext';
const CollageCard = ({collage}) => {
    const {admissionDates,collegeImage,collegeName,collegeRating,numberOfResearch,numberOfSports,events,_id} = collage || {};
    useEffect(() =>{
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        })
    },[])
    const {user} = useAuthContext();
    const Navigate = useNavigate();
    const handleNavigate = () => {
        if (!user) {
            Swal.fire({
                title: "Please logged in",
                text: "You cannot see Collage details without login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Log in",
            }).then((result) => {
                if (result.isConfirmed) {
                    Navigate("/login");
                }
            });
        }else{
            Navigate(`/collages/${_id}`)
        }
    }
    return (
            <div data-aos="zoom-in" className="card z-0 card-compact rounded-3xl shadow-xl border robot disc_effects">
                <figure className=""><img className="w-full h-80 object-cover" src={collegeImage} alt="Shoes" /></figure>
                <div className="card-body flex-col justify-between">
                    <h2 className="card-title text-2xl robot">{collegeName}</h2>

                    <div className="sm:flex gap-8">
                        <div className="sm:border-r-2 sm:border-[#3c40c6] pr-3">
                            <div className="">
                                <h3 className="text-lg font-medium inline robot">Numbers of Research: </h3>
                                <p className="inline text-3xl font-bold ml-3"> {numberOfResearch}</p>
                            </div>

                            <div className="">
                                <h3 className="text-lg font-medium inline robot">Available Sports: </h3>
                                <p className="inline text-3xl font-bold ml-3"> {numberOfSports}</p>
                            </div>

                            <div className="my-2">
                                <h3 className="text-lg font-medium inline robot">Admission Date: </h3>
                                <p className="inline text-xl font-bold ml-3"> {admissionDates}</p>
                            </div>
                            <div className="flex gap-5 my-3">
                                <h3 className="text-lg font-medium inline robot">Rating: </h3>
                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={collegeRating}
                                    readOnly
                                    />
                            </div>
                        </div>
                    <div className="">
                        <h3 className="text-xl font-bold robot text-[]">Events: </h3>
                        <ul className="robot ml-10">
                            {
                                events.map((event,idx) => <li key={idx} className="font-medium text-lg robot">{idx + 1}.{event}</li>)
                            }
                        </ul>
                    </div>

                    </div>
                    
                    <div className="card-actions justify-center my-8 mb-5">
                        <button onClick={handleNavigate} className="btn active text-[#05c46b] disc_effects_up w-1/3 font-bold sm:text-lg">Details</button>
                    </div>
                </div>
            </div>
    );
};

export default CollageCard;