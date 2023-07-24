import { useEffect, useState } from "react";
import CollageCard from "../../components/CollageCard";

const AllCollages = () => {
    const [collages, setCollages] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/collages")
            .then((res) => res.json())
            .then((data) => {
                setCollages(data);
            });
    }, []);
    return (
        <div>
            <div className="grid lg:grid-cols-2 my-28 gap-5 justify-evenly jm_container">
                {collages.map((collage) => (
                    <CollageCard
                        key={collage?._id}
                        collage={collage}
                    ></CollageCard>
                ))}
            </div>
        </div>
    );
};

export default AllCollages;
