import ProductList from '@/components/shared/product/ProductList';
import { getLatestProducts } from '@/lib/actions/product.actions';

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList products={latestProducts} title='Newest Arrivals' />
    </>
  );
};

export default HomePage;
