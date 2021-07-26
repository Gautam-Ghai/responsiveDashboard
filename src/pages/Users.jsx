import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userRows } from "../dummyData";

//Material-Ui
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";

export default function Users() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="User Image"
              src={params.row.avatar}
              style={{ display: "inline-block", marginRight: "10px" }}
            />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row.id}>
              <button
                className="userListEdit"
                style={{
                  border: "none",
                  borderRadius: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#3bb077",
                  color: "white",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
              >
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
              style={{
                color: "red",
                cursor: "pointer",
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={7}
          checkboxSelection
          autoHeight
        />
      </div>
    </div>
  );
}
