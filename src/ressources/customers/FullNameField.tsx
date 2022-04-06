import { Box } from "@mui/material";
import { useRecordContext, UseRecordContextParams } from "react-admin";
import { AvatarField } from "./AvatarField";

export const FullNameField = (props: UseRecordContextParams) => {
  const record = useRecordContext(props);

  return record ? (
    <Box>
      <AvatarField source="record.avatar" />
      <span>
        {record.first_name} {record.last_name}
      </span>
    </Box>
  ) : null;
};
