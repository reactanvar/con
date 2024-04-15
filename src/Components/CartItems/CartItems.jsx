import React, { useContext, useEffect } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { MdDelete } from "react-icons/md";
import { Breadcrumbs, Button } from "@material-tailwind/react";
import { IoLogoApple } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const CartItems = () => {

  const [openModal, setOpenModal] = useState(false)
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  useEffect(() => {
    let sum = 0;

    for(let i = 0; i < cartItems.length; i++) {
        sum += parseInt(cartItems[i].price);
    }
    setPrice(sum)
  }, [])

  const [price, setPrice] = useState(0)

  return (
    <div className="cartitems wrapper">
      {cartItems.map((e, idx) => {
        if (true) {
          return (
            <div key={idx}>
              <div className="cartitems-format cartitems-format-main">
                <img src={"http://194.26.232.140/" + e.image} alt="" className="carticon-product-icon" />
                <p className="product_name">{e.name}</p>
                <p className="product_price">{parseFloat(e.price)}$</p>
                <p className="old_price">{parseFloat(e.oldPrice)}$</p>

                <p className="remove_btn" onClick={() => {
                  removeFromCart(e);
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
              <p>${price}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Bepul yetkazish</p>
              <p>Bepul</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Jami</h3>
              <h3>${price}</h3>
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
