import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { ListProps, useListContext } from "react-admin";
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
export const TabbedCommandList = (props: ListProps) => {
  const [value, setValue] = useState(0);
  const { filterValues, setFilters } = useListContext();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setFilters({ status: Status[newValue] }, {});
  };

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
                label={Status[parseInt(item)].toUpperCase()}
                {...a11yProps(parseInt(item))}
              />
            );
          })}
        </Tabs>
      </Box>
      {Object.keys(Status).map((item) => {
        return (
          <TabPanel value={value} index={parseInt(item)} listProps={props} />
        );
      })}
    </Box>
  );
};
