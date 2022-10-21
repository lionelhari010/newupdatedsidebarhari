import React from "react";

import "./inbox.css";

import { BsSliders } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";

import TableIcon from "@rsuite/icons/Table";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import MainTableGrid from "../../Tables/MainTableGrid";

const dropdownMenu = [
  {
    id: 1,
    text: " Print Proof Requests",
    icon: <TableIcon />,
  },
  {
    id: 2,
    text: "In Progress",
    icon: <TableIcon />,
  },
  {
    id: 3,
    text: "Completed",
    icon: <TableIcon />,
  },
  {
    id: 4,
    text: "New Products",
    icon: <TableIcon />,
  },
  {
    id: 5,
    text: " Shange Requests",
    icon: <TableIcon />,
  },
  {
    id: 6,
    text: "Promo Requests",
    icon: <TableIcon />,
  },
];

const Inbox = () => {
  return (
    <section>
      <div className="d-flex flex-row justify-content-between align-items-center ">
        <div className="d-flex align-items-center ">
          <Dropdown className="dropdown-styling" icon={<BsSliders />}>
            {dropdownMenu.map((item) => (
              <Dropdown.Item key={item.id} icon={item.icon}>
                {item.text}
              </Dropdown.Item>
            ))}
          </Dropdown>
          <h1 className="top-section-heading">Inbox</h1>
        </div>
        <div>
          <MdNotifications className="top-section-icon" />
          <BsFillQuestionCircleFill className="top-section-icon" />
        </div>
      </div>
      <MainTableGrid />
    </section>
  );
};

export default Inbox;
