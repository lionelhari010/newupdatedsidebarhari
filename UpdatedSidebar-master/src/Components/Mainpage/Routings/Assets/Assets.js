import React from "react";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import AssetMainPage from "./AssetDetails/AssetMainPage/AssetMainPage";
import AssetBrowse from "./AssetDetails/Browse/AssetBrowse";
import AssetSearch from "./AssetDetails/Search/AssetSearch";
import "./assets.css";

const Assets = () => {
  return (
    <section>
      <div className="d-flex flex-row justify-content-between align-items-center ">
        <div className="d-flex align-items-center ">
          <BsSliders className="top-section-asset-icon" />
          <h1 className="top-section-heading">Assets</h1>
        </div>
        <div>
          <MdNotifications className="top-section-icon" />
          <BsFillQuestionCircleFill className="top-section-icon" />
        </div>
      </div>
      <AssetMainPage />
      {/* <AssetBrowse /> */}
      {/* <AssetSearch /> */}
    </section>
  );
};

export default Assets;
