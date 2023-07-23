import { useEffect, useState } from "react";
import useAuthContext from "../../Hooks/UseAuthContext";
import DetailsCard from "../../components/DetailsCard";
import LoadingSpinner from "../SheredPage/LoadingSpinner";
import SectionTitle from "../../components/SectionTitle";

const MyCollage = () => {
    const {user,loading} = useAuthContext();
    const [collage,setCollage] = useState({});
    const [student,setStudent] = useState({});

    useEffect(() => {
        if(user?.email){
            fetch(`http://localhost:5000/mycollage?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setStudent(data)
            })
        }

    },[user])

    useEffect(() => {
        if(student?.collageId){
            fetch(`http://localhost:5000/collages/${student?.collageId}`)
            .then( res => res.json())
            .then(data => {
                setCollage(data);
            })
        }
    },[student])

        if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    console.log(student);
    console.log(collage);
    const {address,birthDate,email,name,number,subject} = student || {};
    return (
        <div className="my-28 jm_container">
            <SectionTitle title={"Collage"} splTitle={"information"}></SectionTitle>
            <div className="mt-14">
                <DetailsCard details={collage}></DetailsCard>
            </div>
            <div className="mt-14">
                <SectionTitle title={"Student"} splTitle={"information"}></SectionTitle>
                <div className="mt-14 w-4/5 mx-auto disc_effects p-8 rounded-xl">
                    <div className="flex gap-8 justify-around my-5">
                        <div className="w-[48%] pr-3">
                            <div className="">
                                <h3 className="text-lg font-medium inline robot">Name: </h3>
                                <p className="inline text-xl font-bold ml-3"> {name}</p>
                            </div>

                            <div className="my-5">
                                <h3 className="text-lg font-medium inline robot">Date of Birth: </h3>
                                <p className="inline text-xl font-bold ml-3"> {birthDate}</p>
                            </div>

                            <div className="my-5">
                                <h3 className="text-lg font-bold robot mt-5 inline">Email: </h3>
                                <p className="inline text-xl font-bold ml-3"> {email}</p>
                            </div>
                            <div className="my-5">
                                <h3 className="text-lg font-bold robot mt-5 inline">Phone: </h3>
                                <p className="inline text-xl font-bold ml-3">+880 {number}</p>
                            </div>
                        </div>

                        <div className="w-2 disc_effects_up bg-[#05c46b]"></div>

                        <div className="w-[48%]">
                            <div className="my-5">
                                <h3 className="text-lg font-medium inline robot">Address: </h3>
                                <p className="inline text-xl font-bold ml-3"> {address}</p>
                            </div>
                            <div className="my-5">
                                <h3 className="text-lg font-medium inline robot">Subject: </h3>
                                <p className="inline text-xl font-bold ml-3"> {subject}</p>
                            </div>
                            <div className="my-5">
                                <h3 className="text-2xl font-semibold inline robot">Attachment: </h3>
                                <p className=" text-center">No Attacment</p>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCollage;