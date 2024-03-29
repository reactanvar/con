import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import { NavLink } from "react-router-dom";
import img from "../Components/Assets/Container-PNG-Image-File.png";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://containers-backend.onrender.com/api/product/all"
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const { data } = await res.json();

      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="shop-category wrapper">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p className="bread_crumb">
          <NavLink to="/">ASOSIY</NavLink> / {props.category}
        </p>
      </div>
      <div className="shopcategory-products ">
        {products.map((item, idx) => {
          return (
            <>
            <Item
              key={idx}
              id={item.id}
              name={item.name}
              image={"https://containers-backend.onrender.com/" + item.image}
              new_price={item.price}
              old_price={item.oldPrice}
            />
            
            </>
          );  
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
