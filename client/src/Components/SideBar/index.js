import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";
import banner1 from "../../../src/assets/banner1.png";

const SideBar = () => {
  const [value, setValue] = useState([10, 10000]);
  const [value1, setValue1] = useState(0);
  return (
    <>
      <div className="sidebar">
        <div className="filterBox">
          <h5>PRODUCT CATEGORIES</h5>
          <div className="scroll">
            <ul className="ml-3 mt-3">
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Favourites"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Meals"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Dessert"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Drinks"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Combo"
                />
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="filterBox">
          <h5 className="mb-4">FILTER BY PRICE</h5>
          <RangeSlider
            value={value}
            onInput={setValue}
            min={10}
            max={10000}
            step={5}
          />
          <div className="d-flex pt-2 pb-2 priceRange">
            <span>
              From: <strong className="text-dark ">$: {value[0]}</strong>
            </span>
            <span className="ml-auto">
              From: <strong className="text-dark">$: {value[1]}</strong>
            </span>
          </div>
        </div>
        <br />
        <div className="filterBox">
          <h5>MEALS TYPE</h5>
          <div className="scroll">
            <ul className="ml-3 mt-3">
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Vege"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Non-Vege"
                />
              </li>
            </ul>
          </div>
        </div>
        <br /> <br />
        <Link to="#">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pizza-poster-flyers-design-template-f794ae84977038cf44cb9e4c6528ca6e_screen.jpg?ts=1661327865"
            alt=""
            style={{
              height: "450px",
              width: "340px",
              borderRadius: "15px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              objectFit: "cover",
            }}
            className="img-link"
          />
        </Link>
      </div>
    </>
  );
};

export default SideBar;
