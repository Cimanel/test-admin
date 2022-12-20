import MonetizationOnIcon from "@mui/icons-material/MonetizationOnOutlined";
import { FilterList, FilterListItem } from "react-admin";

const SalesFilter = () => (
  <FilterList label="SALES" icon={<MonetizationOnIcon />}>
    <FilterListItem
      label="Best sellers"
      value={{
        sales_gt: 25,
      }}
    />
    <FilterListItem
      label="Average"
      value={{
        sales_gt: 10,
        sales_lte: 25,
      }}
    />
    <FilterListItem
      label="Low"
      value={{
        sales_gt: 0,
        sales_lte: 10,
      }}
    />
    <FilterListItem
      label="Never sold"
      value={{
        sales_lte: 0,
      }}
    />
  </FilterList>
);

export { SalesFilter };
