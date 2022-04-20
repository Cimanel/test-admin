import { Stack, Grid, Typography, Card } from "@mui/material";
import { DateField, FunctionField, RaRecord } from "react-admin";
import { ReviewsNbField } from "./ReviewsNbField";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
export const Aside = () => (
  <Card variant="outlined" sx={{ ml: 2, padding: 2, textAlign: "left" }}>
    <Typography variant="h6">History</Typography>
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      mt={1}
    >
      <Grid item xs={6}>
        <Stack direction="row" spacing={1}>
          <AccessTimeIcon color="disabled" />
          <Stack>
            <Typography variant="body2">First seen</Typography>
            <DateField source="first_seen" />
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={1} alignItems="center">
          <AttachMoneyIcon color="disabled" />
          <FunctionField
            render={(record: RaRecord) => {
              return `${record.nb_commands} ${
                record.nb_commands! > 0 ? "orders" : "order"
              }`;
            }}
          />
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={1}>
          <AccessTimeIcon color="disabled" />
          <Stack>
            <Typography variant="body2">Last seen</Typography>
            <DateField source="last_seen" label="Last seen" />
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <ReviewsNbField />
      </Grid>
    </Grid>
  </Card>
);
