import React from "react";
import "./RecentSection.css";
import profilePic2 from "../../assets/img/miladd.png";
import profilePic3 from "../../assets/img/erfan.png";
import profilePic4 from "../../assets/img/amin.png";

const RecentSection = (props) => {
  return (
    <>
      <div className="recent-updates">
        <h2>آخرین پیام ها</h2>
        <div className="updates">
          <div className="update">
            <div className="profile-photo">
              <img src={profilePic2} alt="profile photo" />
            </div>
            <div className="message">
              <p>
                <b>میلاد دستان زند</b> فایل ها رو فرستادم یه نگاه بنداز.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={profilePic3} alt="profile photo" />
            </div>
            <div className="message">
              <p>
                <b>عرفان رستمی</b> سه کارنامه مشکل داشت برات فرستادم
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={profilePic4} alt="profile photo" />
            </div>
            <div className="message">
              <p>
                <b>امین بنی عامریان</b> سه شنبه خوبه ولی هفته ی بعدی
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentSection;
