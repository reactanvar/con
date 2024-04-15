import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
const Popular = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "http://194.26.232.140/api/product/all"
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
    <div className="popular wrapper">
      <div className="title">
        <h1 className="title_section">
          Barcha xildagi sotiladigan vagonlar
        </h1>
      </div>

      <div className="popular-item">
        {products.map((item, idx) => {
          return (
            <>
              {item.category == "konteyner" &&
                <Item
                  key={idx}
                  id={item._id}
                  name={item.name}
                  image={"http://194.26.232.140/" + item.image}
                  new_price={item.price}
                  old_price={item.oldprice}
                />
              }
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
