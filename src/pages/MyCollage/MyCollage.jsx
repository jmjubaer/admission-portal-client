import { useEffect, useState } from "react";
import useAuthContext from "../../Hooks/UseAuthContext";
import DetailsCard from "../../components/DetailsCard";
import LoadingSpinner from "../SheredPage/LoadingSpinner";
import SectionTitle from "../../components/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const MyCollage = () => {
    const navigate = useNavigate();
    const { user, loading } = useAuthContext();
    const [collage, setCollage] = useState({});
    const [student, setStudent] = useState(null);
    const [rating, setRating] = useState(0);
    useEffect(() => {
        if (user?.email) {
            fetch(
                `https://admission-portal-server.vercel.app/mycollage?email=${user?.email}`
            )
                .then((res) => res.json())
                .then((data) => {
                    setStudent(data);
                })
                .catch(() => {
                    Swal.fire({
                        title: "You don't admit any collage",
                        text: "Go admission page and admit a collage",
                        icon: "warning",
                        showCancelButton: false,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Admission",
                        showDenyButton: true,
                        denyButtonText: "Go Home",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate("/admission");
                        }
                        if (result.isConfirmed) {
                            navigate("/admission");
                        } else if (result.isDenied) {
                            navigate("/");
                        }
                    });
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        if (student?.collageId) {
            fetch(
                `https://admission-portal-server.vercel.app/collages/${student?.collageId}`
            )
                .then((res) => res.json())
                .then((data) => {
                    setCollage(data);
                });
        }
    }, [student]);

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    if (!student) {
        return;
    }
    const handleFeedback = (event) => {
        event.preventDefault();
        const reviewText = event.target.feedback.value;
        const feedback = {
            reviewText,
            collegeName: collage?.collegeName,
            collegeImage: collage?.collegeImage,
            rating: rating,
            studentName: user?.displayName,
        };
        fetch("https://admission-portal-server.vercel.app/reviews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(feedback),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Send feedback successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    event.target.reset();
                }
            });
        console.log(feedback);
    };
    const { address, birthDate, email, name, number, subject } = student || {};
    return (
        <div className="my-28 jm_container">
            <SectionTitle
                title={"Collage"}
                splTitle={"information"}
            ></SectionTitle>
            <div className="mt-14">
                <DetailsCard details={collage}></DetailsCard>
            </div>
            <div className="mt-14">
                <SectionTitle
                    title={"Student"}
                    splTitle={"information"}
                ></SectionTitle>
                <div className="mt-14 md:w-11/12 lg:w-4/5 mx-auto disc_effects p-8 rounded-xl">
                    <div className="md:flex gap-8 justify-around my-5">
                        <div className="md:w-[48%] pr-3">
                            <div className="">
                                <h3 className="text-lg font-medium inline robot">
                                    Name:{" "}
                                </h3>
                                <p className="inline text-xl font-bold ml-3">
                                    {" "}
                                    {name}
                                </p>
                            </div>

                            <div className="my-5">
                                <h3 className="text-lg font-medium inline robot">
                                    Date of Birth:{" "}
                                </h3>
                                <p className="inline text-xl font-bold ml-3">
                                    {" "}
                                    {birthDate}
                                </p>
                            </div>

                            <div className="my-5">
                                <h3 className="text-lg font-bold robot mt-5 inline">
                                    Email:{" "}
                                </h3>
                                <p className="inline text-xl font-bold ml-3">
                                    {" "}
                                    {email}
                                </p>
                            </div>
                            <div className="my-5">
                                <h3 className="text-lg font-bold robot mt-5 inline">
                                    Phone:{" "}
                                </h3>
                                <p className="inline text-xl font-bold ml-3">
                                    +880 {number}
                                </p>
                            </div>
                        </div>

                        <div className="w-2 hidden md:block disc_effects_up bg-[#05c46b]"></div>

                        <div className="md:w-[48%]">
                            <div className="my-5">
                                <h3 className="text-lg font-medium inline robot">
                                    Address:{" "}
                                </h3>
                                <p className="inline text-xl font-bold ml-3">
                                    {" "}
                                    {address}
                                </p>
                            </div>
                            <div className="my-5">
                                <h3 className="text-lg font-medium inline robot">
                                    Subject:{" "}
                                </h3>
                                <p className="inline text-xl font-bold ml-3">
                                    {" "}
                                    {subject}
                                </p>
                            </div>
                            <div className="my-5">
                                <h3 className="text-2xl font-semibold inline robot">
                                    Attachment:{" "}
                                </h3>
                                <p className=" text-center">No Attacment</p>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={handleFeedback}
                        className="w-full md:w-4/5 mx-auto mt-8"
                    >
                        <textarea
                            required
                            type="email"
                            name="feedback"
                            id=""
                            className="p-3 w-full disc_effects min-h-[150px] px-5 outline-none rounded-lg"
                            placeholder="Enter Your Feedback...."
                        />
                        <div className="flex flex-wrap gap-5 mt-5">
                            <p className=" text-lg font-semibold">
                                Give rating:
                            </p>
                            <Rating
                                style={{ maxWidth: 150 }}
                                value={rating}
                                onChange={setRating}
                                className="z-50"
                                isRequired
                            />
                        </div>
                        <input
                            type="submit"
                            value="Send Feedback"
                            className="btn disc_effects_up mx-auto block mt-8 active"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyCollage;
