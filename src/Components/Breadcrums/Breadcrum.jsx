import React from "react";
import "./Breadcrum.css";
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum" >
      ASOSIY / {console.log(product)}
    </div>
  );
};

export default Breadcrum;
