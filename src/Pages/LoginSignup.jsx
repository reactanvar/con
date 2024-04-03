import React from "react";
import "./CSS/LoginSignup.css";
import { Button } from "@material-tailwind/react";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Registratsiya</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Ism" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Parol " />
        </div>
        <Button>Keyingisi</Button>
        <p className="loginsignup-login">
          Allaqachon hisobingiz bormi? <span>Login</span>
        </p>
        {/* <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing , i agree to the terms of use & privacy policy. </p>
        </div> */}
      </div>
    </div>
  );
};

export default LoginSignup;
