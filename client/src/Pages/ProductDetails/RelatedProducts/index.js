import React, { useEffect, useState } from "react";
import ProductItem from "../../../Components/ProductItem/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { fetchDataFromApi } from "../../../utils/Api";
import NoProductsFound from "../../../Components/motionProduct";

const RelatedProducts = ({ title, categoryName, currentProductId, type }) => {
  const [products, setProducts] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Handle "recently viewed" products from localStorage
    if (type === "recent") {
      const recentlyViewed =
        JSON.parse(localStorage.getItem("recentlyViewed")) || [];
      setProducts(recentlyViewed);
    }
  }, [type]); // Only when type is "recent", this effect will run

  useEffect(() => {
    // Fetch related products based on category
    if (type === "related") {
      fetchDataFromApi("/api/products")
        .then((res) => {
          console.log("API Response:", res); // Debugging log

          // Check if the response has a product list and is an array
          if (Array.isArray(res)) {
            // Filter products based on the categoryName and currentProductId
            const filteredProducts = res.filter(
              (product) =>
                product.catName === categoryName &&
                product._id !== currentProductId
            );
            setRelatedProducts(filteredProducts);
          } else {
            console.error("Invalid API response structure:", res);
            setRelatedProducts([]); // Avoid undefined state
          }
        })
        .catch((error) => {
          console.error("Error fetching related products:", error);
        });
    }
  }, [categoryName, currentProductId, type]); // Re-fetch when categoryName, currentProductId, or type changes

  // Combine both types of products (recent and related)
  const displayProducts = type === "recent" ? products : relatedProducts;

  return (
    <div className="ml-4">
      <div className="d-flex align-items-center mt-3">
        <div className="info w-75">
          <h3 className="mb-0 hd" style={{ fontSize: "23px" }}>
            {title}
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
          {displayProducts.length > 0 ? (
            displayProducts.map((item) => (
              <SwiperSlide key={item._id}>
                <ProductItem item={item} />
              </SwiperSlide>
            ))
          ) : (
            <div className="no-products-container">
              <NoProductsFound />
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProducts;
