import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { IoMdClose } from "react-icons/io";
import Rating from "@mui/material/Rating";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../QuantityDropDown";
import { FaHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import ProductZoom from "../ProductZoom";

const ProductModel = (props) => {
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
        <h4 className="mb-2 font-weight-bold">
          Delicious BBQ Chicken Pizza. Very tasty meals
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Category:</span>
            <span className="ml-2">
              <b>Pizza's</b>
            </span>
          </div>
          <Rating
            name="read-only"
            value={5}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>
        <hr />
        <div className="row mt-2 productDetaileModel">
          <div className="col-md-5">
            <ProductZoom />
          </div>
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg mr-3">$30.00</span>
              <span className="netPrice lg text-danger">$16.00</span>
            </div>
            <span className="badge bg-success">IN STOCK</span>
            <p className="mt-3">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>
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
