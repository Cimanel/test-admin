import { NumberField, RaRecord, useRecordContext } from "react-admin";

type FormattedTotalSpentFieldProps = {
  source: string;
};

export const FormattedTotalSpentField = ({
  source,
}: FormattedTotalSpentFieldProps) => {
  const record = useRecordContext();

  return record ? (
    <NumberField
      sx={() => (record[source] > 500 ? { color: "red" } : { color: "grey" })}
      source={source}
      label="Total spent"
      options={{ style: "currency", currency: "USD" }}
    />
  ) : null;
};
FormattedTotalSpentField.defaultProps = {
  textAlign: "right",
};
