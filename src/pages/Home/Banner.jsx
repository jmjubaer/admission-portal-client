import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="min-h-[100vh] bg_image flex items-center justify-center">
            <div className="text-center w-3/4">
                <h1 className="text-5xl font-medium">Well Come in 
                    <span className='text-4xl lg:col-span-2 text-[#0fbcf9] jm-shadow'><Link to="/"> <span className='logo_font text-5xl text-[#575fcf]'>
                    A</span>dmission <span className='logo_font text-5xl text-[#575fcf]'>P</span>ortal</Link></span>
                </h1>
                <h2 className="text-3xl my-5 text-[#485460]">Search Your Perfect Collage.</h2>
                <form action="" className="flex w-4/5 mx-auto mt-8">
                    <input type="text" name="searchText" placeholder="Search Your Favorite collage" className="w-4/5 input_effects rounded-s-3xl p-3 px-5 outline-none border border-[#0be881]"/>
                    <input type="submit" value="Search" className="p-3 rounded-e-3xl w-1/5 bg-[#0be881]"/>
                </form>
            </div>
        </div>
    );
};

export default Banner;