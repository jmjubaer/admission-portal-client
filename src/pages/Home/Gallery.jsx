import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import "aos/dist/aos.css";
import Aos from "aos";

const Gallery = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
        });

        fetch("http://localhost:5000/gallery")
            .then((res) => res.json())
            .then((data) => {
                setImages(data);
            });
    }, []);
    return (
        <div className="my-28 jm_container">
            <SectionTitle
                title={"Explore the Collage"}
                splTitle={"Image Gallery"}
            ></SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                {images?.map((image) => (
                    <div data-aos="zoom-in" key={image?._id} className="">
                        <img
                            src={image?.image}
                            className="w-full h-full p-5 disc_effects_up object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
