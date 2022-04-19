import { Box, Grid, Typography } from "@mui/material";
import {
  DateInput,
  Edit,
  EditProps,
  NullableBooleanInput,
  PasswordInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const Aside = () => (
  <Box width="200px" margin="1em">
    <Typography variant="h6">Instructions</Typography>
    <Typography variant="body2">
      Posts will only be published once an editor approves them
    </Typography>
  </Box>
);

export const CustomerEdit = (props: EditProps) => {
  return (
    <Edit aside={<Aside />}>
      <SimpleForm>
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
              <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                <TextInput
                  source="first_name"
                  isRequired
                  fullWidth
                  color="secondary"
                />
              </Box>
              <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                <TextInput source="last_name" isRequired fullWidth />
              </Box>
            </Box>
            <TextInput type="email" source="email" isRequired fullWidth />
            <DateInput source="birthday" />
            <Box m={1} />
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <TextInput
              source="address"
              multiline
              fullWidth
              helperText={false}
            />
            <Box display={{ xs: "block", sm: "flex" }}>
              <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
                <TextInput source="city" fullWidth helperText={false} />
              </Box>
              <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                <TextInput source="stateAbbr" fullWidth helperText={false} />
              </Box>
              <Box flex={2}>
                <TextInput source="zipcode" fullWidth helperText={false} />
              </Box>
            </Box>
            <Box m={1} />
            <Typography variant="h6" gutterBottom>
              Password
            </Typography>
            <Box display={{ xs: "block", sm: "flex" }}>
              <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                <PasswordInput source="password" fullWidth />
              </Box>
              <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                <PasswordInput source="new_password" fullWidth />
              </Box>
            </Box>
            <Box m={1} />
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
