import React, { useState, MouseEvent, useEffect } from "react";
import SideBar from "../../Components/SideBar";
import banner from "../../../src/assets/img1 (3).png";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../../Components/ProductItem/ProductItem";
import Pagination from "@mui/material/Pagination";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/Api";
import NoProductsFound from "../../Components/motionProduct";

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { id } = useParams(); // Get category ID from URL
  const [productView, setProductView] = useState("four");
  const [mealsProducts, setMealsProducts] = useState([]); // Store all products
  const [catData, setCatData] = useState([]); // Store category list
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const openDropdown = Boolean(anchorEl);
  const [selectedRating, setSelectedRating] = useState(null);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [10, 10000],
    mealType: [],
  });
  useEffect(() => {
    fetchDataFromApi("/api/category").then(setCatData);
    fetchDataFromApi("/api/products").then(setMealsProducts);
  }, []);

  useEffect(() => {
    let filtered = mealsProducts;

    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category.name)
      );
    }

    if (filters.mealType.length > 0) {
      filtered = filtered.filter(
        (product) => filters.mealType.includes(product.type) // Trim spaces just in case
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );
    console.log("Filtered Products:", filtered);
    setFilteredProducts(filtered);
  }, [mealsProducts, filters]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Change this value to show more/less products per page

  // Calculate the total number of pages
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage)
  );
  // Get the current page's products
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when filters change
  }, [filters]);
  // Handle page change
  const handlePageChange = (event, page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const handleClose = (rating) => {
    setAnchorEl(null);
    if (rating !== undefined) {
      setSelectedRating(rating);
    }
  };

  useEffect(() => {
    // Fetch all categories
    fetchDataFromApi("/api/category")
      .then((res) => {
        setCatData(res);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });

    // Fetch all products
    fetchDataFromApi("/api/products")
      .then((res) => {
        setMealsProducts(res);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  useEffect(() => {
    if (id) {
      fetchDataFromApi(`/api/pr`);
    }
  }, [id]);

  useEffect(() => {
    if (id && catData.length > 0 && mealsProducts.length > 0) {
      // Find category name from category list using 'id'
      const matchedCategory = catData.find((cat) => cat._id === id);

      if (matchedCategory) {
        const categoryName = matchedCategory.name; // Extract category name

        // Filter products based on category name
        let filtered = mealsProducts.filter(
          (product) => product.category.name === categoryName
        );
        if (selectedRating !== null) {
          filtered = filtered.filter(
            (product) => Number(product.rating) >= selectedRating
          );
        }

        setFilteredProducts(filtered);
      }
    }
  }, [id, catData, mealsProducts, selectedRating]); // Run when 'id', 'catData', or 'mealsProducts' change

  return (
    <>
      <section className="product-Listing-page">
        <div className="container">
          <div className="productListing d-flex">
            <SideBar filters={filters} setFilters={setFilters} />
            <div className="content_right">
              <div
                style={{
                  position: "relative",
                  height: "450px", // Matches the image height
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={banner}
                  alt="Banner"
                  className="w-100"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                {/* Dark overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.3)",
                  }}
                />
              </div>

              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="d-flex align-items-center btnWrapper">
                  <Button
                    className={productView === "one" ? "act" : ""}
                    onClick={() => setProductView("one")}
                  >
                    <IoIosMenu />
                  </Button>

                  <Button
                    className={productView === "three" ? "act" : ""}
                    onClick={() => setProductView("three")}
                  >
                    <CgMenuGridR />
                  </Button>

                  <Button
                    className={productView === "four" ? "act" : ""}
                    onClick={() => setProductView("four")}
                  >
                    <TfiLayoutGrid4Alt />
                  </Button>
                </div>

                <div className="ml-auto showByFilter">
                  <Button onClick={handleClick}>
                    {selectedRating
                      ? `Rating: ${selectedRating}+`
                      : "Filter by Rating"}{" "}
                    <FaAngleDown />
                  </Button>
                  <Menu
                    className="w-100 showperPageDropDown"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={() => handleClose()}
                    MenuListProps={{ "aria-labelledby": "basic-button" }}
                    style={{ minWidth: "280px" }} // Increased width
                  >
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <MenuItem
                        key={rating}
                        onClick={() => handleClose(rating)}
                      >
                        {rating} Stars & Up
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </div>

              <div className="productListing1">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((item, index) => (
                    <ProductItem
                      key={item._id}
                      itemView={productView}
                      item={item}
                    />
                  ))
                ) : (
                  <NoProductsFound />
                )}
              </div>

              <div className="d-flex align-items-center justify-content-center mt-5">
                <Pagination
                  count={totalPages} // Total number of pages
                  page={currentPage} // Current page number
                  onChange={handlePageChange} // Function to handle page change
                  color="primary"
                  size="large"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
