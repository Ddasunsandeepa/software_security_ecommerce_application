import React, { useRef } from "react";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ProductZoom = () => {
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
        <div className="badge badge-primary">23%</div>
        <Slider {...settings2} className="zoomSliderBid" ref={zoomSliderBid}>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://adminsc.pizzahut.lk//images/mainmenu/c4f8dd31-4c4e-41e8-be57-3f0c4e32e13d.jpg"
              alt="Product Zoom Image"
            />
          </div>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://adminsc.pizzahut.lk//images/mainmenu/c4f8dd31-4c4e-41e8-be57-3f0c4e32e13d.jpg"
              alt="Product Zoom Image"
            />
          </div>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://adminsc.pizzahut.lk//images/mainmenu/c4f8dd31-4c4e-41e8-be57-3f0c4e32e13d.jpg"
              alt="Product Zoom Image"
            />
          </div>
        </Slider>
      </div>

      <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
        <div className="item">
          <img
            src="https://adminsc.pizzahut.lk//images/mainmenu/c4f8dd31-4c4e-41e8-be57-3f0c4e32e13d.jpg"
            className="w-100"
            alt=""
            onClick={() => goto(0)}
          />
        </div>
        <div className="item">
          <img
            src="https://adminsc.pizzahut.lk//images/mainmenu/c4f8dd31-4c4e-41e8-be57-3f0c4e32e13d.jpg"
            className="w-100"
            alt=""
            onClick={() => goto(1)}
          />
        </div>
        <div className="item">
          <img
            src="https://adminsc.pizzahut.lk//images/mainmenu/c4f8dd31-4c4e-41e8-be57-3f0c4e32e13d.jpg"
            className="w-100"
            alt=""
            onClick={() => goto(2)}
          />
        </div>
      </Slider>
    </div>
  );
};

export default ProductZoom;
