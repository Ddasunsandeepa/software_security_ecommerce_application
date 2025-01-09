import { Button, Rating } from "@mui/material";
import HomeBanner from "../../Components/HomeBanner";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../Components/ProductItem/ProductItem";
import HomeCat from "../../Components/HomeCat";
import newsBanner from "../../assets/images/coupon.png";
import { IoMailOutline } from "react-icons/io5";

const Home = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className="homeProducts">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 pos">
              <div className="sticky">
                <div className="banner ">
                  <img
                    src="https://img.freepik.com/free-psd/delicious-burger-food-menu-instagram-facebook-story-template_120329-4870.jpg"
                    alt=""
                    className="cursor w-100"
                  />
                </div>

                <div className="banner mt-5">
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
                    alt=""
                    className="cursor w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center mt-3">
                <div className="info w-75">
                  <h3 className="mb-0 hd">SPECIAL OFFERS</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of November
                  </p>
                </div>
                <Button className="viewAllBtn ml-9">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="productRow w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={12}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">MEALS</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of November
                  </p>
                </div>
                <Button className="viewAllBtn ml-9">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="productRow productRow2 w-100 mt-4">
                {/* First Swiper (Row 1) */}
                <Swiper
                  slidesPerView={4}
                  spaceBetween={12}
                  pagination={{ clickable: true }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="productRow productRow2 w-100 mt-4">
                {/* Second Swiper (Row 2) */}
                <Swiper
                  slidesPerView={4}
                  spaceBetween={12}
                  pagination={{ clickable: true }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img
                    src="https://freedesignfile.com/upload/2018/11/Pizza-advertising-template-with-blackboard-vector-01.jpg"
                    alt=""
                    className="cursor "
                  />
                </div>
                <div className="banner ">
                  <img
                    src="https://img.pikbest.com/templates/20240612/special-pasta-food-offer-social-media-post-design_10613031.jpg!w700wp"
                    alt=""
                    className="cursor "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="d-flex align-items-center mt-3">
        <div className="info w-75 ml-4">
          <h3 className="mb-0 hd" style={{ color: "black" }}>
            DESSERTS
          </h3>
          <p className="text-light text-sml mb-0">
            Do not miss the current offers until the end of November
          </p>
        </div>
        <Button className="viewAllBtn ml-9">
          View All <IoIosArrowRoundForward />
        </Button>
      </div>
      <div className="productRow w-100 mt-4">
        <Swiper
          slidesPerView={6}
          spaceBetween={12}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
        </Swiper>
      </div>
      <section className="newsLetterSection mt-1 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $25 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletters and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates on
                <br /> promotions and coupons.
              </p>
              <form>
                <IoMailOutline />
                <input type="text" placeholder="Your Email Address" />
                <Button>Subscribe</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={newsBanner} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
