import { useRecordContext, UseRecordContextParams } from "react-admin";

export const FullAddressField = (props: UseRecordContextParams) => {
  const record = useRecordContext(props);

  return record ? (
    <span style={{ color: "black" }}>
      {record.address}, {record.city}, {record.zipcode}
    </span>
  ) : null;
};
