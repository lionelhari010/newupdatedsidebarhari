import React from "react";

import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";

const columns = [
  { name: "task", header: "Task Name", minWidth: 150, defaultFlex: 1 },
  { name: "users", header: "Users", minWidth: 150, defaultFlex: 1 },
  { name: "duration", header: "Duration", minWidth: 150, defaultFlex: 1 },
  {
    name: "",
    header: "",
    minWidth: 50,
    defaultFlex: 1,

    render: () => {
      return <span>Edit</span>;
    },
  },
];

const gridStyle = { maxHeight: 980 };

const dataSource = [
  {
    id: 1,
    task: "Start",
    users: ["user1", "user2"],
    duration: "",
  },
  {
    id: 2,
    task: "Brief Upload",
    users: "user2",
    duration: "2",
  },
  {
    id: 3,
    task: "Artwork Upload",
    users: "user3",
    duration: "2",
  },
  {
    id: 3,
    task: "Artwork Approval",
    users: ["user6", "user4"],
    duration: "5",
  },
  {
    id: 4,
    task: "Print proof Upload",
    users: "user7",
    duration: "3",
  },
  {
    id: 5,
    task: "Print Proof Approval",
    users: ["user6", "user2"],
    duration: "3",
  },
];

const Tasks = () => {
  return (
    <div className="p-3">
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        dataSource={dataSource}
        style={gridStyle}
        minRowHeight={50}
      />
      <div className="d-flex justify-content-center align-content-center p-2">
        <button className="btn btn-grey btn-sm">submit</button>
        <button className="btn btn-grey btn-sm">save</button>
      </div>
    </div>
  );
};

export default Tasks;
