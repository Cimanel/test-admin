import { Box, Card, CardContent } from "@mui/material";
import {
  BooleanField,
  CreateButton,
  Datagrid,
  DateField,
  ExportButton,
  FilterLiveSearch,
  List,
  NumberField,
  SavedQueriesList,
  TopToolbar,
} from "react-admin";
import { FullNameField } from "../commonFields/FullNameField";
import {
  HasNewsletterFilter,
  HasOrderedFilter,
  LastVisitedFilter,
} from "./Filters";
import { FormattedTotalSpentField } from "./FormattedTotalSpentField";
import { GroupChipField } from "./GroupChipField";

export interface Customer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  birthday: Date;
  address: string;
  zipcode: string;
  city: string;
  avatar: string;
  first_seen: Date;
  last_seen: Date;
  nb_commands: number;
  total_spent: number;
  latest_purchase: Date;
  has_newsletter: boolean;
  has_ordered: boolean;
  groups: string[];
}

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
        <SavedQueriesList />
        <FilterLiveSearch source="q" />
        <LastVisitedFilter />
        <HasOrderedFilter />
        <HasNewsletterFilter />
      </CardContent>
    </Card>
  </Box>
);

export const CustomersDatagrid = () => {
  return (
    <Datagrid rowClick="edit">
      <FullNameField label="Customers" />

      <DateField source="last_seen" />
      <NumberField source="nb_commands" label="Orders" color="purple" />
      <FormattedTotalSpentField source="total_spent" />
      <DateField source="latest_purchase" />
      <BooleanField source="has_newsletter" label="News." />
      <GroupChipField source="groups" />
    </Datagrid>
  );
};

export const CustomerList = () => {
  return (
    <List
      aside={<FilterSidebar />}
      actions={<ListActions />}
      sort={{ field: "last_seen", order: "DESC" }}
      component={(props) => <Card variant="outlined" {...props} />}
      emptyWhileLoading
    >
      <CustomersDatagrid />
    </List>
  );
};
