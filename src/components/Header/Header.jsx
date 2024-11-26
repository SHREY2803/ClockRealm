import React, { useState } from "react";
import "./Header.css";
import headerData from "./Header.json";
import logo from "../../assets/final_logo.png";

const Header = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobilemenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobilemenuOpen(!isMobileMenuOpen);

  const handleMenuClick = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const UpperMenuItems = (isMobile = false) =>
    headerData.menuItems.map((item, index) => (
      <li
        key={index}
        onMouseEnter={() => !isMobile && setHoverIndex(index)}
        onMouseLeave={() => !isMobile && setHoverIndex(null)}
      >
        <a
          href={item.link}
          onClick={(e) => {
            if (item.dropDown) {
              e.preventDefault();
              handleMenuClick(index);
            }
          }}
        >
          {item.title}
          {item.dropDown && <i className="fa-solid fa-angle-down"></i>}
        </a>
        {item.dropDown &&
          (hoverIndex === index || (isMobile && openMenu === index)) && (
            <ul className={isMobile ? "mobile-submenu" : "dropdown"}>
              {item.dropDown.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <a href={subItem.link}>{subItem.title}</a>
                </li>
              ))}
            </ul>
          )}
      </li>
    ));
  return (
    <div className="header">
      <div className="row-wrapper">
        <div className="search-form">
          <input
            type="search"
            name=""
            placeholder={headerData.search.placeholder}
          />
          <button type="submit">
            <i className={headerData.search.iconClass}></i>
          </button>
        </div>
        <div className="menu">
          <ul>
            {UpperMenuItems().slice(0, 3)}
            <li className="logo">
              <img src={logo} alt="" width="80px" />
            </li>
            {UpperMenuItems().slice(3)}
          </ul>
        </div>

        {/*Mobile device*/}
        <button 
        className="mobile-menu-button" 
        onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fa-solid fa-xmark':'fa-solid fa-bars'} ></i>

        </button>

        <nav className={`mobile-menu ${isMobileMenuOpen ? 'open': ''}`}
        >
          <ul>
            {UpperMenuItems(true)}
          </ul>
        </nav>

        {/*Icons */}
        <div className="icons">
          <ul>
            {headerData.icons.map((icon, index) => (
              <li key={index}>
                <a href={icon.link}>
                  <i className={icon.iconClass}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/*Mobile Icon */}
        <div className="mobile-logo">
          <img src={logo} alt="pic" height="100px" />
        </div>
      </div>
    </div>
  );
};

export default Header;
