import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailsCard from "../../components/DetailsCard";

const Details = () => {
    const id = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch(`https://admission-portal-server.vercel.app/collages/${id?.id}`)
            .then((res) => res.json())
            .then((data) => {
                setDetails(data);
            });
    }, []);
    console.log(details);

    return (
        <div className="my-28 jm_container">
            <Link to={-1}>
                <button className="btn disc_effects">Back</button>
            </Link>
            <DetailsCard details={details}></DetailsCard>
        </div>
    );
};

export default Details;
