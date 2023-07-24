import Banner from "./Banner";
import Collage from "./Collage";
import Gallery from "./Gallery";
import ResearchPager from "./ResearchPager";
import Review from "./Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collage></Collage>
            <Gallery></Gallery>
            <ResearchPager></ResearchPager>
            <Review></Review>
        </div>
    );
};

export default Home;