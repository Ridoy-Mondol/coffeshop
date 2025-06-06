import React from "react";
import { NavLink } from "react-router-dom";
import img from "../components/images/logo.png";
import { useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState (false);
  const [hideText,setHideText] = useState(false);
  const showNav = () => {
    setShow (true);
    setHideText(false);
  }
  const hideNav = () => {
    setShow (false);
    setTimeout(() => {
      setHideText(true);
    }, 400);
  }
    return (
        <>
            <nav className={show ? "expand-div navbar":"mobile-nav nav-div navbar navbar-expand-lg"}>
  <div className="container-fluid position-relative">
    <NavLink className="navbar-brand nav-logo" to="/coffeshop/"><img src ={img} alt="logo" className="img-fluid logo"/></NavLink>
    <span className={ show ? "hide-mobile" : "toggle-navbar bars overflow-y-hidden"} onClick={showNav}><i className="fa-solid fa-bars"></i></span>
         <span className={ show ? "toggle-navbar overflow-y-hidden" : "hide-mobile"}
         onClick={hideNav}><i className="fa-solid fa-xmark"></i></span>
      <div
      className={show ? "navbar-nav" :`navbar-nav ms-auto mb-lg-0 me-lg-3  ${hideText ? 'hide-mobile' : ''}`}>
        <li className="nav-item">
          <NavLink  exact activeClassName="active-page" className="link" to="/coffeshop/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active-page" className="link" to="/coffeshop/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active-page" className="link" to="/coffeshop/gallery">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active-page" className="link" to="/coffeshop/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active-page" className="link" to="/coffeshop/testimonial">Testimonial</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active-page" className="link" to="/coffeshop/contact">Contact Us</NavLink>
        </li>
          </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;