import { Avatar } from "@mui/material";
import { RaRecord, UseRecordContextParams } from "react-admin";

export const AvatarField = ({
  record,
}: UseRecordContextParams): JSX.Element | null => {
  if (!record || (!record.avatar && !record.last_name && !record.first_name))
    return null;

  if (record.avatar) return <Avatar src={record.avatar} />;

  return <Avatar {...stringAvatar(record)} />;
};

function stringAvatar(record: RaRecord) {
  if (!record.first_name && !record.last_name) return null;
  return {
    sx: {
      bgcolor: "grey",
      color: "white",
    },
    children: `${record.first_name?.[0]}${record.last_name?.[0]}`,
  };
}
