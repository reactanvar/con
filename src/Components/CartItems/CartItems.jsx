import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { MdDelete } from "react-icons/md";
import { Breadcrumbs, Button } from "@material-tailwind/react";
import PaymentModal from "../Payment/PaymentModal";
import { IoLogoApple } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";


const CartItems = () => {
  const [openModal, setOpenModal] = useState(false)
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartitems wrapper">

      {/* <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div> */}
      <hr />

      {all_product.map((e, idx) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={idx}>
              <div className="cartitems-format cartitems-format-main">
                <img src={"https://devlans-43e2a3ba66d7.herokuapp.com/" + e.image} alt="" className="carticon-product-icon" />
                <p className="product_name">{e.name}</p>
                <p className="product_price">{parseFloat(e.price)}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{parseFloat(e.price) * cartItems[e.id]}</p>

                <p className="remove_btn" onClick={() => {
                  removeFromCart(e.id);
                }}><MdDelete /></p>

              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Jami</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Oraliq narx </p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Bepul yetkazish</p>
              <p>Bepul</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Jami</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <Button onClick={() => setOpenModal(true)}>TO'LOV QILISH</Button>
        </div>
        {/* <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div> */}
        {/* <PaymentModal/> */}
        {openModal && <div className='payment_modal_backdrop'>

          <div className="payment_modal">
            <button className='apple_pay'>
              <p> <IoLogoApple /><span>Apple pay</span></p>
            </button>
            <label>
              <small>Ismi</small>
              <input type="text" />
            </label>
            <label>
              <small>Karta raqami</small>
              <input type="text" placeholder='1234 5678 1234 1234' />
            </label>
            <div className='pay_infos'>
              <label>
                <small>Muddati</small>
                <input type="text" placeholder='MM/YYYY' />
              </label>
              <label>
                <small>CVV/CVC</small>
                <input type="password" placeholder='12345678' value="" />
              </label>
            </div>
            <label>

            </label>
            <button className='pay'>Tolov qilish</button>
          </div>
          <button onClick={() => setOpenModal(false)} className='close_btn'><IoIosClose /></button>
        </div>}
      </div>
    </div>
  );
};

export default CartItems;
