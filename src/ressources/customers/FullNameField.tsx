import { Box } from "@mui/material";
import { useRecordContext, UseRecordContextParams } from "react-admin";
import { AvatarField } from "./AvatarField";

export const FullNameField = (props: UseRecordContextParams) => {
  const record = useRecordContext(props);

  return record ? (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AvatarField record={record} />
      <span style={{ marginLeft: 10, color: "#4f3cc9" }}>
        {record.first_name} {record.last_name}
      </span>
    </Box>
  ) : null;
};
