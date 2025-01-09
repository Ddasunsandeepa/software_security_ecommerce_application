import React, { PureComponent, useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Box from "../Dashboard/components/Box";
import { FaCartShopping } from "react-icons/fa6";
import LoadingBar from "react-top-loading-bar";
import { IoBagHandleSharp } from "react-icons/io5";
import { Button, LinearProgress, Menu, MenuItem, Rating } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaPencil } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import { Mycontext } from "../../App";
import { Link } from "react-router-dom";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { deleteData, fetchDataFromApi } from "../../utils/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
// Styled Components
const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "15px",
    background: "linear-gradient(to bottom right, #f7f9fc, #e0e6ed)",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    animation: "fadeIn 0.3s ease-in-out",
  },
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
  },
  "& .MuiBackdrop-root": {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: "#3f51b5",
  borderBottom: "1px solid #d1d9e6",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "10px",
    backgroundColor: "#ffffff",
  },
  "& .MuiInputLabel-root": {
    color: "#707070",
  },
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  justifyContent: "center",
  paddingBottom: theme.spacing(3),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: "1rem",
  padding: "10px 20px",
  borderRadius: "20px",
  backgroundColor: "#3279a8",
  color: "#000",
  transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
    backgroundColor: "#3279a8",
  },
}));
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const itemsPerPage = 5; // Number of items per page
const ProductList = () => {
  const [showBy, setshowBy] = React.useState("");
  const [catBy, setCatBy] = React.useState("");
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [productList, setproductList] = useState([]);
  const context = useContext(Mycontext);
  const loadingBarRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const [confirmDelete, setConfirmDelete] = useState(false); // Controls dialog visibility
  const [deleteProductId, setDeleteProductId] = useState(null); // Tracks ID of product to delete
  const [isLoading, setIsLoading] = useState(false); // Optional: for loading indicator during deletion

  // Open delete dialog
  const openDeleteDialog = (id) => {
    setDeleteProductId(id); // Set the ID of the product to delete
    setConfirmDelete(true); // Show confirmation dialog
  };

  // Close delete dialog
  const closeDeleteDialog = () => {
    setConfirmDelete(false); // Hide confirmation dialog
  };

  // Handle confirm delete
  const handleDeleteConfirm = () => {
    setIsLoading(true); // Show loading indicator during deletion
    deleteData(`/api/products/${deleteProductId}`) // Assuming deleteData handles your API deletion
      .then(() => {
        setproductList((prevData) =>
          prevData.filter((item) => item._id !== deleteProductId)
        ); // Remove deleted product
        toast.success("Product deleted successfully!");
        setIsLoading(false);
        setConfirmDelete(false); // Close confirmation dialog
      })
      .catch(() => {
        toast.error("Failed to delete the product.");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    context.setisHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
    setIsLoading(true);
    // Start loading
    loadingBarRef.current.continuousStart();

    fetchDataFromApi("/api/products")
      .then((res) => {
        setproductList(res);
        setIsLoading(false);
      })
      .finally(() => {
        // Complete loading
        loadingBarRef.current.complete();
      });
  }, []);

  console.log("Base URL:", context.baseUrl);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  const [filteredProductList, setFilteredProductList] = useState([]);

  useEffect(() => {
    let filtered = productList;

    // Filter by category
    if (catBy) {
      filtered = filtered.filter(
        (product) => product.category.name.toLowerCase() === catBy.toLowerCase()
      );
    }

    // Filter by ratings
    if (showBy) {
      const ratingFilter = parseFloat(showBy);
      filtered = filtered.filter((product) => product.rating >= ratingFilter);
    }

    setFilteredProductList(filtered);
  }, [catBy, showBy, productList]);

  const paginatedData = filteredProductList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="right-content ">
      <ToastContainer position="bottom-right" />
      <div className="row dashboardBoxWrapperRow">
        {isLoading && <LinearProgress />}
        <LoadingBar
          color="#3446eb"
          height={"4px"}
          ref={loadingBarRef}
          progress={progress}
        />
        <div className="boxxxx card shadow p-3">
          <div className="flex-container">
            <h5 className="topic">Food Item Upload</h5>
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb
                component="a"
                href="/"
                label="Dashboard"
                icon={<HomeIcon fontSize="small" />}
              />
              <StyledBreadcrumb label="Item List" />
            </Breadcrumbs>
            <Link to="/product/upload">
              <Button className="btn-blue catbtn">Add Item</Button>
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <Box
            color={["#1da256", "#48d483"]}
            icon={<FaUserCircle />}
            grow={true}
          />
        </div>
        <div className="col-md-4">
          <Box color={["#c012e2", "#eb64fe"]} icon={<FaCartShopping />} />
        </div>
        <div className="col-md-4">
          {" "}
          <Box color={["#2c78e5", "#60aff5"]} icon={<IoBagHandleSharp />} />
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best Selling Products</h3>

          {/* //there is an issue */}
          <div className="row cardFilters mt-3">
            <div className="col-md-3 ">
              <h4 style={{ fontSize: "17px" }}>SHOW BY</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={showBy}
                  onChange={(e) => setshowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="rating-select-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value="1">1+ Stars</MenuItem>
                  <MenuItem value="2">2+ Stars</MenuItem>
                  <MenuItem value="3">3+ Stars</MenuItem>
                  <MenuItem value="4">4+ Stars</MenuItem>
                  <MenuItem value="5">5 Stars</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3 ">
              <h4 style={{ fontSize: "17px" }}>CATEGORY BY</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={catBy}
                  onChange={(e) => setCatBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="category-select-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value="Pizza">Pizza</MenuItem>
                  <MenuItem value="Burger">Burger</MenuItem>
                  <MenuItem value="Appetizers">Appetizers</MenuItem>
                  <MenuItem value="Dessert">Dessert</MenuItem>
                  <MenuItem value="Drinks">Drinks</MenuItem>
                  <MenuItem value="Salad">Salad</MenuItem>
                  <MenuItem value="Pasta">Pasta</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered align-items-center v-align">
              <thead className="thead-dark">
                <tr>
                  <th>PID</th>
                  <th style={{ width: "200px" }}>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>TYPE</th>
                  <th>PRICE</th>
                  <th>RATING</th>
                  <th>IS-FEATURED</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((item, index) => (
                    <tr key={item._id}>
                      <td>#00{index + 1}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.images[0]}
                            alt={item.name}
                            style={{
                              width: "50px",
                              height: "50px",
                              marginRight: "10px",
                            }}
                          />
                          <div>
                            <h6>{item.name}</h6>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </td>
                      <td>{item.category.name}</td>
                      <td>{item.type}</td>
                      <td>
                        <div style={{ width: "70px" }}>
                          <del className="old">${item.oldPrice}</del>
                          <span className="new text-danger">${item.price}</span>
                        </div>
                      </td>
                      <td>
                        <Rating
                          name="read-only"
                          defaultValue={item.rating}
                          precision={0.5}
                          size="small"
                          readOnly
                        />
                      </td>
                      <td>{item.isFeatured ? "Yes" : "No"}</td>
                      <td>
                        <div className="actions d-flex align-items-center">
                          <Button color="secondary">
                            <FaPencil />
                          </Button>
                          <Link to="/product/details">
                            <Button color="success">
                              <FaEye />
                            </Button>
                          </Link>
                          <Button
                            color="error"
                            onClick={() => openDeleteDialog(item._id)} // Pass product ID to open delete dialog
                          >
                            <MdDelete />
                          </Button>
                          <Dialog
                            open={confirmDelete}
                            onClose={closeDeleteDialog}
                          >
                            <DialogTitle>Confirm Delete</DialogTitle>
                            <DialogContent>
                              Are you sure you want to delete this product?
                            </DialogContent>
                            <DialogActions>
                              <Button
                                onClick={closeDeleteDialog}
                                color="primary"
                              >
                                Cancel
                              </Button>
                              <Button
                                onClick={handleDeleteConfirm}
                                color="error"
                              >
                                Confirm
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="12" className="text-center">
                      No products available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="d-flex tableFooter">
              <Pagination
                count={Math.ceil(productList.length / itemsPerPage)} // Change `data.length` to `productList.length`
                page={currentPage}
                onChange={handleChangePage}
                color="primary"
                className="pagination"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;