import { useState } from "react";
import Logo from "../../components/Logo";
import CollageCard from "../../components/CollageCard";
import { FaTimesCircle } from "react-icons/fa";

const Banner = () => {
    const [collages, setCollages] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const handleSearch = (event) => {
        event.preventDefault();
        setNotFound(false);
        const searchText = event.target.searchText.value;
        fetch(
            `https://admission-portal-server.vercel.app/search?text=${searchText}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data?.length > 0) {
                    setCollages(data);
                    event.target.reset();
                } else {
                    setNotFound(true);
                }
            });
    };
    return (
        <div className="min-h-[100vh] bg_image flex items-center justify-center">
            <div className="text-center w-11/12 md:w-3/4">
                <h1 className="md:text-4xl text-3xl lg:text-5xl font-medium inline ">
                    Well Come in
                    <Logo></Logo>
                </h1>
                <h2 className="text-2xl md:text-3xl my-5 text-[#485460]">
                    Search Your Perfect Collage.
                </h2>
                <form
                    onSubmit={handleSearch}
                    action=""
                    className="flex w-full md:w-4/5 mx-auto mt-8"
                >
                    <input
                        required
                        type="text"
                        name="searchText"
                        placeholder="Search Your Favorite collage"
                        className="w-full sm:w-4/5 input_effects rounded-s-3xl p-3 px-5 outline-none border border-[#0be881]"
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="p-3 rounded-e-3xl w-[100px] sm:w-1/5 bg-[#0be881] cursor-pointer"
                    />
                </form>
                {notFound && (
                    <p className="text-left bg-white w-fit p-3 mx-auto rounded-xl shadow-xl text-red-500 text-xl">
                        Does not match may Collage...
                    </p>
                )}
            </div>
            <div
                className={`fixed grid lg:grid-cols-2 gap-5 bg-[#edf1f4] p-5 jm_container z-50 h-[90vh] overflow-auto ${
                    collages.length > 0 ? "block" : "hidden"
                }`}
            >
                {collages?.map((collage) => (
                    <CollageCard
                        key={collage?._id}
                        collage={collage}
                    ></CollageCard>
                ))}
                <button
                    onClick={() => setCollages([])}
                    className="absolute top-1 right-1 text-5xl text-red-500"
                >
                    <FaTimesCircle />
                </button>
            </div>
        </div>
    );
};

export default Banner;
