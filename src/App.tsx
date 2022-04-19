import GroupIcon from "@mui/icons-material/Group";
import React from "react";
import { Admin, EditGuesser, Resource } from "react-admin";
import "./App.css";
import { Dashboard } from "./Dashboard";
import { dataProvider } from "./data/dataProvider";
import { CommandList } from "./ressources/commands/CommandList";
import { CustomerList } from "./ressources/customers/Customers";

function App() {
  return (
    <div className="App">
      <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource
          name="customers"
          list={CustomerList}
          icon={GroupIcon}
          edit={EditGuesser}
        />
        <Resource name="commands" list={CommandList} icon={GroupIcon} />
      </Admin>
    </div>
  );
}

export default App;
