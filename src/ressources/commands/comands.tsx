import {
  ArrayField,
  BooleanField,
  ChipField,
  CreateButton,
  Datagrid,
  DateField,
  ExportButton,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  SingleFieldList,
  TextField,
  TopToolbar,
} from "react-admin";
import { FullAddressField } from "../commonFields/FullAddressField";
import { FullNameField } from "../commonFields/FullNameField";

export const ListActions = () => {
  return (
    <TopToolbar>
      <CreateButton />
      <ExportButton />
    </TopToolbar>
  );
};

export const CommandList = (props: ListProps) => (
  <List {...props} actions={<ListActions />}>
    <Datagrid rowClick="edit">
      <DateField source="date" showTime />
      <TextField source="reference" />

      <ReferenceField source="customer_id" reference="customers">
        <FullNameField {...props} />
      </ReferenceField>
      <ReferenceField
        source="customer_id"
        reference="customers"
        label="Address"
      >
        <FullAddressField {...props} />
      </ReferenceField>
      <ArrayField source="basket">
        <SingleFieldList>
          <ChipField source="product_id" />
        </SingleFieldList>
      </ArrayField>
      <NumberField source="total" />
      <TextField source="status" />
      <BooleanField source="returned" />
    </Datagrid>
  </List>
);
