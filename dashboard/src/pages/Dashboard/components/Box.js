import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import Button from "@mui/material/Button";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoIosTimer } from "react-icons/io";

const options = ["Last Day", "Last Week", "Last Month", "Last Year"]; // Add your menu options here

const Box = (props) => {
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const colors = props.color || ["#000", "#ccc"]; // Default colors if no props.color is passed

  return (
    <div
      className="dashboardBox"
      style={{
        backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
        cursor: "pointer",
      }}
    >
      {/* Trending icon */}
      {props.grow === true ? (
        <span className="chart">
          <TrendingUpIcon />
        </span>
      ) : (
        <span className="chart">
          <TrendingDownIcon />
        </span>
      )}

      {/* Main Content */}
      <div
        className="content-container pt-0"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="col1">
          <h4 className="text-white mb-0">Total Users</h4>
          <span className="text-white">300</span>
        </div>
        <div className="icon-container">
          {props.icon ? <span className="icon">{props.icon}</span> : ""}
        </div>
      </div>

      {/* Bottom Elements */}
      <div
        className="d-flex align-items-center w-100 bottomEle"
        style={{
          marginTop: "auto", // Pushes the element to the bottom
          paddingBottom: "1px", // Adds space at the bottom of the box
        }}
      >
        <h6 className="text-white mb-0 mt-0">Last Month</h6>
        <Button
          className="ml-auto toggleicon"
          onClick={handleClick}
          style={{ minWidth: "auto", color: "#fff" }}
        >
          <HiDotsVertical />
        </Button>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              onClick={handleClose}
              style={{ fontSize: "16px" }}
            >
              <IoIosTimer style={{ marginRight: "10px" }} /> {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default Box;
