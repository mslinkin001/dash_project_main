import React from "react";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";

const menuItems = [
  [
    {
      position: "مدیر",
      menuFields: [
        ["سال تحصیلی", <i className="bx bxs-graduation"></i>],
        ["مدیریت معلم", <i className="bx bxs-user-badge"></i>],
        ["مدیریت دانش آموز", <i className="bx bxs-user-detail"></i>],
        ["مدیریت کلاس", <i className="bx bx-chalkboard"></i>],
        ["مدیریت درس ها", <i className="bx bx-book-open"></i>],
        ["برنامه ی امتحانی", <i className="bx bx-book"></i>],
        ["مدیریت کارنامه ها", <i className="bx bxs-graduation"></i>],
        ["گزارش کلی", <i className="bx bx-bar-chart-alt-2"></i>],
      ],
    },
  ],
  [
    {
      position: "معلم",
      menuFields: [
        ["مدیریت دانش آموز", <i className="bx bxs-user-detail"></i>],
        ["نمرات", <i className="bx bx-line-chart"></i>],
        ["برنامه ی امتحانی", <i className="bx bx-book"></i>],
        ["مدیریت کارنامه ها", <i className="bx bxs-graduation"></i>],
        ["گزارش کلی", <i className="bx bx-bar-chart-alt-2"></i>],
      ],
    },
  ],
  [
    {
      position: "دانش آموز",
      menuFields: [
        ["برنامه ی هفتگی", <i className="bx bxs-user-detail"></i>],
        ["نمرات", <i className="bx bx-line-chart"></i>],
        ["برنامه ی امتحانی", <i className="bx bx-book"></i>],
        [" کارنامه ها", <i className="bx bxs-graduation"></i>],
        ["پیغام ها", <i className="bx bx-bar-chart-alt-2"></i>],
      ],
    },
  ],
];
const Menu = (props) => {
  const loggedinPosition = useSelector(
    (state) => state.loginReducer.loggedinPosition
  );
  const loggedinMenuItems = menuItems.filter((menuItem) => {
    console.log(menuItem);
    return menuItem[0].position === loggedinPosition;
  });
  console.log(loggedinMenuItems, loggedinPosition);
  return (
    <>
      <MenuItems menuTexts={loggedinMenuItems[0]} />;
    </>
  );
};

export default Menu;
