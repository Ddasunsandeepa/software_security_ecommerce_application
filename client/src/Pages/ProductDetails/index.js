import React, { useEffect, useState } from "react";
import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityDropDown";
import Button from "@mui/material/Button";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/Api";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState(0);
  const [activeTabs, setActiveTabs] = useState(0);
  const [productData, setProductData] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(0);
  const { id } = useParams();
  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   fetchDataFromApi(`/api/products/${id}`).then((res) => {
  //     setProductData(res);
  //     console.log(res);
  //     setCurrentPrice(res.price); // Set initial price
  //   });
  // }, [id]); // Re-fetch when ID changes
  useEffect(() => {
    window.scrollTo(0, 0);

    fetchDataFromApi(`/api/products/${id}`).then((res) => {
      setProductData(res);
      setCurrentPrice(res.price); // Set initial price

      if (res) {
        // Get existing recently viewed products from localStorage
        let recentlyViewed =
          JSON.parse(localStorage.getItem("recentlyViewed")) || [];

        // Remove duplicate entries
        recentlyViewed = recentlyViewed.filter((p) => p._id !== res._id);

        // Add the new product at the beginning
        recentlyViewed.unshift(res);

        // Keep only the last 5 recently viewed products
        if (recentlyViewed.length > 5) {
          recentlyViewed.pop();
        }

        // Save back to localStorage
        localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
      }
    });
  }, [id]); // Re-fetch when ID changes

  if (!productData) {
    return <div>Loading...</div>;
  }
  const isActive = (index) => {
    setActiveSize(index);
  };
  const sizePriceIncrements = [0, 4, 6, 12]; // Example: Small (+$0), Medium (+$2), Large (+$4), Supreme (+$6)

  const handleSizeChange = (index) => {
    setActiveSize(index);
    setCurrentPrice(
      (productData.price + sizePriceIncrements[index]) * quantity
    );
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    setCurrentPrice(
      (productData.price + sizePriceIncrements[activeSize]) * newQuantity
    );
  };

  return (
    <div>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 ml-5 pl-5">
              <ProductZoom
                images={productData.images}
                discount={productData.discount}
              />
            </div>
            <div className="col-md-8 ml-4 pl-4 pr-4">
              <h2
                className="hd ml-4 text-capitalize"
                style={{ color: "black" }}
              >
                {productData.name}
              </h2>

              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="ml-4">Categories</span>
                    <span className="ml-1" style={{ color: "black" }}>
                      {" "}
                      : {productData.catName}
                    </span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={Number(productData.rating)}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                    <span className="text-light cursor ml-2">
                      {Number(productData.rating)} Reviews
                    </span>
                  </div>
                </li>
              </ul>

              <div className="d-flex info mb-3 ml-4">
                <span className="oldPrice">${productData.oldPrice}</span>
                <span className="netPrice text-danger ml-2">
                  ${currentPrice}
                </span>
              </div>
              <span className="badge badge-success ml-4">IN STOCK</span>
              <p className="mt-3 ml-4" style={{ color: "black" }}>
                {productData.description}
              </p>

              <div className="productSize d-flex align-items-center">
                <span>Size</span>
                <ul className="list list-inline mb-0 pl-4">
                  {productData.size?.map((size, index) => (
                    <li className="list-inline-item" key={index}>
                      <a
                        className={`tag ${
                          activeSize === index ? "active" : ""
                        }`}
                        onClick={() => handleSizeChange(index)}
                      >
                        {size}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="d-flex align-items-center ml-4 mt-3">
                <QuantityBox
                  inputVal={quantity}
                  setInputVal={handleQuantityChange}
                />
                <Button className="btn-blue btn-lg btn-big btn-round">
                  <FaCartShopping /> &nbsp; Add to cart
                </Button>

                <Tooltip title="Add to WishList" placement="top">
                  <Button
                    className="btn-blue btn-lg btn-big btn-circle ml-4"
                    style={{ fontSize: "17px" }}
                  >
                    <FaRegHeart /> &nbsp;
                  </Button>
                </Tooltip>

                <Tooltip title="Add to Compare" placement="top">
                  <Button
                    className="btn-blue btn-lg btn-big btn-circle ml-2"
                    style={{ fontSize: "17px" }}
                  >
                    <MdCompareArrows /> &nbsp;
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <br />

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Ingredients & Allergens
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => {
                      setActiveTabs(2);
                    }}
                  >
                    Reviews (3)
                  </Button>
                </li>
              </ul>
              <br />
              {activeTabs === 0 && (
                <div className="tabContent">
                  <p>{productData.description} </p>
                </div>
              )}
              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr className="ingredients">
                          <th>Ingredients</th>
                          <td>
                            BBQ sauce, mozzarella, grilled chicken, red onions,
                            cilantro.
                          </td>
                        </tr>
                        <tr className="allergens">
                          <th>Allergens</th>
                          <td>
                            Contains dairy, gluten. May contain traces of nuts.
                          </td>
                        </tr>
                        <tr className="portion-size">
                          <th>Portion Size</th>
                          <td>Serves 2-4 people.</td>
                        </tr>
                        <tr className="calories">
                          <th>Calories</th>
                          <td>Approx. 450 calories per slice.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-10">
                      <h3>Customer question & answers</h3>
                      <br />
                      <div className="card p-4 reviewCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img
                              src="https://static.vecteezy.com/system/resources/thumbnails/037/098/807/small_2x/ai-generated-a-happy-smiling-professional-man-light-blurry-office-background-closeup-view-photo.jpg"
                              alt=""
                              style={{
                                height: "100px",
                                width: "100px",
                                borderRadius: "50%",
                              }}
                            />
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">
                            dasun
                          </span>
                        </div>

                        <div className="info pl-5">
                          <div className="d-flex align-items-center w-100">
                            <h5 className="text-light">2024/10/10</h5>
                            <div className="ml-auto">
                              <Rating
                                name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                                size="small"
                              />
                            </div>
                          </div>
                          <p>
                            Morbi vitae erat auctor, eleifend nunc a, lobortis
                            neque. Praesent aliquam dignissim viverra. Maecenas
                            lacus odio, feugiat eu nunc sit amet, maximus
                            sagittis dolor. Vivamus nisi sapien, elementum sit
                            amet eros sit amet, ultricies cursus ipsum. Sed
                            consequat luctus ligula. Curabitur laoreet rhoncus
                            blandit. Aenean vel diam ut arcu pharetra dignissim
                            ut sed leo. Vivamus faucibus, ipsum in vestibulum
                            vulputate, lorem orci convallis quam, sit amet
                            consequat nulla felis pharetra lacus. Duis semper
                            erat mauris, sed egestas purus commodo vel.
                          </p>
                        </div>
                      </div>
                    </div>

                    <br className="res-hide" />
                    <br className="res-hide" />
                    <br />
                    <br />
                    <div className="col-md-10">
                      <form className="reviewForm">
                        <h4 className="mt-4">Add a review</h4>

                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Write a Review"
                            name="review"
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-5">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="userName"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Rating
                                name="rating"
                                value={4.5}
                                precision={0.5}
                              />
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <Button
                            type="submit"
                            className="btn-blue btn-lg btn-big btn-round buton"
                          >
                            Submit Review
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <br />
          <RelatedProducts
            title="RELATED MEALS"
            categoryName={productData.catName}
            currentProductId={productData._id}
            type="related"
          />
          <RelatedProducts title="RECENTLY VIEWED PRODUCTS" type="recent" />
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
