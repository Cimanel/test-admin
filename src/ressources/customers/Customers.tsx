import { Box, Card, CardContent } from "@mui/material";
import {
  BooleanField,
  CreateButton,
  Datagrid,
  DateField,
  ExportButton,
  FilterLiveSearch,
  List,
  ListProps,
  NumberField,
  TopToolbar,
} from "react-admin";
import {
  HasNewsletterFilter,
  HasOrderedFilter,
  LastVisitedFilter,
} from "../../Filters";
import { FormattedTotalSpentField } from "./FormattedTotalSpentField";
import { FullNameField } from "../commonFields/FullNameField";
import { GroupChipField } from "./GroupChipField";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const FilterSidebar = () => (
  <Box
    display={{ xs: "none", sm: "block" }}
    order={-1} // display on the left rather than on the right of the list
    width="15em"
    marginRight="1em"
    marginTop="4em"
  >
    <Card variant="outlined">
      <CardContent>
        <FilterLiveSearch source="q" />
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
      <FullNameField label="Customers" source="last_name" />

      <DateField source="last_seen" />
      <NumberField source="nb_commands" label="Orders" color="purple" />
      <FormattedTotalSpentField source="total_spent" />
      <DateField source="latest_purchase" />
      <BooleanField source="has_newsletter" label="News." />
      <GroupChipField source="groups" />
    </Datagrid>
  );
};

export const CustomerList = (props: ListProps) => {
  return (
    <List
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
