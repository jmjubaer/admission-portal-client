/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
const CollageCard = ({collage}) => {
    useEffect(() =>{
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 300,
        })
    },[])
    const {admissionDates,collegeImage,collegeName,collegeRating,numberOfResearch,numberOfSports,events,_id} = collage || {};
    return (
            <div data-aos="zoom-in" className="card z-0 card-compact rounded-3xl shadow-xl border robot disc_effects">
                <figure className=""><img className="w-full h-80 object-cover" src={collegeImage} alt="Shoes" /></figure>
                <div className="card-body flex-col justify-between">
                    <h2 className="card-title text-2xl robot">{collegeName}</h2>

                    <div className="flex gap-8">
                        <div className="border-r-2 border-[#3c40c6] pr-3">
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
                        <Link to={`/collages/${_id}`} className='w-1/3'>
                            <button className="btn active text-[#05c46b] disc_effects_up w-full font-bold text-lg">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default CollageCard;