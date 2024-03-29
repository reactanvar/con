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
    <h1>Ijaraga konteynerlar Biz konteyner savdogarmiz</h1>
    <p>
    O'lchamlar Tashqi o'lcham Ichki o'lcham Uzunligi 6036 mm 5898 mm Kengligi 2438 mm 2362 mm Balandligi 2591 mm 2393 mm Tare Maks. foydali yuk Maks. yalpi 1970 kg 28510 kg 30480 kg Konteynerlarni sotib olish yoki ijaraga olish siz uchun eng yaxshi variant ekanligini bilish uchun turli omillarni hisobga olishingiz kerak. CARU konteynerlarida biz ikkala variantni ham taklif qilamiz. Quyida konteynerlarni ijaraga olish haqida bilishingiz kerak bo'lgan hamma narsani o'qishingiz mumkin va qaysi birini tanlash eng yaxshisidir
    </p>
    <Button className="view_btn"><NavLink to='/storage-containers'>Yangilarini Ko'rish</NavLink></Button>
  </div>
  <div className="hero-right">
    <img src={hero_img} alt="" />
  </div>
</div>
{/* <Offers/> */}
{/* <NewsLetter/> */}
    </main>
  );
};

export default Hero;
