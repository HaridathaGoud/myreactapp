import React from "react";
import "../styles.css";
import BUSINESS_LOGO from "../assets/images/artha-dark-logo.svg";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/images/profile-img.png";


const Menu = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate('/');
  };
  const navigateToProfile = () => {
    navigate('/profile');
  };

  return (
    <header className="container header mt">
      <div className="brand cursor-pointer" onClick={navigateToDashboard}>
        <img src={BUSINESS_LOGO} alt="Brand" className="brand-logo" />
        <div>
          <h1 className="brand-title">ArthaPay Assets</h1>
          <p className="brand-sub">Client asset preview & CDN integration</p>
        </div>
      </div>
      
      <div className="flex items-center gap-6 ">
          <img
            src={profileImg || "https://i.pravatar.cc/50?img=12"}
            alt="profile"
            className="cursor-pointer profile-avatar-menu"
            onClick={navigateToProfile}
          />
        </div>
    </header>
  );
};

export default Menu;
