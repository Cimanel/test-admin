import {
  BooleanField,
  CreateButton,
  Datagrid,
  DateField,
  EmailField,
  ExportButton,
  List,
  ListProps,
  NumberField,
  TextField,
  TopToolbar,
} from "react-admin";
import { Box, Card, CardContent } from "@mui/material";
import {
  LastVisitedFilter,
  HasOrderedFilter,
  HasNewsletterFilter,
} from "../filters";

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
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="avatar" />
      <DateField source="last_seen" />
      <DateField source="latest_purchase" />
      <BooleanField source="has_newsletter" />
      <TextField source="groups" />
      <NumberField source="nb_commands" />
      <NumberField source="total_spent" />
    </Datagrid>
  </List>
);
