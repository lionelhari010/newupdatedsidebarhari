import React, { useState, useParams } from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppContext } from "./Context";
import Inbox from "./Components/Mainpage/Routings/Inbox/Inbox";
import Assets from "./Components/Mainpage/Routings/Assets/Assets";
import NewRequest from "./Components/Mainpage/Routings/NewRequest/NewRequest";
import Admin from "./Components/Mainpage/Routings/Admin/Admin";
import Sidebar from "./Components/Mainpage/Sidebar/Sidebar";
import AssetBrowse from "./Components/Mainpage/Routings/Assets/AssetDetails/Browse/AssetBrowse";
import AssetSearch from "./Components/Mainpage/Routings/Assets/AssetDetails/Search/AssetSearch";
import RequestInfo from "../src/Components/Mainpage/Routings/NewRequest/NewRequestDetails/RequestInfo/RequestInfo";

import Files from "./Components/Mainpage/Routings/NewRequest/NewRequestDetails/Files/Files";

import Tasks from "./Components/Mainpage/Routings/NewRequest/NewRequestDetails/Tasks/Tasks";

import AuditLog from "./Components/Mainpage/Routings/NewRequest/NewRequestDetails/AuditLog/AuditLog";

import Comments from "./Components/Mainpage/Routings/NewRequest/NewRequestDetails/Comments/Comments";

const App = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    return setClicked(!clicked);
  };
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route exact path="/" element={<Inbox />} />
            <Route exact path="/Assets/" element={<Assets />} />
            <Route exact path="/Assets/Search" element={<AssetSearch />} />
            <Route exact path="/Assets/Browse" element={<AssetBrowse />} />
            <Route exact path="/new-request" element={<NewRequest />}>
              <Route exact path="request-info" element={<RequestInfo />} />
              <Route exact path="files" element={<Files />} />
              <Route exact path="tasks" element={<Tasks />} />
              <Route exact path="audit-log" element={<AuditLog />} />
              <Route exact path="comments" element={<Comments />} />
            </Route>
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
};

export default App;
