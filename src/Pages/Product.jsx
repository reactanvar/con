import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        
      const res = await fetch(
        "http://194.26.232.140/api/product/all/" + productId
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const { data } = await res.json();

      setProduct(data);
    };

    fetchData();
  }, []);
  return (
    <div>

      <ProductDisplay product={product} />
      <RelatedProducts />

    </div>
  );
};

export default Product;
