import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "LogOut" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
