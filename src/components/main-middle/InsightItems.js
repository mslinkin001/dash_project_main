import React from "react";
import "./InsightItems.css";
const InsightItems = () => {
  return (
    <>
      <div className="insights">
        <div className="sales">
          <div className="middle">
            <div className="left">
              <h3>تعداد کل معمان</h3>
              <h1>12 نفر</h1>
            </div>
            <div className="progress">
              <i className="bx bx-chalkboard"></i>
            </div>
          </div>
          <small className="text-muted">در ترم جاری</small>
        </div>
        {/* <!--End of Sales--> */}
        <div className="sales">
          <div className="middle">
            <div className="left">
              <h3>تعداد کل دانش آموزان</h3>
              <h1>325 نفر</h1>
            </div>
            <div className="progress">
              <i className="bx bx-book-reader"></i>
            </div>
          </div>
          <small className="text-muted">در ترم جاری</small>
        </div>
        {/* <!--End of Expenses--> */}
        <div className="sales">
          <div className="middle">
            <div className="left">
              <h3> میانگین قبولی در ترم گذشته </h3>
              <h1>87 درصد</h1>
            </div>
            <div className="progress">
              <i className="bx bxs-report"></i>
            </div>
          </div>
          <small className="text-muted">در ترم 14002</small>
        </div>
        {/* //End of Income */}
      </div>
    </>
  );
};

export default InsightItems;
