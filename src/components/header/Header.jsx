import React from "react";
import { Link } from "react-router-dom";
import logo from "./logoWM.PNG";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="logo-con">
        <img src={logo} alt="logo" className="logo"></img>
      </div>
      <div className="link-con">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Technologies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Contact me</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
