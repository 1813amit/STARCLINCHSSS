import React, { useEffect } from "react";
import "../Style/Header.css";
import logo from "../Assist/logo.png";
import { gsap } from "gsap";

function Header() {

  useEffect(()=>{
    const tl = gsap.timeline()

    tl.from(".medium",{
      y:-500,
      ease:"power4.out",
      delay:1,
      duration:1.8,
      stagger:{
        amount:0.4,
      }
    })
  })
  useEffect(()=>{
    const tl = gsap.timeline()

    tl.from(".user_name",{
      y:-500,
      ease:"power4.out",
      delay:1,
      duration:1.8,
      stagger:{
        amount:0.4,
      }
    })
  })
 
  return (
    <div className="Header">
      <div className="Header_child">
        <div className="logo_div">
          <img src={logo} alt="" /> <p className="medium" >StarClinch</p>
        </div>
        <div className="user_name"><p className="small" >Hello, Manish</p></div>
      </div>
    </div>
  );
}

export default Header;