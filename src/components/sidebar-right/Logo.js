import React from "react";
import CloseBtn from "./CloseBtn";
import "./Logo.css";
import LogoPic from "../../assets/img/saeilogo.png";
const Logo = () => {
  return (
    <>
      <div className="top">
        <div className="logo">
          <img src={LogoPic} alt="logo" />
          <h2>
            دبیرستان<span className="danger"> ساعی </span>
          </h2>
        </div>
        <CloseBtn />
      </div>
    </>
  );
};

export default Logo;
