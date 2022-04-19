import {
  CreateButton,
  ExportButton,
  List,
  ListProps,
  TopToolbar,
} from "react-admin";
import { TabbedCommandList } from "./TabbedCommandList";

export const ListActions = () => {
  return (
    <TopToolbar>
      <CreateButton />
      <ExportButton />
    </TopToolbar>
  );
};

export const CommandList = (props: ListProps) => {
  return (
    <List actions={<ListActions />}>
      <TabbedCommandList />
    </List>
  );
};
