import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import Logo from "../../assets/logo.png";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/service", display: "Service" },
  { path: "/ourgoals", display: "Our Goals" },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      <div className="main__navbar">
        <Container className="">
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <img src={Logo} alt="Logo" className="logo" />

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
              <button className="login-btn">Login</button>
              <button className="signup-btn">Sign in</button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
