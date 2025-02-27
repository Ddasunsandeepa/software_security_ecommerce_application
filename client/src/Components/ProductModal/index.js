import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { IoMdClose } from "react-icons/io";
import Rating from "@mui/material/Rating";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../QuantityDropDown";
import { FaHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import ProductZoom from "../ProductZoom";
import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../../App";
import { fetchDataFromApi } from "../../utils/Api";

const ProductModel = (props) => {
  const [catData, setCatData] = useState([]);
  const content = useContext(Mycontext);

  useEffect(() => {
    fetchDataFromApi("/api/category").then((res) => {
      if (res) {
        setCatData(res);
      }
    });
  }, []);
  const categoryName =
    props?.data?.category && catData.length > 0
      ? catData.find((cat) => cat._id === props?.data?.category)?.name
      : null;
  console.log(categoryName);
  return (
    <>
      <Dialog
        open={true}
        onClose={props.closeProductModel}
        disableScrollLock={true}
        className="productModel"
      >
        <Button className="close" onClick={props.closeProductModel}>
          <IoMdClose />
        </Button>
        <h4 className="mb-2 font-weight-bold">{props?.data?.name}</h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Category:</span>
            <span className="ml-2">
              <b>{categoryName}</b>
            </span>
          </div>
          <Rating
            name="read-only"
            value={Number(props?.data?.rating)}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>
        <hr />
        <div className="row mt-2 productDetaileModel">
          <div className="col-md-5">
            <ProductZoom images={props?.data?.images} />
          </div>
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg mr-3">${props?.data?.oldPrice}</span>
              <span className="netPrice lg text-danger">
                ${props?.data?.price}
              </span>
            </div>
            <span className="badge bg-success">
              {props?.data?.countInStock}
            </span>
            <p className="mt-3">{props?.data?.description}</p>
            <div className="d-flex align-items-center">
              <QuantityBox />

              <Button className="btn-blue btn-lg btn-big btn-round ml-1">
                Add to Cart
              </Button>
            </div>
            <div className="d-flex align-items-center mt-5 actions">
              <Button className="btn-round btn-sml" variant="outlined">
                <FaHeart /> &nbsp; ADD TO WISHLIST
              </Button>
              <Button className="btn-round btn-sml ml-3" variant="outlined">
                <MdCompareArrows /> &nbsp; COMPARE
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModel;
