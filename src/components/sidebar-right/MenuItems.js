import React from "react";
import "./MenuItems.css";
import "boxicons";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/index";

const MenuItems = (props) => {
  const dispatch = useDispatch(loginActions);
  // console.log(props.menuTexts);
  const logoutHandler = () => {
    dispatch(loginActions.logout());
  };

  return (
    <>
      <div className="sidebar">
        {props.menuTexts[0].menuFields.map((menufield, index) => {
          return (
            <a href="#" className={index == 1 ? "active" : ""} key={index}>
              {menufield[1]}
              <h3>{menufield[0]}</h3>
            </a>
          );
        })}
        <a href="#" className="logout" onClick={logoutHandler}>
          <i className="bx bx-log-out"></i>
          <h3>خروج</h3>
        </a>
      </div>
    </>
  );
};

export default MenuItems;
