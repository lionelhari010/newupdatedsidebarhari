import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { FaImage } from "react-icons/fa";

import { BiListCheck } from "react-icons/bi";

import { MdFileCopy } from "react-icons/md";
import { HiChartPie } from "react-icons/hi";

import { GiHealthNormal } from "react-icons/gi";

import { RiInboxArchiveFill } from "react-icons/ri";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { BiTable } from "@react-icons/all-files/bi/BiTable";
import { FaUserShield } from "react-icons/fa";
import "./Sidebar.css";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBBtn,
} from "mdb-react-ui-kit";
import AssetSearch from "../Routings/Assets/AssetDetails/Search/AssetSearch";
import AssetBrowse from "../Routings/Assets/AssetDetails/Browse/AssetBrowse";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showNavIcon, setShowNavIcon] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const routeHandler = () => {
    if (showNav == true) {
      return setShowNav(false);
    }
    setShowNav(true);
  };
  const routeArrowHandler = () => {
    setShowNavIcon(!showNavIcon);
  };
  const toggleLinkIcon = () => {
    setShowNav(false);
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
        {menuItem.map((item, index) => {
          if (
            item.path === "/pack-copy" ||
            item.path === "/specifications" ||
            item.path === "/reporting"
          ) {
            return (
              <NavLink end to={item.path} key={index} className="link">
                <div className="icon">{item.icon}</div>
                <div
                  style={{
                    display: isOpen ? "block" : "none",
                    pointerEvents: "none",
                  }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            );
          }
          // if (item.path === "/assets") {
          //   return (
          //     <NavLink end to={item.path} key={index} className="link">
          //       <MDBDropdown dropright group className="shadow-0 assetDropdown">
          //         <div className="icon">{item.icon}</div>
          //         <MDBBtn
          //           color="link"
          //           style={{ display: isOpen ? "block" : "none" }}
          //           className="link_text"
          //         >
          //           Assets
          //         </MDBBtn>
          //         <MDBDropdownToggle color="link" />
          //         <MDBDropdownMenu>
          //           <MDBDropdownItem link>Action</MDBDropdownItem>
          //           <MDBDropdownItem link>Another action</MDBDropdownItem>
          //           <MDBDropdownItem link>Something else here</MDBDropdownItem>
          //           <MDBDropdownItem divider />
          //           <MDBDropdownItem link>Separated link</MDBDropdownItem>
          //         </MDBDropdownMenu>
          //       </MDBDropdown>
          //     </NavLink>
          //   );
          // }

          return (
            <NavLink
              end
              to={item.path}
              key={index}
              className="link"
              onClick={routeArrowHandler}
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>

              {showNavIcon && item.path === "/assets" && (
                <FaAngleRight
                  className="nav-icon-open"
                  onClick={routeHandler}
                />
              )}

              {showNav && item.path === "/assets" && (
                <div className="dropdown-content">
                  <Link
                    to="/Assets/Search"
                    element={<AssetSearch />}
                    onClick={toggleLinkIcon}
                    className="linkname"
                  >
                    <BiTable />
                    <span>Search</span>
                  </Link>
                  <Link
                    to="/Assets/Browse"
                    element={<AssetBrowse />}
                    onClick={toggleLinkIcon}
                    className="linkname"
                  >
                    <BiTable />
                    <span>Browse</span>
                  </Link>
                </div>
              )}
            </NavLink>
          );
        })}
        <hr />
        <div>
          <NavLink to="/admin" className="link">
            <div className="icon">
              <FaUserShield />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              Admin
            </div>
          </NavLink>
        </div>
      </div>
      <main>{children}</main>
      <hr />
    </div>
  );
};

export default Sidebar;
