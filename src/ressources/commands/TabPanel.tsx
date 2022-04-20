import { Box } from "@mui/material";
import {
  BooleanField,
  Datagrid,
  DateField,
  FunctionField,
  NumberField,
  RaRecord,
  ReferenceField,
  TextField,
} from "react-admin";
import { FullAddressField } from "../commonFields/FullAddressField";
import { FullNameField } from "../commonFields/FullNameField";



export function TabPanel() {
  return (
    <Box role="tabpanel" id={`simple-tabpanel`} aria-labelledby={`simple-tab`}>
      <Box>
        <Datagrid rowClick="edit">
          <DateField source="date" showTime />
          <TextField source="reference" />

          <ReferenceField source="customer_id" reference="customers">
            <FullNameField />
          </ReferenceField>
          <ReferenceField
            source="customer_id"
            reference="customers"
            label="Address"
          >
            <FullAddressField />
          </ReferenceField>
          <FunctionField
            label="Nb items"
            render={(record: RaRecord) => {
              let nbItemsCalculated = record.basket.reduce(
                (previousValue: number, currentValue: { quantity: number }) =>
                  previousValue + currentValue.quantity,
                0
              );
              return ` ${nbItemsCalculated}`;
            }}
          />
          <NumberField
            textAlign="right"
            fontWeight="bolder"
            source="total"
            label="Total"
            options={{ style: "currency", currency: "USD" }}
          />
          <BooleanField source="returned" />
        </Datagrid>
      </Box>
    </Box>
  );
}
