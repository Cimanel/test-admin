import { Box } from "@mui/material";
import {
  ArrayField,
  BooleanField,
  ChipField,
  Datagrid,
  DateField,
  ListProps,
  NumberField,
  ReferenceField,
  SingleFieldList,
  TextField,
} from "react-admin";
import { FullAddressField } from "../commonFields/FullAddressField";
import { FullNameField } from "../commonFields/FullNameField";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
  listProps: ListProps;
};

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, listProps, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
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
            <NumberField
              sx={{ textAlign: "right", fontWeight: "bolder" }}
              source="total"
              label="Total"
              options={{ style: "currency", currency: "USD" }}
            />
            <TextField source="status" />
            <BooleanField source="returned" />
          </Datagrid>
        </Box>
      )}
    </Box>
  );
}
