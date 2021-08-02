import React from "react";
import "./userList.scss";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    width: 150,
    editable: true,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.userName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "transaction",
    headerName: "Transaction",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <button className="userListEdit">Edit</button>
          <DeleteOutline />
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    userName: "Umesh Rai",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    email: "umesh@admin.com",
    status: "active",
    transaction: "$1200.23",
  },
  {
    id: 2,
    userName: "Umesh Rai",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    email: "umesh@admin.com",
    status: "active",
    transaction: "$1200.23",
  },
  {
    id: 3,
    userName: "Umesh Rai",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    email: "umesh@admin.com",
    status: "active",
    transaction: "$1200.23",
  },
  {
    id: 4,
    userName: "Umesh Rai",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    email: "umesh@admin.com",
    status: "active",
    transaction: "$1200.23",
  },
];
const UserList = () => {
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
