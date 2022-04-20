import { Typography, Stack } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import {
  useGetList,
  useRecordContext,
  UseRecordContextParams,
} from "react-admin";
import { Customer } from "./Customers";

export const ReviewsNbField = (props: UseRecordContextParams<Customer>) => {
  const record = useRecordContext<Customer>(props);
  const { data, total, isLoading, error } = useGetList("reviews", {
    pagination: { page: 1, perPage: 5 },
    filter: { customer_id: record.id },
  });

  if (isLoading) {
    return <Typography variant="body2">Loading</Typography>;
  }
  if (error) {
    return <Typography variant="body2">Error</Typography>;
  }
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <CommentIcon color="disabled" />
      <Typography variant="body2">
        {total} {total! && total > 0 ? "reviews" : "review"}
      </Typography>
    </Stack>
  );
};
