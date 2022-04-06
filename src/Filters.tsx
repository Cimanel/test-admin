import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailIcon from "@mui/icons-material/MailOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOnOutlined";
import {
  endOfYesterday,
  startOfMonth,
  startOfWeek,
  subMonths,
  subWeeks,
} from "date-fns";
import { FilterList, FilterListItem } from "react-admin";

const LastVisitedFilter = () => (
  <FilterList label="Last visited" icon={<AccessTimeIcon />}>
    <FilterListItem
      label="Today"
      value={{
        last_seen_gte: endOfYesterday().toISOString(),
        last_seen_lte: undefined,
      }}
    />
    <FilterListItem
      label="This week"
      value={{
        last_seen_gte: startOfWeek(new Date()).toISOString(),
        last_seen_lte: undefined,
      }}
    />
    <FilterListItem
      label="Last week"
      value={{
        last_seen_gte: subWeeks(startOfWeek(new Date()), 1).toISOString(),
        last_seen_lte: startOfWeek(new Date()).toISOString(),
      }}
    />
    <FilterListItem
      label="This month"
      value={{
        last_seen_gte: startOfMonth(new Date()).toISOString(),
        last_seen_lte: undefined,
      }}
    />
    <FilterListItem
      label="Last month"
      value={{
        last_seen_gte: subMonths(startOfMonth(new Date()), 1).toISOString(),
        last_seen_lte: startOfMonth(new Date()).toISOString(),
      }}
    />
    <FilterListItem
      label="Earlier"
      value={{
        last_seen_gte: undefined,
        last_seen_lte: subMonths(startOfMonth(new Date()), 1).toISOString(),
      }}
    />
  </FilterList>
);
const HasOrderedFilter = () => (
  <FilterList label="Has ordered" icon={<MonetizationOnIcon />}>
    <FilterListItem
      label="Yes"
      value={{
        nb_commands_gte: 1,
        nb_commands_lte: undefined,
      }}
    />
    <FilterListItem
      label="No"
      value={{
        nb_commands_gte: undefined,
        nb_commands_lte: 0,
      }}
    />
  </FilterList>
);
const HasNewsletterFilter = () => (
  <FilterList label="Has newsletter" icon={<MailIcon />}>
    <FilterListItem label="Yes" value={{ has_newsletter: true }} />
    <FilterListItem label="No" value={{ has_newsletter: false }} />
  </FilterList>
);

export { HasNewsletterFilter, HasOrderedFilter, LastVisitedFilter };
