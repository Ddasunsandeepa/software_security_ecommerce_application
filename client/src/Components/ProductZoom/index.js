import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { fetchDataFromApi } from "../../utils/Api";

const ProductZoom = (props) => {
  const zoomSliderBid = useRef();
  const zoomSlider = useRef();

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const goto = (index) => {
    if (zoomSlider.current && zoomSliderBid.current) {
      zoomSlider.current.slickGoTo(index);
      zoomSliderBid.current.slickGoTo(index);
    }
  };

  return (
    <div className="productZoom">
      <div className="productZoom position-relative">
        <div className="badge badge-primary">{props?.discount}%</div>
        <Slider {...settings2} className="zoomSliderBid" ref={zoomSliderBid}>
          {props?.images?.map((item, index) => {
            return (
              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={item}
                  alt="Product Zoom Image"
                />
              </div>
            );
          })}
        </Slider>
      </div>

      <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
        {props?.images?.map((item, index) => {
          return (
            <div className="item">
              <img
                src={item}
                className="w-100"
                alt=""
                onClick={() => goto(index)}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductZoom;
