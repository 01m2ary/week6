import React, { useState } from "react"; 
import "./header.css";
import Search01 from "./search-01.png";
import Notifications1 from "./10notification-02.png";
import img1 from "./img1.png";


const Header = () => {
  const [activeTab, setActiveTab] = useState("Home"); 
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const[showNotifications,setshowNotifications]=useState(false);

  const toggleNotifications =()=>{
    setshowNotifications(prevState=>!prevState);
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
            <img src={Notifications1} alt="Notifications1" className="Notifications1" />
            <div className="alert">

            </div>
          </div>

          {showNotifications && (
            <div className="Notifications-popup">
              <div className="container">
                <p>Notification</p>
                <p>You Have 3 <span>Notification</span> Today !</p>
                <p>Today</p>
                <div className="Notifications-today">
                  <div className="circle"></div>
                  <img src={img1} alt="img" />
                  <p><span className="name">Zainab Saad</span> comment on your project <span className="hours">2h</span> </p>
                </div>



              </div>
            </div>
          )}

        </div>




      </div>
    </div>
  );
};

export default Header;
