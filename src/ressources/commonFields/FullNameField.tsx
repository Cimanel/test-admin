import { Stack, Typography } from "@mui/material";
import { useRecordContext, UseRecordContextParams } from "react-admin";
import { AvatarField } from "../customers/AvatarField";
import { Customer } from "../customers/Customers";

export const FullNameField = (props: UseRecordContextParams<Customer>) => {
  const record = useRecordContext<Customer>(props);

  return record ? (
    <Stack direction="row" spacing={2} alignItems="center">
      <AvatarField record={record} />
      <Typography color="#4f3cc9">
        {record.first_name} {record.last_name}
      </Typography>
    </Stack>
  ) : null;
};
