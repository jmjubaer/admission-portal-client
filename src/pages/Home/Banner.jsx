import Logo from "../../components/Logo";

const Banner = () => {
    return (
        <div className="min-h-[100vh] bg_image flex items-center justify-center">
            <div className="text-center w-11/12 md:w-3/4">
                <h1 className="md:text-4xl text-3xl lg:text-5xl font-medium inline ">Well Come in 
                    <Logo></Logo>
                </h1>
                <h2 className="text-2xl md:text-3xl my-5 text-[#485460]">Search Your Perfect Collage.</h2>
                <form action="" className="flex w-full md:w-4/5 mx-auto mt-8">
                    <input type="text" name="searchText" placeholder="Search Your Favorite collage" className="w-full sm:w-4/5 input_effects rounded-s-3xl p-3 px-5 outline-none border border-[#0be881]"/>
                    <input type="submit" value="Search" className="p-3 rounded-e-3xl w-[100px] sm:w-1/5 bg-[#0be881]"/>
                </form>
            </div>
        </div>
    );
};

export default Banner;