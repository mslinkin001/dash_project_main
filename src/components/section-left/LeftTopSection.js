import React from "react";
import "./LeftTopSection.css";
import profilePic from "../../assets/img/defaultuser.png";

const LeftTopSection = (props) => {
  return (
    <>
      <div className="top">
        <button id="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="theme-toggler">
          <i className="bx bx-sun active"></i>
          <i className="bx bx-moon"></i>
        </div>
        <div className="profile">
          <div className="info">
            <p>
              <b>{props.userTitle}</b>
            </p>
            <small className="text-muted">{props.userPosition}</small>
          </div>
          <div className="profile-photo">
            <img src={profilePic} alt="profile photo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftTopSection;
