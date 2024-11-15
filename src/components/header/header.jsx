import React, { useState } from "react"; // استيراد useState
import "./header.css";
import Search01 from "./search-01.png";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home"); // حالة لتتبع العنصر النشط

  // دالة لتغيير العنصر النشط
  const handleTabClick = (tab) => {
    setActiveTab(tab); // تحديث العنصر النشط
  };

  return (
    <div className="header-profile">
      <div className="container">
        {/* القسم الأيسر */}
        <div className="left">
          <p className="Freelancer-platform">Freelancer platform</p>
        </div>

        {/* القسم الأوسط */}
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

        {/* القسم الأيمن */}
        <div className="right">
          <div className="search-container">
            <input
              type="text"
              placeholder="search"

            />
            <img src={Search01} alt="Search Icon" className="search-icon" />
          </div>

        </div>


      </div>
    </div>
  );
};

export default Header;
