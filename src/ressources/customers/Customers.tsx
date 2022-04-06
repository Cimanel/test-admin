import { Box, Card, CardContent } from "@mui/material";
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
  TopToolbar,
} from "react-admin";
import {
  HasNewsletterFilter,
  HasOrderedFilter,
  LastVisitedFilter,
} from "../../Filters";
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
    }}
  >
    <Card>
      <CardContent>
        <LastVisitedFilter />
        <HasOrderedFilter />
        <HasNewsletterFilter />
      </CardContent>
    </Card>
  </Box>
);

export const CustomerList = (props: ListProps) => (
  <List {...props} actions={<ListActions />} aside={<FilterSidebar />}>
    <Datagrid rowClick="edit">
      <FullNameField label="customers" />

      <DateField source="last_seen" />
      <DateField source="latest_purchase" />
      <BooleanField source="has_newsletter" />
      <ChipField source="groups" />
      <NumberField source="nb_commands" />
      <NumberField source="total_spent" />
    </Datagrid>
  </List>
);
