import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <h3 className="ui header">
          <i className="video icon"></i>StreamyApp
        </h3>
      </Link>
      <div className="right menu">
        <h4 style={{ marginTop: "16px" }}>Đăng nhập để tạo stream =&gt; &nbsp; </h4>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
