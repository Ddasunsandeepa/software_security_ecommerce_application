import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { LuDessert } from "react-icons/lu";
import { RiDrinksFill } from "react-icons/ri";
import { GiHotMeal } from "react-icons/gi";
import { FaBloggerB } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
  const [isopenSidebarVal, setisopenSidebar] = useState(false);

  return (
    <nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <div className="cartWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={() => setisopenSidebar(!isopenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span class="text">ALL CATEGORIES</span>
                <span className="icon2 ml-4">
                  <FaAngleDown />
                </span>
              </Button>
              <div
                className={`sidebarNav ${
                  isopenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>
                        Pizzas <FaAngleRight className="ml-auto" />
                      </Button>
                    </Link>
                    <div className="submenu1">
                      <Link to="/">
                        <Button>Pepperoni Pizza</Button>
                      </Link>
                      <Link to="/">
                        <Button>Margherita Pizza</Button>
                      </Link>
                      <Link to="/">
                        <Button>BBQ Chicken Pizza</Button>
                      </Link>
                      <Link to="/">
                        <Button>Hawaiian Pizza</Button>
                      </Link>
                      <Link to="/veggie-pizza">
                        <Button>Veggie Pizza</Button>
                      </Link>
                      <Link to="/meat-lovers-pizza">
                        <Button>Meat Lovers Pizza</Button>
                      </Link>
                      <Link to="/buffalo-chicken-pizza">
                        <Button>Buffalo Chicken Pizza</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>
                        Burgers <FaAngleRight className="ml-auto" />
                      </Button>
                    </Link>
                    <div className="submenu1">
                      <Link to="/cheeseburger">
                        <Button>Cheeseburger</Button>
                      </Link>
                      <Link to="/bacon-burger">
                        <Button>Bacon Burger</Button>
                      </Link>
                      <Link to="/veggie-burger">
                        <Button>Veggie Burger</Button>
                      </Link>
                      <Link to="/chicken-burger">
                        <Button>Chicken Burger</Button>
                      </Link>
                      <Link to="/double-burger">
                        <Button>Double Burger</Button>
                      </Link>
                      <Link to="/mushroom-swiss-burger">
                        <Button>Mushroom Swiss Burger</Button>
                      </Link>
                      <Link to="/spicy-burger">
                        <Button>Spicy Burger</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Salads</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Pasta</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Appetizers</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Desserts</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Drinks</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline ">
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>
                    <FaHome /> &nbsp; Home
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <IoFastFood /> &nbsp;Meals
                  </Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/">
                    <Button>Grilled Chicken Salad</Button>
                  </Link>
                  <Link to="/">
                    <Button>Beef Tacos</Button>
                  </Link>
                  <Link to="/">
                    <Button>Vegetable Stir-Fry</Button>
                  </Link>
                  <Link to="/">
                    <Button>Margherita Pizza</Button>
                  </Link>
                  <Link to="/">
                    <Button>Pasta Primavera</Button>
                  </Link>
                  <Link to="/">
                    <Button>BBQ Pulled Pork Sandwich</Button>
                  </Link>
                  <Link to="/">
                    <Button>Shrimp Scampi</Button>
                  </Link>
                  <Link to="/">
                    <Button>Lentil Soup</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <LuDessert />
                    &nbsp; Dessets
                  </Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/">
                    <Button>Chocolate Lava Cake</Button>
                  </Link>
                  <Link to="/">
                    <Button>Cheesecake</Button>
                  </Link>
                  <Link to="/">
                    <Button>Tiramisu</Button>
                  </Link>
                  <Link to="/">
                    <Button>Fruit Tart</Button>
                  </Link>
                  <Link to="/">
                    <Button>Brownie Sundae</Button>
                  </Link>
                  <Link to="/">
                    <Button>Apple Pie</Button>
                  </Link>
                  <Link to="/">
                    <Button>Panna Cotta</Button>
                  </Link>
                  <Link to="/">
                    <Button>Lemon Meringue Pie</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <RiDrinksFill />
                    &nbsp;Drinks
                  </Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/">
                    <Button>Vanilla Ice Cream</Button>
                  </Link>
                  <Link to="/">
                    <Button>Espresso</Button>
                  </Link>
                  <Link to="/">
                    <Button>Berry Compote</Button>
                  </Link>
                  <Link to="/">
                    <Button>Iced Tea</Button>
                  </Link>
                  <Link to="/">
                    <Button>Cappuccino</Button>
                  </Link>
                  <Link to="/">
                    <Button>Sparkling Water</Button>
                  </Link>
                  <Link to="/">
                    <Button>Milkshake</Button>
                  </Link>
                  <Link to="/">
                    <Button>Hot Cider</Button>
                  </Link>
                  <Link to="/">
                    <Button>Moscato Wine</Button>
                  </Link>
                  <Link to="/">
                    <Button>Lemonade</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <GiHotMeal />
                    &nbsp;Combo
                  </Button>
                </Link>
                <div className="subMenu ">
                  <Link to="/">
                    <Button>Chicken Salad + Lava Cake + Ice Cream</Button>
                  </Link>
                  <Link to="/">
                    <Button>Beef Tacos + Cheesecake + Iced Tea</Button>
                  </Link>
                  <Link to="/">
                    <Button>Veg Stir-Fry + Tiramisu + Coffee</Button>
                  </Link>
                  <Link to="/">
                    <Button>
                      Margherita Pizza + Fruit Tart + Sparkling Water
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button>Pasta Primavera + Brownie + Milkshake</Button>
                  </Link>
                  <Link to="/">
                    <Button>Pulled Pork Sandwich + Apple Pie + Cider</Button>
                  </Link>
                  <Link to="/">
                    <Button>Shrimp Scampi + Panna Cotta + Wine</Button>
                  </Link>
                  <Link to="/">
                    <Button>Lentil Soup + Lemon Pie + Lemonade</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaBloggerB />
                    &nbsp;Blog
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <RiContactsFill />
                    &nbsp;Contact
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
