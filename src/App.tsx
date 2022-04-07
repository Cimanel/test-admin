import React from "react";
import { Admin, Resource } from "react-admin";
import "./App.css";
import { dataProvider } from "./data/DataProvider";
import { CustomerList } from "./ressources/customers/Customers";
import { Dashboard } from "./Dashboard";
import GroupIcon from "@mui/icons-material/Group";

import { createTheme } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="customers" list={CustomerList} icon={GroupIcon} />
      </Admin>
    </div>
  );
}

export default App;
