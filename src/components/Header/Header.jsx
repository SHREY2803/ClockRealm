import React from 'react';
import "./Header.css";
import headerData from "./Header.json";

const Header = () => {
  return (
    <div className="header">
      <div className="row-wrapper">
        <div className="search-form">
          <input type="search" name="" placeholder={headerData.search.placeholder}/>
          <i class={headerData.search.iconClass}></i>
        </div>
        <div className="menu">
          <ul>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
