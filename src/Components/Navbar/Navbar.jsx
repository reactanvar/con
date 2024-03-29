import React, { useContext } from "react";
import { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [ShowNavbar, setShowNavbar] = useState(false)
  return (
    <div className="navbar wrapper">
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="nav-logo">
          <img src="https://www.99bikes.com.au/media/wysiwyg/homepage/557x279-Logo-Cube.png" alt="nav-logo" />
        </div>
      </Link>

      <ul className="nav-menu">

        <li> <Link to="/">Bosh Sahifa</Link></li>
        <li> <Link to="/storage-containers"> Saqlash konteynerlari </Link></li>
        <li><Link to="/shipping-containers">  Yuk tashish konteynerlari </Link></li>

        <div className="nav-login-cart">
          <Link to="/login"> Login</Link>
          <Link to="/cart">  <p className="icon_cart"><IoCart /></p> </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>

          <button onClick={()=> {setShowNavbar(true)}} className="burger_menu"><GiHamburgerMenu /></button>
        </div>
      </ul>

      {ShowNavbar &&
        <div className="responsive_menu wrapper">
            <button onClick={()=> {setShowNavbar(false)}} className="burger_menu" id="close_burger_menu"><IoCloseSharp /></button>
          <ul>
            <li><Link onClick={()=> {setShowNavbar(false)}} to="/">Bosh Sahifa</Link></li>
            <li><Link onClick={()=> {setShowNavbar(false)}} to="/storage-containers"> Saqlovchi Konteynerlar</Link></li>
            <li><Link onClick={()=> {setShowNavbar(false)}} to="/shipping-containers">Tashuvchi Konteynerlar</Link></li>
          </ul>

        </div>
      }

    </div>
  );
};

export default Navbar;
