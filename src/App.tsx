import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import GroupIcon from "@mui/icons-material/Group";
import { useFlags, withLDProvider } from "launchdarkly-react-client-sdk";
import { ComponentType } from "react";
import { Admin, defaultTheme, Resource } from "react-admin";
import "./App.css";
import { Dashboard } from "./Dashboard";
import { dataProvider } from "./data/dataProvider";
import { CommandList } from "./ressources/commands/CommandList";
import { CustomerEdit } from "./ressources/customers/CustomerEdit";
import { CustomerList } from "./ressources/customers/CustomerList";
import { ProductList } from "./ressources/products/productList";

const theme = {
  ...defaultTheme,
  sidebar: {
    width: 200, // The default value is 240
    closedWidth: 50, // The default value is 55
  },
};

function App() {
  const flags = useFlags();
  console.log(flags);
  return (
    <div className="App">
      <Admin theme={theme} dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource
          name="customers"
          list={CustomerList}
          icon={GroupIcon}
          edit={CustomerEdit}
        />
        <Resource name="commands" list={CommandList} icon={AttachMoneyIcon} />
        {flags.showProducts ? (
          <Resource name="products" list={ProductList} icon={BurstModeIcon} />
        ) : null}
      </Admin>
    </div>
  );
}

export default withLDProvider({
  clientSideID: "63a18b0a6b5f00113574206c",
})(App as ComponentType<{}>);
