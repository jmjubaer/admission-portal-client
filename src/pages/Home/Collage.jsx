import { useEffect, useState } from "react";
import CollageCard from "../../components/CollageCard";
import SectionTitle from "../../components/SectionTitle";
import Aos from "aos";
const Collage = () => {
    const [collages,setCollages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/collages')
        .then(res => res.json())
        .then(data => {
            setCollages(data);
        })
    },[])
    useEffect(() =>{
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        })
    },[])
    return (
        <div className="my-28 jm_container ">
            <SectionTitle  data-aos="fade-up" title={"Find Your Best"} splTitle={"Collage"}></SectionTitle>
            <div className="grid lg:grid-cols-2 mt-14 gap-5 justify-evenly">
                {
                    collages.slice(0,3).map(collage => <CollageCard key={collage?._id} collage={collage}></CollageCard>)
                }
            </div>
        </div>
    );
};

export default Collage;