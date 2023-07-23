import { useEffect, useState } from "react";

const Gallery = () => {
    const [images,setImages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/gallery')
        .then(res => res.json())
        .then(data => {
            setImages(data);
        })
    },[])
    console.log(images);
    return (
        <div className="my-28 jm_container">
            <h2 className="text-4xl font-semibold">Explore the Collage  <span className="font-normal logo_font text-[#575fcf]"> Image Gallery</span></h2>
            <div className="grid grid-cols-3 gap-8 mt-14">
                {
                    images?.map(image => <div  key={image?._id} className="">
                        <img src={image?.image} className="w-full h-full p-5 disc_effects_up object-cover"/>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;