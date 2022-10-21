import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { FaImage } from "react-icons/fa";

import { BiListCheck } from "react-icons/bi";

import { MdFileCopy } from "react-icons/md";
import { HiChartPie } from "react-icons/hi";

import { GiHealthNormal } from "react-icons/gi";

import { RiInboxArchiveFill } from "react-icons/ri";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { BiTable } from "@react-icons/all-files/bi/BiTable";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [showNav, setShowNav] = useState(false);
  const [showNavIcon, setShowNavIcon] = useState(false);

  const routeHandler = () => {
    if (showNav == true) {
      return showNav(false);
    }
    setShowNav(true);
  };
  const routeArrowHandler = () => {
    setShowNavIcon(true);
  };

  const menuItem = [
    {
      path: "/",
      name: "Inbox",
      icon: <RiInboxArchiveFill />,
    },
    {
      path: "/assets",
      name: "Assets",
      icon: <FaImage />,
    },

    {
      path: "/pack-copy",
      name: "Pack Copy",
      icon: <MdFileCopy />,
    },

    {
      path: "/specifications",
      name: "Specifications",
      icon: <BiListCheck />,
    },

    {
      path: "/reporting",
      name: "Reporting",
      icon: <HiChartPie />,
    },

    {
      path: "/new-request",
      name: "New Request",
      icon: <GiHealthNormal />,
    },
  ];

  return (
    <div className="main-container">
      <div style={{ width: isOpen ? "200px" : "55px" }} className="sidebar">
        <div className="top_section">
          {isOpen && (
            <img
              src="https://res.cloudinary.com/ddsej2ff9/image/upload/v1665393077/MicrosoftTeams-image_tejvle.png"
              className="img-logo"
              alt=""
            />
          )}
          {!isOpen && (
            <img
              src="https://res.cloudinary.com/duwkxxbeh/image/upload/v1666002585/mlogol_preview_rev_1_aj3xdi.png"
              className="small-logo"
              alt=""
            />
          )}

          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <IoIosArrowDropleft className="toggle-icon" onClick={toggle} />
          </div>

          {!isOpen && (
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <IoIosArrowDropright className="toggle-icon" onClick={toggle} />
            </div>
          )}
        </div>
        {menuItem.map((item, index) => (
          <NavLink end to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}

        {/* <Link onClick={routeArrowHandler} />
        {showNavIcon && (
          <FaAngleRight className="nav-icon-open" onClick={routeHandler} />
        )}

        {showNav && (
          <div className="dropdown-content">
            <Link to="/Assets/Search">
              <BiTable />
              Search
            </Link>
            <Link to="/Assets/Browse">
              <BiTable />
              Browse
            </Link>
          </div>
        )} */}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
