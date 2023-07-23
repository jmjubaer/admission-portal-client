import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimesCircle } from "react-icons/fa";
import useAuthContext from "../../Hooks/UseAuthContext";
import Swal from "sweetalert2";

const Admission = () => {
    const {user} = useAuthContext();
    const { register, handleSubmit, reset } = useForm();
    const [modal,setModal] = useState(false);
    const [colageId,setCollageId] = useState("");
    const [collages,setCollages] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/collages")
            .then((res) => res.json())
            .then((data) => {
                setCollages(data);
            });
    },[])
    const handleModal = (id) => {
        setModal(true);
        setCollageId(id);
    }
    const handleAdmission = (data) => {
        data.collageId = colageId
        fetch('http://localhost:5000/myCollage',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(dataRes => {
            if(dataRes?.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Submitted successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                reset();
                setModal(false)
            }
        })
    }
    return (
        <div className="my-28">
            <h2 className="text-center text-3xl font-semibold text-[#0fbcf9] mb-8">All Collage Lists</h2>
            <table className="jm_table ">
                <tr className="">
                    <th>#</th>
                    <th>Collage Name</th>
                </tr>
                {
                    collages.map((collage,idx) => <tr key={collage?._id}>
                        <td className="font-bold p-2">{idx + 1}</td>
                        <td className="text-left px-8 "><button onClick={() => handleModal(collage?._id)} className="text-[#007aff] hover:underline">{collage?.collegeName}</button></td>
                    </tr>)
                }
            </table>
            <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f8f8f8] p-5 rounded-xl shadow-xl z-40 w-1/2 h-[80vh] overflow-auto ${modal ? "block" : "hidden"}`}>
                <button onClick={() => setModal(false)} className="fixed top-1 right-1 text-3xl text-red-500 z-50"><FaTimesCircle/></button>
                <form onSubmit={handleSubmit(handleAdmission)} className="">
                    <div className="w-full flex flex-col">
                        <label className="text-xl mb-4" htmlFor="name">Name:</label>
                        <input required placeholder="Enter Your Name ...... " type="text" {...register("name")} id="name" className="input_effects p-3 px-5 rounded-xl outline-none"/>
                    </div>
                    <div className="w-full flex flex-col my-5">
                        <label className="text-xl mb-4" htmlFor="email">Email:</label>
                        <input required placeholder="Enter Your Email ...... " type="email" {...register("email")} value={user?.email} readOnly id="email" className="input_effects p-3 px-5 rounded-xl outline-none cursor-not-allowed"/>
                    </div>
                    <div className="w-full flex flex-col my-5">
                        <label className="text-xl mb-4" htmlFor="number">Phone Number:</label>
                        <input required placeholder="Enter Your Phone number ...... " type="number" {...register("number")} id="number" className="input_effects p-3 px-5 rounded-xl outline-none"/>
                    </div>
                    <div className="w-full flex flex-col my-5">
                        <label className="text-xl mb-4" htmlFor="address">Address:</label>
                        <input required placeholder="Enter Your Address ...... " type="text" {...register("address")} id="address" className="input_effects p-3 px-5 rounded-xl outline-none"/>
                    </div>
                    <div className="w-full flex flex-col my-5">
                        <label className="text-xl mb-4" htmlFor="date">Date of Birth:</label>
                        <input required type="date" {...register("birthDate")} id="date" className="input_effects p-3 px-5 rounded-xl outline-none"/>
                    </div>
                    <div className="w-full flex flex-col my-5">
                        <label className="text-xl mb-4" htmlFor="subject">Subject:</label>
                        <input required type="text" placeholder="Enter your subject" {...register("subject")} id="subject" className="input_effects p-3 px-5 rounded-xl outline-none"/>
                    </div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="text-xl mb-4" htmlFor="">
                            Attachment:
                        </label>
                        <input type="file" {...register("image")} className="disc_effects rounded-xl outline-none file-input" />
                    </div>
                    <input type="submit" value="Submit" className="disc_effects_up btn w-1/2 mt-8 mx-auto block active font-bold"/>
                </form>
            </div>
        </div>
    );
};

export default Admission;