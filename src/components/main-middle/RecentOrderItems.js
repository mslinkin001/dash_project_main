import React from "react";
import "./RecentOrderItems.css";
const RecentOrderItems = () => {
  return (
    <>
      <div className="recent-orders">
        <h2>لیست معلمین</h2>
        <table>
          <thead>
            <tr>
              <th>نام و نام خانوادگی</th>
              <th>شماره ی ملی</th>
              <th>شماره ی کلاس</th>
              <th>شماره ی ترم</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>اکرم یوسفی</td>
              <td>3267902601</td>
              <td>A1</td>
              <td className="warning">14011</td>
              <td className="primary">
                {" "}
                <i className="bx bxs-edit edit"></i>
                <i className="bx bxs-message-square-x delete"></i>
              </td>
            </tr>
            <tr>
              <td>سعید اکبرنژاد</td>
              <td>0075236230</td>
              <td>A2</td>
              <td className="warning">14011</td>
              <td className="primary">
                <i className="bx bxs-edit edit"></i>
                <i className="bx bxs-message-square-x delete"></i>
              </td>
            </tr>
            <tr>
              <td>رضا داوودی مقدم</td>
              <td>0012569875</td>
              <td>B1</td>
              <td className="warning">14011</td>
              <td className="primary">
                {" "}
                <i className="bx bxs-edit edit"></i>
                <i className="bx bxs-message-square-x delete"></i>
              </td>
            </tr>
            <tr>
              <td>سارا عسگری</td>
              <td>3258345060</td>
              <td>B2</td>
              <td className="warning">14011</td>
              <td className="primary">
                <i className="bx bxs-edit edit"></i>
                <i className="bx bxs-message-square-x delete"></i>
              </td>
            </tr>
            <tr>
              <td>محسن نعیمی</td>
              <td>3201562530</td>
              <td>B3</td>
              <td className="warning">14011</td>
              <td className="primary">
                {" "}
                <i className="bx bxs-edit edit"></i>
                <i className="bx bxs-message-square-x delete"></i>
              </td>
            </tr>
          </tbody>
        </table>
        <a href="#">Show All</a>
      </div>
    </>
  );
};

export default RecentOrderItems;
