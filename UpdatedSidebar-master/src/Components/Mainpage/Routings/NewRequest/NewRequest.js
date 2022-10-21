import React from "react";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";

const newRequestRoutes = [
  {
    path: "/new-request/request-info",
    name: "Request Info",
  },
  {
    path: "/new-request/copy",
    name: "Copy",
  },
  {
    path: "/new-request/spec",
    name: "Spec",
  },
  {
    path: "/new-request/files",
    name: "Files",
  },
  {
    path: "/new-request/tasks",
    name: "Tasks",
  },
  {
    path: "/new-request/audit-log",
    name: "Audit log",
  },
  {
    path: "/new-request/comments",
    name: "Comments",
  },
];

const NewRequest = () => {
  return (
    <section>
      <div className="d-flex flex-row justify-content-between align-items-center ">
        <div className="d-flex align-items-center ">
          <BsSliders className="top-section-asset-icon" />
          <h1 className="top-section-heading">New Artwork Request</h1>
        </div>
        <div>
          <MdNotifications className="top-section-icon" />
          <BsFillQuestionCircleFill className="top-section-icon" />
        </div>
      </div>
      <nav className="d-flex  px-2 ">
        {newRequestRoutes.map((item, index) => (
          <NavLink className="mx-2" end to={item.path} key={index}>
            <div>{item.name}</div>
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </section>
  );
};

export default NewRequest;
