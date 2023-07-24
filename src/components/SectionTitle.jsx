/* eslint-disable react/prop-types */
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import Aos from 'aos';
const SectionTitle = ({title,splTitle}) => {
        useEffect(() =>{
            Aos.init({
                offset: 200,
                duration: 600,
                easing: 'ease-in-sine',
                delay: 100,
            })
        },[])
    return (
        <div data-aos="zoom-in" className="relative">
            <h2 className="text-4xl font-semibold text-center">
                {title}
                <span className="font-normal ml-3 logo_font text-[#575fcf]">
                    {splTitle}
                </span>
            </h2>
            <div className="absolute w-28 h-1 bg-[#3c40c6] -bottom-5 left-1/2 -translate-x-1/2"></div>
        </div>
    );
};

export default SectionTitle;
