import React, { useContext } from "react";
import "./ProductDisplay.css";
import { Button } from "@material-tailwind/react";
import { ShopContext } from "../../Context/ShopContext";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay wrapper">
      <div className="productdisplay-left">
        {/* <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div> */}
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={"https://devlans-43e2a3ba66d7.herokuapp.com/" + product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <IoStar/>
          <IoStar/>
          <IoStar/>
          <IoStar/>
          <IoStarOutline/>
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product.oldPrice}
          </div>
          <div className="productdisplay-right-price-new">
            {product.price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.desc}
        </div>
        {/* <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div> */}
        <Button onClick={() => {
            addToCart(product.id);
          }}>Qo'shish</Button>
      </div>
    </div>
  );
};

export default ProductDisplay;
