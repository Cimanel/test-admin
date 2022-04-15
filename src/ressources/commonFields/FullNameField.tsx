import { Box, Typography } from "@mui/material";
import { useRecordContext, UseRecordContextParams } from "react-admin";
import { AvatarField } from "../customers/AvatarField";

export const FullNameField = (props: UseRecordContextParams) => {
  const record = useRecordContext(props);

  return record ? (
    <Box display="flex" alignItems="center">
      <AvatarField record={record} />
      <Typography ml={10} color="#4f3cc9">
        {record.first_name} {record.last_name}
      </Typography>
    </Box>
  ) : null;
};
