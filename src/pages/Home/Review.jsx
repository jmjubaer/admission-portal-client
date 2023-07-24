import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://admission-portal-server.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);
    return (
        <div className="jm_container my-28">
            <SectionTitle
                title={"Valuable Review From"}
                splTitle={"Our Students"}
            ></SectionTitle>
            <div className="mt-14">
                <Swiper
                    // slidesPerView={1}
                    breakpoints={{
                        740: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        790: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {reviews?.map((review) => (
                        <SwiperSlide key={review?._id}>
                            <div className="bg-white p-5 h-fit rounded-ss-3xl rounded-ee-3xl">
                                <div className="flex gap-4 items-center ">
                                    <img
                                        className="w-20 h-20 object-cover"
                                        src={review?.collegeImage}
                                        alt=""
                                    />
                                    <div className="">
                                        <h3 className="text-xl font-semibold robot">
                                            {review?.collegeName}.
                                        </h3>
                                        <Rating
                                            style={{
                                                maxWidth: 130,
                                                marginTop: "10px",
                                            }}
                                            value={review?.rating}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <p className="mt-5 robot">
                                    {review?.reviewText}
                                </p>
                                <p className="robot mt-3 font-bold">
                                    By{" "}
                                    <span className="text-[#ffa801] logo_font font-normal">
                                        {review?.studentName}.
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Review;
