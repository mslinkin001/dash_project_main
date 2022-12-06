import React from "react";
import "./SaleAnalytic.css";
const SaleAnalytic = (props) => {
  return (
    <>
      <div className="sales-analytics">
        <h2>لیست کارهای آینده</h2>
        <div className="item online">
          <div className="icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="left">
            <div className="info">
              <h3>اردوی تفریحی</h3>
            </div>
            <h5 className="success">انجام شده</h5>
            <h3>12/03/1401</h3>
          </div>
        </div>
        <div className="item offline">
          <div className="icon">
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
          <div className="left">
            <div className="info">
              <h3>فرستادن نامه های اداره کل</h3>
            </div>
            <h5 className="danger">انجام نشده</h5>
            <h3>15/04/1401</h3>
          </div>
        </div>
        <div className="item customers">
          <div className="icon">
            <i className="fa-solid fa-person"></i>
          </div>
          <div className="left">
            <div className="info">
              <h3>اطلاعیه ی ثبت نام جدید</h3>
            </div>
            <h5 className="success">انجام شده</h5>
            <h3>10/03/1401</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleAnalytic;
