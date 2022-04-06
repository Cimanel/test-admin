import React from "react";
import { Admin, Resource } from "react-admin";
import "./App.css";
import { dataProvider } from "./data/DataProvider";
import { CustomerList } from "./ressources/customers";
import { Dashboard } from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="customers" list={CustomerList} />
      </Admin>
    </div>
  );
}

export default App;
