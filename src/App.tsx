import React from "react";
import "./App.css";

import prepareAPIData from "./prepareAPIData";

import type {} from "@mui/x-data-grid/themeAugmentation";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "col1", headerName: "API", width: 150 },
  { field: "col2", headerName: "Auth", width: 150 },
  { field: "col3", headerName: "Category", width: 150 },
  { field: "col4", headerName: "Cors", width: 150 },
  { field: "col5", headerName: "HTTPS", width: 150 },
  { field: "col6", headerName: "Description", width: 750 },
];

function App() {
  const [rows, setRows] = React.useState<GridRowsProp>([]);

  React.useEffect(() => {
    async function prepareRows() {
      const response = await fetch("https://api.publicapis.org/entries");
      const data = await response.json();
      const preparedData = prepareAPIData(data.entries);
      setRows(preparedData);
    }
    prepareRows();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default App;
