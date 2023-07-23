import { useEffect, useState } from "react";
import CollageCard from "../../components/CollageCard";
const Collage = () => {
    const [collages,setCollages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/collages')
        .then(res => res.json())
        .then(data => {
            setCollages(data);
        })
    },[])
    console.log(collages);
    return (
        <div className="my-28 jm_container ">
            <h2 className="text-4xl font-semibold">Find Your Best <span className="font-normal logo_font text-[#575fcf]">Collage</span></h2>
            <div className="grid grid-cols-2 mt-14 gap-5 justify-evenly">
                {
                    collages.slice(0,3).map(collage => <CollageCard key={collage?._id} collage={collage}></CollageCard>)
                }
            </div>
        </div>
    );
};

export default Collage;