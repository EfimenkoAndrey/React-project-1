import React from "react";
import reactLogo from "../../images/jpg/logo192.png";
import './navbar.css';


export default function Navbar() {
  return (
    <nav>
      <img
        src= { reactLogo }
        alt="React Logo"
        className="nav--icon"
      />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  )
}