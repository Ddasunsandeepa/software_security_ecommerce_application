import React from "react";
import ProductItem from "../../../Components/ProductItem/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const RelatedProducts = (props) => {
  return (
    <div className="ml-4">
      <div className="d-flex align-items-center mt-3">
        <div className="info w-75">
          <h3 className="mb-0 hd" style={{ fontSize: "23px" }}>
            {props.title}
          </h3>
        </div>
      </div>
      <div className="productRow w-100 mt-4">
        <Swiper
          slidesPerView={5.5}
          spaceBetween={12}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerGroup={1.5}
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
    </div>
  );
};

export default RelatedProducts;
