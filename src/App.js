// App css
import "./App.css";
// components and resources
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
import all_product from "./Components/Assets/all_product";


// App function
function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "http://194.26.232.140/api/product/all"
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/barcha-konteynerlar"
            element={<ShopCategory category="konteyner" />}
          />
          <Route
            path="/ehtiyot-qismlar"
            element={<ShopCategory category="ehtiyotQism" />}
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/login" element={<LoginSignup />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
