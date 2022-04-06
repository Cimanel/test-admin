import { useRecordContext, UseRecordContextParams } from "react-admin";
import { Avatar } from "@mui/material";

export const AvatarField = (props: UseRecordContextParams) => {
  const record = useRecordContext(props);
  return record ? <Avatar src={record.avatar} /> : null;
};
