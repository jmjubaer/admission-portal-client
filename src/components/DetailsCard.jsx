/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const DetailsCard = ({details}) => {
    const {admissionDates,collegeImage,collegeName,collegeRating,numberOfResearch,researchWorks,sportsCategories,eventsDetails,admissionProcess} = details || {};
    return (
        <div className="    ">
            <div className="card z-0 card-compact rounded-3xl shadow-xl border robot disc_effects w-4/5 mx-auto mt-5">
                <figure className=""><img className="w-full h-[80vh] object-cover" src={collegeImage} alt="Shoes" /></figure>
                <div className="card-body flex-col justify-between m-5">
                    <h2 className="card-title text-2xl robot">{collegeName}</h2>

                    <div className="flex gap-8 justify-around my-5">
                        <div className="w-[48%] pr-3">
                            <div className="">
                                <h3 className="text-lg font-medium inline robot">Numbers of Research: </h3>
                                <p className="inline text-3xl font-bold ml-3"> {numberOfResearch}</p>
                            </div>

                            <div className="">
                                <h3 className="text-lg font-bold robot mt-5">Research on Works: </h3>
                                <ul className="robot ml-10 ">
                                {
                                    researchWorks?.map((event,idx) => <li key={idx} className="font-medium text-lg robot">{idx + 1}. {event}</li>)
                                }
                                </ul>
                            </div>

                            <div className="my-5">
                                <h3 className="text-lg font-medium inline robot">Admission Date: </h3>
                                <p className="inline text-xl font-bold ml-3"> {admissionDates}</p>
                            </div>

                            <div className="my-5">
                                <h3 className="text-lg font-bold robot mt-5">Admission Process: </h3>
                                <ul className="robot ml-10 ">
                                    <li className="font-medium text-lg robot">1. {admissionProcess}</li>
                                </ul>
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

                        <div className="w-2 disc_effects_up bg-[#05c46b]"></div>

                        <div className="w-[48%]">
                            <div className="">
                                <h3 className="text-xl font-bold robot">Events: </h3>
                                <ul className="robot ml-10">
                                    {
                                        eventsDetails?.map((event,idx) => <li key={idx} className="font-medium text-lg robot">{idx + 1}. {event}</li>)
                                    }
                                </ul>
                            </div>

                            <div className="">
                                <h3 className="text-lg font-bold robot mt-5">Available Sports Category: </h3>
                                <ul className="robot ml-10 ">
                                {
                                    sportsCategories?.map((event,idx) => <li key={idx} className="font-medium text-lg robot">{idx + 1}. {event}</li>)
                                }
                                </ul>
                            </div>
                        </div>
                        

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;