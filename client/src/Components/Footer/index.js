import React from "react";
import { SiCodefresh } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { MdDiscount } from "react-icons/md";
import { LuBadgeDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="topInfo row">
          <div className="col d-flex align-items-center ml-5">
            <span className="ml-3">
              <SiCodefresh />
            </span>
            <span className="ml-2">Everyday Fresh Meals</span>
          </div>
          <div className="col d-flex align-items-center">
            <span className="ml-3">
              <TbTruckDelivery />
            </span>
            <span className="ml-2"> Free Delivery for order over $100</span>
          </div>
          <div className="col d-flex align-items-center">
            <span className="ml-3">
              <LuBadgeDollarSign />
            </span>
            <span className="ml-2">Best price on the market</span>
          </div>
          <div className="col d-flex align-items-center">
            <span className="ml-3">
              <MdDiscount />
            </span>
            <span className="ml-2">Daily Mega Discounts</span>
          </div>
        </div>

        <div className="row mt-5 linkWraps">
          <div className="col ml-6" data-testid="meals-section">
            <h5>MEALS & FAVOURITES</h5>
            <ul>
              <li>
                <Link to="#">Grilled Chicken</Link>
              </li>
              <li>
                <Link to="#">Pasta Dishes</Link>
              </li>
              <li>
                <Link to="#">Seafood Specials</Link>
              </li>
              <li>
                <Link to="#">Desserts & Pastries</Link>
              </li>
              <li>
                <Link to="#">Beverages & Drinks</Link>
              </li>
              <li>
                <Link to="#">Vegan Options</Link>
              </li>
              <li>
                <Link to="#">Special Offers</Link>
              </li>
            </ul>
          </div>
          <div className="col" data-testid="desserts-section">
            <h5>DESSERTS & FAVOURITES</h5>
            <ul>
              <li>
                <Link to="#">Chocolate Lava Cake</Link>
              </li>
              <li>
                <Link to="#">Cheesecake</Link>
              </li>
              <li>
                <Link to="#">Tiramisu</Link>
              </li>
              <li>
                <Link to="#">Fruit Tart</Link>
              </li>
              <li>
                <Link to="#">Brownie Sundae</Link>
              </li>
              <li>
                <Link to="#">Apple Pie</Link>
              </li>
              <li>
                <Link to="#">Panna Cotta</Link>
              </li>
            </ul>
          </div>
          <div className="col" data-testid="drinks-section">
            <h5>DRINKS & FAVOURITES</h5>
            <ul>
              <li>
                <Link to="#">Vanilla Ice Cream</Link>
              </li>
              <li>
                <Link to="#">Iced Tea</Link>
              </li>
              <li>
                <Link to="#">Cappuccino</Link>
              </li>
              <li>
                <Link to="#">Sparkling Water</Link>
              </li>
              <li>
                <Link to="#">Milkshake</Link>
              </li>
              <li>
                <Link to="#">Hot Cider</Link>
              </li>
              <li>
                <Link to="#">Lemonade</Link>
              </li>
            </ul>
          </div>
          <div className="col" data-testid="combo-section">
            <h5>COMBO & FAVOURITES</h5>
            <ul>
              <li>
                <Link to="#">Chicken Salad + Lava Cake + Ice Cream</Link>
              </li>
              <li>
                <Link to="#">Beef Tacos + Cheesecake + Iced Tea</Link>
              </li>
              <li>
                <Link to="#">Veg Stir-Fry + Tiramisu(2) + Coffee</Link>
              </li>
              <li>
                <Link to="#">
                  Margherita Pizza + Fruit Tart + Sparkling Water
                </Link>
              </li>
              <li>
                <Link to="#">Pasta Primavera + Brownie + Milkshake</Link>
              </li>
              <li>
                <Link to="#">Pulled Pork Sandwich + Apple Pie + Cider</Link>
              </li>
              <li>
                <Link to="#">Shrimp Scampi + Panna Cotta + Wine</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright mt-3 pt-3 pb-1 d-flex">
          <p className="mb-0">
            Copyright 2024 ©. All rights reserved. Powered by android.
          </p>
          <ul className="list list-inline ml-auto mb-0">
            <li className="list-inline-item">
              <Link to="#">
                <FaFacebookF />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaTwitter />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaInstagramSquare />
              </Link>
            </li>
          </ul> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
