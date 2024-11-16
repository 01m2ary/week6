import React, { useState } from "react"; 
import "./header.css";
import Search01 from "./search-01.png";
import Notifications1 from "./10notification-02.png";
import Notifications2 from "./notification2.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import img7 from "./img7.png";


const Header = () => {
  const [activeTab, setActiveTab] = useState("Home"); 
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  const[showNotifications,setshowNotifications]=useState(false);
  const[showImagNotification,setshowImagNotification]=useState(Notifications1);
  const [showAlert,setShowAlert]=useState(true);
 
  const toggleNotifications = () => {
    setshowNotifications(prevState => !prevState);
    setshowImagNotification(prevImage =>
      prevImage === Notifications1 ? Notifications2 : Notifications1
    );

    if (!showNotifications) {
      setShowAlert(false);
    }

  };
  

  return (
    <div className="header-profile">
      <div className="container">

        <div className="left">
          <p className="Freelancer-platform">Freelancer platform</p>
        </div>


        <div className="center">
          <p
            className={`Home ${activeTab === "Home" ? "active" : ""}`}
            onClick={() => handleTabClick("Home")}
          >
            Home
          </p>
          <p
            className={`Dashboard ${activeTab === "Dashboard" ? "active" : ""}`}
            onClick={() => handleTabClick("Dashboard")}
          >
            Dashboard
          </p>
          <p
            className={`Settings ${activeTab === "Settings" ? "active" : ""}`}
            onClick={() => handleTabClick("Settings")}
          >
            Settings
          </p>
        </div>

        <div className="right">
          <div className="search-container">
            <input
              type="text"
              placeholder="search"

            />
            <img src={Search01} alt="Search Icon" className="search-icon" />
          </div>
          <div className="Notifications" onClick={toggleNotifications}>
            <img src={showImagNotification} alt="Notifications1" className="Notifications1" />
            {showAlert&&(
              <div className="alert"> </div>
            ) }


            

            {showNotifications && (
              <div className="Notifications-popup">
                <div className="container01">
                  <p class="title-Notification">Notification</p>
                  <p class="notification-number">You Have 3 <span>Notification</span> Today !</p>
                  <p class="Today">Today</p>
                  <div className="Notifications-today">
                    <div className="circle"></div>
                    <img src={img1} alt="img" />
                    <p className="notification-comment">
                      <span className="name">Zainab Saad</span> comment on your project <span className="hours">2h</span>
                    </p>
                  </div>
                  <div className="line-Notification"></div>

                  <div className="Notifications-today">

                    <div className="circle"></div>
                    <img src={img2} alt="img" />
                    <p className="notification-comment">
                      <span className="name">Ali Saad</span> Apply your project  <span className="hours">2h</span>
                    </p>
                  </div>
                  <div className="line-Notification"></div>

                  <div className="Notifications-today">
                    <div className="circle"></div>
                    <img src={img3} alt="img" />
                    <p className="notification-comment">
                      <span className="name">Karar Emad</span> Liked your project<span className="hours">2h</span>
                    </p>
                  </div>
                  <div className="line-Notification"></div>

                  <p class="Today">This Week</p>
                  <div className="Notifications-today">
                    <img src={img4} alt="img" />
                    <p className="notification-comment">
                      <span className="name">Zena saad</span> comment on  your project<span className="hours">1d</span>
                    </p>
                  </div>

                  <div className="Notifications-today">
                    <img src={img5} alt="img" />
                    <p className="notification-comment">
                      <span className="name">ghoufran saad</span> comment on your project<span className="hours">2d</span>
                    </p>
                  </div>

                  <div className="Notifications-today">
                    <img src={img6} alt="img" />
                    <p className="notification-comment">
                      <span className="name">Huda salih</span> comment on your project<span className="hours">3d</span>
                    </p>
                  </div>

                  <div className="Notifications-today">
                    <img src={img7} alt="img" />
                    <p className="notification-comment">
                      <span className="name">Mohammed Saad</span> comment on your project <span className="hours">1w</span>
                    </p>
                  </div>
                  




                </div>
              </div>
            )}
          </div>




        </div>




      </div>
    </div>
  );
};

export default Header;
