import { Box, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import {
  BooleanField,
  ChipField,
  CreateButton,
  Datagrid,
  DateField,
  ExportButton,
  List,
  ListProps,
  NumberField,
  RaRecord,
  TopToolbar,
  useListContext,
  useRecordContext,
} from "react-admin";
import {
  HasNewsletterFilter,
  HasOrderedFilter,
  LastVisitedFilter,
} from "../../Filters";
import { FormattedTotalSpentField } from "./FormattedTotalSpentField";
import { FullNameField } from "./FullNameField";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const FilterSidebar = () => (
  <Box
    sx={{
      display: {
        xs: "none",
        sm: "block",
      },
      order: -1, // display on the left rather than on the right of the list
      width: "15em",
      marginRight: "1em",
      marginTop: "4em",
    }}
  >
    <Card variant="outlined">
      <CardContent>
        <LastVisitedFilter />
        <HasOrderedFilter />
        <HasNewsletterFilter />
      </CardContent>
    </Card>
  </Box>
);

export const CustomersDatagrid = (props: ListProps) => {
  return (
    <Datagrid rowClick="edit">
      <FullNameField label="Customers" />

      <DateField source="last_seen" />
      <NumberField
        source="nb_commands"
        label="Orders"
        sx={{ color: "purple" }}
      />
      <FormattedTotalSpentField source="total_spent" />
      <DateField source="latest_purchase" />
      <BooleanField source="has_newsletter" label="News." />
      <ChipField source="groups" />
    </Datagrid>
  );
};

export const CustomerList = (props: ListProps) => {
  return (
    <List
      {...props}
      aside={<FilterSidebar />}
      actions={<ListActions />}
      sx={{
        "& .RaDatagrid-headerCell": { fontWeight: "bold" },
      }}
      sort={{ field: "last_seen", order: "DESC" }}
      component={(props) => <Card variant="outlined" {...props} />}
      emptyWhileLoading
    >
      <CustomersDatagrid {...props} />
    </List>
  );
};
