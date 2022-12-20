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
  SavedQueriesList,
  useListContext,
} from "react-admin";
import { SalesFilter } from "./Filters";

export const ProductList = () => (
  <List
    emptyWhileLoading
    aside={<FilterSidebar />}
    title={<Typography variant="h5">Posters</Typography>}
    pagination={<ProductPagination />}
    component={(props) => <Box {...props} />}
  >
    <TitlebarImageList />
  </List>
);
const FilterSidebar = () => (
  <Box
    display={{ xs: "none", sm: "block" }}
    order={-1}
    marginRight="1em"
    marginTop="5em"
    alignSelf="start"
    width="200px"
  >
    <Card variant="outlined">
      <CardContent>
        <SavedQueriesList />
        <FilterLiveSearch source="q" />
        <SalesFilter />
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
    <ImageList cols={isXl ? 8 : isLg ? 4 : isMd ? 2 : 1} rowHeight={180}>
      {data.map((product) => (
        <ImageListItem key={product.isRequired}>
          <img
            src={product.image}
            srcSet={product.image}
            alt={product.reference}
            loading="lazy"
          />
          <ImageListItemBar
            title={product.reference}
            subtitle={() =>
              `${product.width}x${product.height}, ${product.price} $US`
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const ProductPagination = () => (
  <Pagination rowsPerPageOptions={[16, 24, 32, 48, 96]} />
);
