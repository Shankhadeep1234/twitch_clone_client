import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <h2>
          <i className="podcast icon red" />
          Streamy
        </h2>
      </Link>
      <div className="right menu">
        <Link to="/" className="item" style={{ marginBottom: "5px" }}>
          <b>All Streams</b>
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
