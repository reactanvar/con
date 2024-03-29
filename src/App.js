import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
import ImageElm from "./Components/ImageElms/ImageElm";
import all_product from "./Components/Assets/all_product";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://containers-backend.onrender.com/api/product/all"
      );
      const { data } = await res.json();
      all_product.length = 0;

      data.forEach((e) => {
        all_product.push(e);
      });
    };

    fetchData();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <ImageElm />
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/storage-containers"
            element={<ShopCategory category="storage-conatiners" />}
          />
          <Route
            path="/shipping-containers"
            element={<ShopCategory category="shipping-containers" />}
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
