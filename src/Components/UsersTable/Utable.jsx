import React from "react";
import "../UsersTable/Utable.css";
import { DataGrid } from "@mui/x-data-grid";

const Utable = ({ toggleShowInfo, columns, rows, id }) => {
  return (
    <div style={{ height: 550, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        className="datagrid"
        onRowClick={() => toggleShowInfo(id)}
      />
    </div>
  );
};

export default Utable;
