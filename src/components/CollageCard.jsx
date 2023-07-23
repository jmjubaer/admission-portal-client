/* eslint-disable react/prop-types */

const CollageCard = ({collage}) => {
    const {admissionDates,collegeImage,collegeName,collegeRating,numberOfResearch,numberOfSports,events,} = collage || {};
    return (
            <div className="card z-0 card-compact rounded-ss-none rounded-ee-none rounded-3xl shadow-xl border robot">
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

                            <div className="">
                                <h3 className="text-lg font-medium inline robot">Admission Date: </h3>
                                <p className="inline text-xl font-bold ml-3"> {admissionDates}</p>
                            </div>
                            <div className="">
                                <h3 className="text-lg font-medium inline robot">Rating: </h3>
                                <p className="inline text-xl font-bold ml-3"> {admissionDates}</p>
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
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
    );
};

export default CollageCard;