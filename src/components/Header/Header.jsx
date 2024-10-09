import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import Backimg from "../../assest/backimg.png";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/product",
    display: "Product",
  },
  {
    path: "/service",
    display: "Service",
  },
  {
    path: "/about",
    display: "About",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  useEffect(() => {
    document.getElementById("body").style.backgroundImage = `url('${Backimg}')`;
  });
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  return (
    <div className="main__navbar">
      <Container>
        <div className="navigation__wrapper flex-3 align-items-center justify-content-between">
          <span className="mobile__menu">
            <i class="ri-menu-line" onClick={toggleMenu}></i>
          </span>

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
        </div>
      </Container>
    </div>
  );
};

export default Header;
