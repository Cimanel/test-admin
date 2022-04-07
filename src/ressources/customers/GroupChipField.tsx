import { BooleanField, useRecordContext } from "react-admin";
import { Chip } from "@mui/material";

export const GroupChipField = ({ source }: { source: string }) => {
  const record = useRecordContext();

  return record[source]
    ? record[source].map((item: string) => {
        formatString(item);
        return (
          <Chip
            key={record.id + item}
            label={formatString(item)}
            sx={{ color: "purple", fontWeight: "bold", marginRight: 1 }}
          />
        );
      })
    : null;
};

const formatString = (item: string): string => {
  let formatGroup = item.replace(/_/, " ");
  return formatGroup[0].toUpperCase() + formatGroup.slice(1);
};
