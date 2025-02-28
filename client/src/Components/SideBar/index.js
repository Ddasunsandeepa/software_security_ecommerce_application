import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";
import banner1 from "../../../src/assets/banner1.png";
import { motion } from "framer-motion";
import { Slider } from "@mui/material";

const SideBar = ({ filters, setFilters }) => {
  const [expanded, setExpanded] = useState({
    categories: true,
    price: true,
    mealType: true,
  });

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, value]
        : prev.categories.filter((cat) => cat !== value),
    }));
  };

  const handleMealTypeChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prev) => ({
      ...prev,
      mealType: checked
        ? [...prev.mealType, value]
        : prev.mealType.filter((type) => type !== value),
    }));
  };

  const handlePriceChange = (event, value) => {
    setFilters((prev) => ({ ...prev, priceRange: value }));
  };

  return (
    <motion.div
      className="sidebar bg-gray-100 p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Category Filter */}
      <div className="filterBox">
        <h5
          className="text-lg font-semibold cursor-pointer"
          onClick={() => toggleExpand("categories")}
        >
          PRODUCT CATEGORIES
        </h5>
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: expanded.categories ? "auto" : 0,
            opacity: expanded.categories ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          {["Pizza", "Favourites", "Meal", "Dessert", "Drinks", "Combo"].map(
            (category) => (
              <li key={category} className="mt-1">
                <FormControlLabel
                  control={
                    <Checkbox
                      value={category}
                      onChange={handleCategoryChange}
                    />
                  }
                  label={category}
                />
              </li>
            )
          )}
        </motion.ul>
      </div>

      {/* Price Filter */}
      <div className="filterBox mt-4">
        <h5
          className="text-lg font-semibold cursor-pointer"
          onClick={() => toggleExpand("price")}
        >
          FILTER BY PRICE
        </h5>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: expanded.price ? "auto" : 0,
            opacity: expanded.price ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <Slider
            value={filters.priceRange}
            onChange={handlePriceChange}
            min={10}
            max={500}
            step={5}
            valueLabelDisplay="auto"
            className="mt-2"
          />
          <div className="flex justify-between mt-2 text-sm">
            <span>
              From: <strong>${filters.priceRange[0]}</strong>
            </span>
            <span style={{marginLeft:99}}>
              To: <strong>${filters.priceRange[1]}</strong>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Meal Type Filter */}
      <div className="filterBox mt-4">
        <h5
          className="text-lg font-semibold cursor-pointer"
          onClick={() => toggleExpand("mealType")}
        >
          MEALS TYPE
        </h5>
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: expanded.mealType ? "auto" : 0,
            opacity: expanded.mealType ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          {["Vegetarian", "Non-Vegetarian"].map((type) => (
            <li key={type} className="mt-1">
              <FormControlLabel
                control={
                  <Checkbox value={type} onChange={handleMealTypeChange} />
                }
                label={type}
              />
            </li>
          ))}
        </motion.ul>
      </div>
      <Link to="#">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pizza-poster-flyers-design-template-f794ae84977038cf44cb9e4c6528ca6e_screen.jpg?ts=1661327865"
          alt=""
          style={{
            height: "450px",
            width: "310px",
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            objectFit: "cover",
          }}
          className="img-link"
        />
      </Link>
    </motion.div>
  );
};

export default SideBar;
