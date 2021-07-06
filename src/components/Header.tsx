import React from "react";
import logo from "../assets/images/logo_pixel.png";
import "../assets/styles/Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <ul className="header">
        <Link to="/">
          <img src={logo} />
        </Link>
        <Link to="/">
          <li>Pixelixazados 2.0</li>
        </Link>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>Sobre</li>
        </Link>
      </ul>
    </div>
  );
};
