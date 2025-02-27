import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { fetchDataFromApi } from "../../utils/Api";

const HomeCat = (props) => {
  const [catData, setCatdata] = useState([]);
  useEffect(() => {
    fetchDataFromApi("/api/category").then((res) => {
      setCatdata(res);
    });
  }, []);

  useEffect(() => {
    setCatdata(props.catData);
  }, [props.catData]);

  return (
    <section className="homeCat">
      <div className="container">
        <h3 className=" hd" style={{ color: "balck" }}>
          FEATURED CATEGORIES
        </h3>
        <p className="text-light text-sml mb-4 mt-0">
          Do not miss the current offers until the end of November
        </p>
        <Swiper
          slidesPerView={9}
          autoplay={true}
          spaceBetween={16}
          slidesPerGroup={2}
          navigation={true}
          autoplaySpeed={3000}
          speed={500}
          modules={[Navigation]}
          className="mySwiper"
        >
          {catData?.map((cat, index) => {
            return (
              <SwiperSlide>
                <div
                  className="item text-center cursor"
                  style={{ background: cat.color }}
                >
                  <img src={cat.images[0]} alt="" />
                  <h6 style={{ color: "black" }} className="mt-3">
                    {cat.name}
                  </h6>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
