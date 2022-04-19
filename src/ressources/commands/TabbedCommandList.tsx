import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useListContext } from "react-admin";
import { TabPanel } from "./TabPanel";

const Status: { [key: number]: string } = {
  0: "ordered",
  1: "delivered",
  2: "cancelled",
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const TabbedCommandList = () => {
  const [value, setValue] = useState(0);
  const { filterValues, setFilters } = useListContext();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => setFilters({ status: Status[value] }, {}), [value]);

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          {Object.keys(Status).map((item) => {
            return (
              <Tab
                key={item}
                label={Status[parseInt(item)].toUpperCase()}
                {...a11yProps(parseInt(item))}
              />
            );
          })}
        </Tabs>
      </Box>
      <TabPanel />
    </Box>
  );
};
