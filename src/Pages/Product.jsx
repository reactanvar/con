import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
// import all_product from "../Components/Assets/all_product";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://containers-backend.onrender.com/api/product/all/" + productId
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const { data } = await res.json();

      setProduct(data);
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
