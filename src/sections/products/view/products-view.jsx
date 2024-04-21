import { useState, useEffect } from 'react';
import { getProducts } from 'src/APIs/getProducts';
import { NotFoundView } from 'src/sections/error';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ProductCard from '../product-card';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';

// ----------------------------------------------------------------------

export default function ProductsView() {
  const [openFilter, setOpenFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [sort, setSort] = useState('');

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const applyFilters = async (categor, pric) => {
    setCategory(categor);
    setPrice(pric);
  };

  const applySort = async (sor) => {
    setSort(sor);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {};
        if (category !== '') {
          params.category = category;
        }
        if (price !== '') {
          params.price = price;
        }
        if (sort !== '') {
          params.sort = sort;
        }
        const response = await getProducts(params);
        setProducts(response);
        // setApiCalled(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category, price, sort]);

  console.log('products', products);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
            onApplyFilters={applyFilters}
          />

          <ProductSort onApplySort={applySort} />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {(() => {
          if (products && products?.status === 'success' && products?.data?.length === 0) {
            return <NotFoundView custom data={'Products'} />;
          } else if (products && products?.status === 'failure') {
            return <NotFoundView failure />;
          } else {
            return products?.data?.map((product) => (
              <Grid key={product?._id} xs={12} sm={6} md={3}>
                <ProductCard product={product} />
              </Grid>
            ));
          }
        })()}
      </Grid>

      <ProductCartWidget />
    </Container>
  );
}
