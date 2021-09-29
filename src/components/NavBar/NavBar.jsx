import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

import { SidebarData } from "./sideBarData";

import "./navStyles.css";

import * as Fa from "react-icons/fa";
import * as Ai from "react-icons/ai";
import { IconContext } from "react-icons";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const displaySidebar = () => setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className="navbar">
        <span className="menu-bars">
          <Fa.FaBars onClick={displaySidebar} />
        </span>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={displaySidebar}>
          <li className="navbar-toggle">
            <span  className="menu-bars">
              <Ai.AiOutlineClose />
            </span>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li className="nav-text" style={{bottom:"2px",position:"absolute",color:"#fff"}}>
            Design by Naga Sai
            <span className="menu-bars"><AiIcons.AiFillFire /></span>
            </li>
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
