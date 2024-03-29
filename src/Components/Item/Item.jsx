import React from "react";
import "./Item.css";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div
    className="item">
      <Link to={`/product/${props.id}`}>
        <img
          style={{ width: "180px", height: "150px", objectFit: "contain", marginInline: "auto" }}
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt="image"
        />
      </Link>
      <span className="type_product">konteyner</span>

      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price}</div>
        <div className="item-price-old">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
