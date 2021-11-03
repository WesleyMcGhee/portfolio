import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="logo-con">
        <Link className="nav-link" to="/">
          <h1 className="logo">WM</h1>
        </Link>
      </div>
      <div className="link-con">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
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
