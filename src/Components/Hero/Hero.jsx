import React from "react";
import "./Hero.css";
import hero_img from '../Assets/Container-PNG-Image-File.png'
// Imported Icons
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";

import { NavLink } from "react-router-dom";
import Offers from "../Offers/Offers";
import NewsLetter from "../NewsLetter/NewsLetter";
const Hero = () => {
  return (
    <main>
      <div className="hero wrapper">

        <div className="hero-left">
          <h1>Barcha turdagi vagon ehtiyot qismlari</h1>
          <p>

            Biz faqat tarixga ega bo'lgan temir yo'l ehtiyot qismlarini sotamiz va har qanday yuk vagonlarini ta'mirlash uchun barcha kerakli ehtiyot qismlarni tezda depongizga yetkazib beramiz! Temir yo'l vagonlari uchun ham yangi, ham foydalanilgan ehtiyot qismlarni taqdim eta olamiz, bizning qismlarimiz ikki darajali sinovdan o'tadi, bu ularning sifatini kafolatlaydi!
          </p>
          <Button className="view_btn"><NavLink to='/ehtiyot-qismlar'>Yangilarini Ko'rish</NavLink></Button>
        </div>
        <div className="hero-right">
          {/* <img src={hero_img} alt="" /> */}
          <img src="https://transenergytrade.ru/img/services/5edd455928cf7.png" alt="" />
        </div>
      </div>
      {/* <Offers/> */}
      {/* <NewsLetter/> */}
    </main>
  );
};

export default Hero;
