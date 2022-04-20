import { Box, Card, Grid, Typography } from "@mui/material";
import {
  DateInput,
  Edit,
  EditProps,
  NullableBooleanInput,
  PasswordInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
  useRecordContext,
  UseRecordContextParams,
} from "react-admin";
import { FieldErrors, FieldValues } from "react-hook-form";
import { Aside } from "./Aside";
import { Customer } from "./CustomerList";

const CustomerTitle = () => {
  const record = useRecordContext<Customer>();
  return (
    <Typography>
      {record.first_name} {record.last_name}
    </Typography>
  );
};

const validateCustomerEdit = (values: FieldValues) => {
  const errors: FieldErrors = {};
  // if (!values.first_name) {
  //   errors.first_name = "The firstName is required";
  // }
  if (!values.last_name) {
    errors.last_name = "The lastName is required";
  }
  if (!values.email) {
    errors.email = "The email is required";
  }
  return errors;
};

export const CustomerEdit = (props: EditProps) => {
  return (
    <Edit
      aside={<Aside />}
      title={<CustomerTitle />}
      component={(props) => <Card variant="outlined" {...props} />}
    >
      <SimpleForm validate={validateCustomerEdit}>
        <Grid
          container
          spacing={3}
          width={{ xs: "100%", lg: 1000 }}
          textAlign="left"
        >
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              Identity
            </Typography>
            <Box display={{ xs: "block", sm: "flex" }}>
              <TextInput
                sx={{ flex: 1, mr: { xs: 0, sm: "0.5em" } }}
                source="first_name"
                isRequired
                fullWidth
                color="secondary"
              />
              <TextInput
                sx={{ flex: 1, ml: { xs: 0, sm: "0.5em" } }}
                source="last_name"
                isRequired
                fullWidth
              />
            </Box>
            <TextInput type="email" source="email" isRequired fullWidth />
            <DateInput source="birthday" />
            <Typography marginTop={2} variant="h6" gutterBottom>
              Address
            </Typography>
            <TextInput
              source="address"
              multiline
              fullWidth
              helperText={false}
            />
            <Box display={{ xs: "block", sm: "flex" }}>
              <TextInput
                sx={{ flex: 1, mr: { xs: 0, sm: "0.5em" } }}
                source="city"
                fullWidth
                helperText={false}
              />
              <TextInput
                sx={{ flex: 1, mr: { xs: 0, sm: "0.5em" } }}
                source="stateAbbr"
                fullWidth
                helperText={false}
              />
              <TextInput
                sx={{ flex: 2 }}
                source="zipcode"
                fullWidth
                helperText={false}
              />
            </Box>
            <Typography marginTop={2} variant="h6" gutterBottom>
              Password
            </Typography>
            <Box display={{ xs: "block", sm: "flex" }}>
              <PasswordInput
                sx={{ flex: 1, mr: { xs: 0, sm: "0.5em" } }}
                source="password"
                fullWidth
              />
              <PasswordInput
                sx={{ flex: 1, ml: { xs: 0, sm: "0.5em" } }}
                source="new_password"
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Stats
            </Typography>
            <SelectArrayInput
              fullWidth
              label="Segments"
              source="groups"
              choices={[
                { id: "compulsive", name: "Compulsive" },
                { id: "collecor", name: "Collector" },
                { id: "reviewer", name: "Reviewer" },
                { id: "regular", name: "Regular" },
                { id: "returns", name: "Returns" },
                { id: "ordered_once", name: "Ordered once" },
              ]}
            />
            <NullableBooleanInput
              label="Has newsletter"
              source="has_newsletter"
              fullWidth
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};
