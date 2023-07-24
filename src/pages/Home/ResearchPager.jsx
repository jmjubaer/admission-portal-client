/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import image1 from "./../../assets/reseach/1.jpg"
import image2 from "./../../assets/reseach/2.jpg"
import image3 from "./../../assets/reseach/3.jpg"
import Aos from "aos";
import 'aos/dist/aos.css';
const ResearchPager = () => {
    useEffect(() =>{
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        })
    },[])
    return (
        <div className="jm_container">
            <SectionTitle title={"Some Important"} splTitle={"Research Paper"}></SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-5">
                <div data-aos="fade-right" className="bg-white  rounded-ss-3xl rounded-ee-3xl overflow-hidden shadow-xl">
                    <img src={image1} alt="" className="w-full h-60"/>
                    <div className="p-5">
                        <h3 className="text-xl font-bold">The role of artificial intelligence in healthcare.</h3>
                        <p className="mt-5">Artificial intelligence (AI) in the healthcare sector is receiving attention from researchers and health professionals. Few previous studies have investigated this topic from a multi-disciplinary perspective, including accounting, business and management, decision sciences and health professions......</p>
                        <button className="btn btn-accent ml-auto block mt-4"><a href="https://bmcmedinformdecismak.biomedcentral.com/articles/10.1186/s12911-021-01488-9" target="_blank">Read More</a></button>
                    </div>
                </div>
                <div data-aos="fade-up" className="bg-white rounded-ss-3xl rounded-ee-3xl overflow-hidden shadow-xl">
                    <img src={image2} alt="" className="w-full h-60"/>
                    <div className="p-5">
                        <h3 className="text-xl font-bold">Exploring Renewable Energy Resources Using Remote Sensing and GIS.</h3>
                        <p className="mt-5">Renewable energy has received noteworthy attention during the last few decades. This is partly due to the fact that fossil fuels are depleting and the need for energy is soaring because of the growing population of the world. ......</p>
                        <button className="btn btn-accent ml-auto block mt-4"><a href="https://www.mdpi.com/2079-9276/8/3/149" target="_blank">Read More</a></button>
                    </div>
                </div>
                <div  data-aos="fade-left" className="bg-white rounded-ss-3xl rounded-ee-3xl overflow-hidden shadow-xl ">
                    <img src={image3} alt="" className="w-full h-60"/>
                    <div className="p-5">
                        <h3 className="text-xl font-bold">Multiple “stable” states and the conservation of marine ecosystems.</h3>
                        <p className="mt-5">Marine ecosystems were among the first to provide potential examples of multiple stable states. However, remarkably few of these have been explored in detail, and none have been rigorously confirmed. This may be because differences between .......</p>
                        <button className="btn btn-accent ml-auto block mt-4"><a href="https://www.sciencedirect.com/science/article/abs/pii/S0079661104000369" target="_blank">Read More</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchPager;