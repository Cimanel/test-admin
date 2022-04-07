import GroupIcon from "@mui/icons-material/Group";
import React from "react";
import { Admin, Resource } from "react-admin";
import "./App.css";
import { Dashboard } from "./Dashboard";
import { dataProvider } from "./data/DataProvider";
import { CommandList } from "./ressources/commands/comands";
import { CustomerList } from "./ressources/customers/Customers";

function App() {
  return (
    <div className="App">
      <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="customers" list={CustomerList} icon={GroupIcon} />
        <Resource name="commands" list={CommandList} icon={GroupIcon} />
      </Admin>
    </div>
  );
}

export default App;
