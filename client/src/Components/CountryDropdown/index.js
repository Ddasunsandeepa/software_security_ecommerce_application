import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import { Mycontext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [cityList, setCityList] = useState([]);

  const context = useContext(Mycontext);

  const selectCity = (index, city) => {
    setSelectedTab(index);
    setisOpenModal(false);
    context.setSelectCity(city);
  };

  useEffect(() => {
    setCityList(context.countrList); // Set cityList when countrList updates
  }, [context.countrList]);

  const filterList = (e) => {
    const keyWord = e.target.value.toLowerCase();

    if (keyWord) {
      // Filter cities based on the keyword
      const list = context.countrList.filter((item) => {
        return item.toLowerCase().includes(keyWord);
      });
      setCityList(list);
    } else {
      setCityList(context.countrList);
    }
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location </span>
          <span className="name">
            {context.selectCity !== ""
              ? context.selectCity.length > 15
                ? context.selectCity?.substr(0, 15)+"..."
                : context.selectCity
              : "Select City"}
          </span>
        </div>
        <span className="ml-auto ">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        className="locationModel"
        TransitionComponent={Transition}
      >
        <h4 className="mb-0">Choose Your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close" onClick={() => setisOpenModal(false)}>
          <IoMdClose />
        </Button>

        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="search your area"
            onChange={filterList}
          />
          <Button>
            <IoIosSearch />
          </Button>
        </div>

        <ul className="countryList mt-3">
          {cityList.length > 0 ? (
            cityList.map((city, index) => (
              <li key={index}>
                <Button
                  onClick={() => selectCity(index, city)}
                  className={`${selectedTab === index ? "active" : ""}`}
                >
                  {city}
                </Button>
              </li>
            ))
          ) : (
            <li>No cities available</li>
          )}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
