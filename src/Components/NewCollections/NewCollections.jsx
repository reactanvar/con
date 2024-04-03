import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import img from "../Assets/Container-PNG-Image-File.png";
import Item from "../Item/Item";
const NewCollections = () => {
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
    <div className="new-collections wrapper">

      <div className="title">

        <h1>
          Vagonlar uchun barcha turdagi ehtiyot qismlar
        </h1>
      </div>



      <div className="collections">
        {products.map((item, idx) => {
          return (
            <>
              {item.category == "ehtiyotQism" &&
                <Item
                  key={idx}
                  id={item.id}
                  name={item.name}
                  image={"https://containers-backend.onrender.com/" + item.image}
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

export default NewCollections;
