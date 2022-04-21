import {
  Box,
  Card,
  CardContent,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import {
  FilterLiveSearch,
  List,
  Pagination,
  useListContext,
} from "react-admin";

const FilterSidebar = () => (
  <Box
    display={{ xs: "none", sm: "block" }}
    order={-1}
    width="15em"
    marginRight="1em"
    marginTop="4em"
  >
    <Card variant="outlined">
      <CardContent>
        <FilterLiveSearch source="q" />
      </CardContent>
    </Card>
  </Box>
);

const TitlebarImageList = () => {
  const { data, setPerPage } = useListContext();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  useEffect(() => setPerPage(16), []);

  return (
    <ImageList
      sx={{ margin: 1, width: { xl: 1300, lg: 720, md: 360, xs: 180 } }}
      cols={isXl ? 8 : isLg ? 4 : isMd ? 2 : 1}
      rowHeight={180}
    >
      {data.map((item) => (
        <ImageListItem key={item.image}>
          <img
            src={`${item.image}`}
            srcSet={`${item.image}`}
            alt={item.reference}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.reference}
            subtitle={`${item.width}x${item.height}, ${item.price} $US`}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const ProductPagination = () => (
  <Pagination rowsPerPageOptions={[16, 24, 32, 48, 96]} />
);

export const ProductList = () => (
  <List
    emptyWhileLoading
    aside={<FilterSidebar />}
    component={(props) => <Card variant="outlined" {...props} />}
    title={<Typography variant="h5">Posters</Typography>}
    pagination={<ProductPagination />}
  >
    <TitlebarImageList />
  </List>
);
