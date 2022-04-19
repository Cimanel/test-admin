import { useRecordContext, UseRecordContextParams } from "react-admin";
import { Typography } from "@mui/material";
export const FullAddressField = (props: UseRecordContextParams) => {
  const record = useRecordContext(props);

  return record ? (
    <Typography color="black">
      {record.address}, {record.city}, {record.zipcode}
    </Typography>
  ) : null;
};
