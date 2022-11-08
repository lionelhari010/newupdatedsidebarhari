import React from "react";

import "./files.css";

import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";

import { FaBars } from "react-icons/fa";

const columns = [
  {
    name: "actions",
    header: "Actions",
    defaultFlex: 1,

    render: ({ value }) => (
      <>
        <button
          style={{
            backgroundColor: "#ffc466",
            padding: "8px",
            outline: "none",
            borderRadius: "5px",
            border: "none",
            marginRight: "20px",
          }}
          type="button"
        >
          {value}
        </button>
        <FaBars />
      </>
    ),
  },
  { name: "filename", header: "Filename", defaultFlex: 1 },
  { name: "version", header: "Version", defaultFlex: 1 },
  { name: "file_type", header: "File Type", defaultFlex: 1 },
  { name: "added_by", header: "ADDED BY", defaultFlex: 1 },
  { name: "added_on", header: "ADDED ON", defaultFlex: 1 },
];

const gridStyle = { maxHeight: 550 };

const dataSource = [
  {
    id: 1,
    actions: "Update File",
    filename: "12oz_garlic_hummus.pdf",
    version: "0.1",
    file_type: "Artwork",
    added_by: "Peter Smith",
    added_on: "20 Jun 2022",
  },
  {
    id: 2,
    actions: "Update File",
    filename: "Brief_document.docx",
    version: "0.2",
    file_type: "Brief",
    added_by: "Tom Satter",
    added_on: "20 Jun 2022",
  },
  {
    id: 3,
    actions: "Update File",
    filename: "label_dieline.docx",
    version: "0.1",
    file_type: "Dieline",
    added_by: "Peter Smith",
    added_on: "20 Jun 2022",
  },
];

const Files = () => {
  return (
    <div className="p-3">
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        dataSource={dataSource}
        style={gridStyle}
        minRowHeight={40}
      />
      <div className="d-flex justify-content-center align-content-center p-2">
        <button className="btn btn-grey btn-sm">submit</button>
        <button className="btn btn-grey btn-sm">save</button>
      </div>
    </div>
  );
};

export default Files;
